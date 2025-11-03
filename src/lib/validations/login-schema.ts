import z from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Alamat email yang Anda masukkan tidak valid." }),
  password: z.string().min(8, {
    message:
      "Ups, kata sandinya masih kurang panjang nih (minimal 8 karakter).",
  }),
});

export type LoginFormSchema = z.infer<typeof loginSchema>;
