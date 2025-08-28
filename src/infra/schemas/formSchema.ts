import z from "zod";

export const formSchema = z.object({
  ddi: z.union([
    z
      .string()
      .min(1, "DDI is mandatory")
      .regex(
        /^\+\d+$/,
        "DDI must be a string of digits prefixed with a plus sign (+)",
      ),
    z.number().positive().int().min(1, "DDI is mandatory"),
  ]),
  phone: z
    .string()
    .min(3, "Mandatory telephone number.")
    .max(15, "Telephone number must be a maximum of 11 digits.")
    .transform((value) => {
      value = value.replace(/\D/g, "");
      return value;
    })
    .refine((value) => /^\d{10,11}$/.test(value), {
      error: "The phone number is invalid",
    }),
  error: z.string().optional(),
});
