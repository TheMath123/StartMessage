import z from "zod";

export const createLinkSchema = z.object({
  ddi: z
    .string()
    .min(1, "DDI is mandatory")
    .regex(
      /^\+\d+$/,
      "DDI must be a string of digits prefixed with a plus sign (+)",
    ),
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
  message: z
    .string()
    .max(4096, "Message must be a maximum of 4096 characters.")
    .optional(),
  error: z.string().optional(),
});

export type CreateLinkSchema = z.infer<typeof createLinkSchema>;
