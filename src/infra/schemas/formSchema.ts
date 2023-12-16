import z from "zod";

export const formSchema = z.object({
  ddi: z.string(),
  phone: z
    .string()
    .min(3, "Mandatory telephone number.")
    .max(15, "Telephone number must be a maximum of 11 digits.")
    .transform((value) => {
      value = value.replace(/\D/g, "");
      return value;
    })
    .refine((value) => /^\d{10,11}$/.test(value), {
      message: "The phone number is invalid",
    }),
  message: z.string().optional(),
});
