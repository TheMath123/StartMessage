"use client";

import { useEffect } from "react";
import { formSchema } from "./infra/schemas/formSchema";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Formatter } from "./utils/Formatter";
import {
  Button,
  Input,
  Select,
  Header,
  Footer,
  TextArea,
  LinkCard,
} from "./components";
import { usePhoneUtils } from "../contexts/phoneContext";

const ddis = [
  { name: "Selec here", value: "" },
  { name: "Brazil", value: "+55" },
];

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<IForm>({
    resolver: zodResolver(formSchema),
  });
  const { fetchDDIs } = usePhoneUtils();

  useEffect(() => {
    async function fetchDDIsData() {
      const aws = await fetchDDIs();
      console.log(aws);
    }

    fetchDDIsData();
  }, [fetchDDIs]);

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    console.log(data);
  };

  // Handler
  const fieldPhone = useWatch({
    control,
    name: "phone",
  });

  useEffect(() => {
    if (fieldPhone) {
      setValue("phone", Formatter.formatPhoneNumber(fieldPhone));
    }
  }, [fieldPhone, setValue]);

  return (
    <main className="flex flex-col w-full h-screen justify-between bg-background">
      <Header />
      <div className="flex flex-col flex-grow items-center justify-start p-4 gap-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full max-w-2xl gap-8 p-8 border border-text border-opacity-20 bg-background rounded-lg"
        >
          <div className="flex flex-col w-full gap-4">
            <Select
              options={ddis}
              label="DDI"
              register={register("ddi")}
              errorMessage={errors.ddi?.message}
            />

            <Input
              label="Phone"
              placeholder="11912341234"
              type="tel"
              register={register("phone")}
              errorMessage={errors.phone?.message}
            />

            <TextArea
              label="Message"
              placeholder="Hello world!"
              type="tel"
              register={register("message")}
              errorMessage={errors.message?.message}
            />
          </div>

          <Button label="Create Link" type="submit" />
        </form>

        <LinkCard
          url={
            "https://wa.me/+35512312312321?text=Olá+tudo+bem,+eae+como+vai?+Espero+que+esteja+tudo+bem,+podemos+conversar"
          }
        />
      </div>
      <Footer />
    </main>
  );
}
