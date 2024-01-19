"use client";

import { useEffect } from "react";
import { formSchema } from "@/infra/schemas/formSchema";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Formatter } from "@/utils/Formatter";
import { usePhoneUtils } from "@/contexts/phoneContext";
import {
  Button,
  Input,
  Select,
  Header,
  Footer,
  TextArea,
  LinkCard,
} from "@/components";

export default function Home() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<IForm>({
    resolver: zodResolver(formSchema),
  });
  const { urlCopy, urlOpen, createLink, countries, verifyCountryIndex } = usePhoneUtils();

  // Handler Phone Number
  const fieldPhone = useWatch({
    control,
    name: "phone",
  });

  useEffect(() => {
    if (fieldPhone) {
      setValue("phone", Formatter.formatPhoneNumber(fieldPhone));
    }
  }, [fieldPhone, setValue]);

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data.ddi);
    createLink(data);
  };

  return (
    <main className="flex flex-col w-full h-screen justify-between bg-background overflow-hidden">
      <Header />
      <div className="flex flex-col flex-grow items-center justify-start p-4 gap-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full max-w-2xl gap-8 p-8 border border-text border-opacity-20 bg-background rounded-lg"
        >
          <div className="flex flex-col w-full gap-4">
            {countries ? <Select
              options={countries}
              label="IDD"
              tooltip="International Direct Dialing - https://en.wikipedia.org/wiki/International_direct_dialing"
              register={register("ddi")}
              indexSelected={verifyCountryIndex()}
              errorMessage={errors.ddi?.message}
            /> : null}
            <Input
              label="Phone"
              placeholder="11912341234"
              type="text"
              inputMode="tel"
              maxLength={18}
              register={register("phone")}
              errorMessage={errors.phone?.message}
            />

            <TextArea
              label="Message"
              placeholder="Hello world!"
              type="text"
              inputMode="text"
              register={register("message")}
              errorMessage={errors.message?.message}
            />
          </div>

          <Button label="Create Link" type="submit" />
        </form>

        {urlCopy && urlOpen && <LinkCard urlCopy={urlCopy} urlOpen={urlOpen} />}
      </div>
      <Footer />
    </main>
  );
}
