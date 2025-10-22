"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Footer, Header, LinkCard } from "@/components";
import {
  InputField,
  SelectField,
  TextAreaField,
} from "@/components/form/fields";
import { SkeletonCard } from "@/components/loading/SkeletonCard";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { usePhoneUtils } from "@/contexts/phoneContext";
import { Formatter } from "@/utils/Formatter";
import { type CreateLinkSchema, createLinkSchema } from "./create-link-schema";

export function CreateLinkForm() {
  const [loading, setLoading] = useState(true);
  const { urlCopy, urlOpen, createLink, countries } = usePhoneUtils();

  const params = useParams<{ phone: string }>();
  const searchParams = useSearchParams();
  const country = searchParams.get("country");

  const form = useForm({
    values: {
      ddi: countries?.find((item) => {
        // Verifica se o country contém o código do país (separado por |)
        const countryCodes = item.country.split('|');
        return countryCodes.includes(country || '');
      })?.value ?? "",
      phone: params.phone ?? "",
    },
    resolver: zodResolver(createLinkSchema),
  });

  // Handler Phone Number
  const fieldPhone = form.watch("phone");

  useEffect(() => {
    if (fieldPhone) {
      form.setValue("phone", Formatter.formatPhoneNumber(fieldPhone));
      form.handleSubmit(onSubmit)();
      setLoading(false);
    }
    setLoading(false);
  }, [fieldPhone, form.setValue, form.handleSubmit]);

  const onSubmit = (data: CreateLinkSchema) => {
    createLink(data);
  };

  return (
    <main className="">
      <Header />
      <div className="flex flex-col gap-6 max-w-md w-full p-4 mx-auto">
        {loading ? (
          <SkeletonCard />
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col w-full max-w-2xl gap-8 p-6 border border-text border-opacity-20 bg-background rounded-lg"
            >
              <div className="flex flex-col gap-4">
                {countries ? (
                  <SelectField
                    name="ddi"
                    label="IDD"
                    placeholder="Select your country"
                    options={countries.map((item) => ({
                      value: item.value,
                      label: item.name,
                    }))}
                  />
                ) : null}
                <InputField
                  name="phone"
                  label="Phone"
                  placeholder="11912341234"
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
        )}

        {urlCopy && urlOpen && <LinkCard urlCopy={urlCopy} urlOpen={urlOpen} />}
      </div>
      <Footer />
    </main>
  );
}
