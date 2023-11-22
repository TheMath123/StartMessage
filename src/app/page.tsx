"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Input,
  Select,
  Header,
  Footer,
  TextArea,
  LinkCard,
} from "./components";
import { formSchema } from "./infra/schemas/formSchema";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    console.log(data);
  };

  const ddis = {
    a: "Select here",
    "+55": "Brazil",
  };

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
