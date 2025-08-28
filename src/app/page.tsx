"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Footer, Header, LinkCard, Select } from "@/components";
import { InputField } from "@/components/form/fields/input-field";
import { TextAreaField } from "@/components/form/fields/text-area-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { usePhoneUtils } from "@/contexts/phoneContext";
import { formSchema } from "@/infra/schemas/formSchema";
import { Formatter } from "@/utils/Formatter";

export default function Home() {
  const { urlCopy, urlOpen, createLink, countries } = usePhoneUtils();

  const params = useParams<{ phone: string }>();

  console.log("params", params.phone);

  const searchParams = useSearchParams();
  const country = searchParams.get("country");

  const form = useForm<IForm>({
    values: {
      ddi: countries?.find((item) => item.country === country)?.value ?? "",
      phone: params.phone ?? "",
    },
    resolver: zodResolver(formSchema),
  });

  // Handler Phone Number
  const fieldPhone = form.watch("phone");
  useEffect(() => {
    if (fieldPhone) {
      form.setValue("phone", Formatter.formatPhoneNumber(fieldPhone));
    }
  }, [fieldPhone, form.setValue]);

  const onSubmit: SubmitHandler<IForm> = (data) => {
    createLink(data);
  };

  return (
    <main className="flex flex-col w-full h-screen justify-between bg-background overflow-hidden">
      <Header />
      <div className="flex flex-col grow items-center justify-start p-4 gap-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-full max-w-2xl gap-8 p-8 border border-text border-opacity-20 bg-background rounded-lg"
          >
            <div className="flex flex-col w-full gap-4">
              {countries ? (
                <Select
                  options={countries}
                  label="IDD"
                  tooltip="International Direct Dialing - https://en.wikipedia.org/wiki/International_direct_dialing"
                  register={form.register("ddi")}
                  errorMessage={form.formState.errors.ddi?.message}
                />
              ) : null}

              <InputField
                name="phone"
                label="Phone"
                placeholder="11912341234"
                type="text"
                inputMode="tel"
              />

              <TextAreaField
                name="message"
                label="Message"
                placeholder="Hello world!"
                inputMode="text"
              />
            </div>

            <Button type="submit">Create Link</Button>
          </form>
        </Form>

        {urlCopy && urlOpen && <LinkCard urlCopy={urlCopy} urlOpen={urlOpen} />}
      </div>
      <Footer />
    </main>
  );
}
