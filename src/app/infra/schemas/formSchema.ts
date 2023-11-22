import z from "zod";

export const formSchema = z.object({
  ddi: z.number(),
  phone: z
    .string({ required_error: "Número de telefone obrigatório." })
    .max(15, "Número de telefone deve ser no maximo 11 digitos.")
    .transform((value) => {
      value = value.replace(/\D/g, "");
      return value;
    })
    .refine((value) => /^\d{10,11}$/.test(value), {
      message: "Digite apenas os números, DDD e telefone. Ex.: 11981112222",
    }),
  message: z.string().optional(),
});
