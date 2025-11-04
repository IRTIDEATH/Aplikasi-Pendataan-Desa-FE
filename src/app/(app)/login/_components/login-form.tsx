"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { ErrorContext } from "better-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth";
import {
  type LoginFormSchema,
  loginSchema,
} from "@/lib/validations/login-schema";

export function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialValues,
  });

  const submit = form.handleSubmit(async (data) => {
    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          toast.success("Berhasil masuk", {
            description: "Anda akan dipindahkan ke halaman Onboarding",
          });
        },
        onError: (ctx: ErrorContext) => {
          console.log(ctx);
          toast("Ada yang salah", {
            description: ctx.error.message ?? "Ada sesuatu yang salah",
          });
        },
      },
    );
  });

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={submit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold text-nord-6">
                  Selamat Datang
                </h1>
                <p className="text-nord-4 text-balance">
                  Silakan masuk untuk mengakses akun dan data desa Anda.
                </p>
              </div>
              <Controller
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="email">Alamat Surel</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="seseorang@gmail.com"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Kata Sandi</FieldLabel>
                      <Link
                        href="#"
                        className="ml-auto text-sm underline-offset-2 hover:underline text-nord-4"
                      >
                        Lupa kata sandi Anda?
                      </Link>
                    </div>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      type="password"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Field>
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="cursor-pointer"
                >
                  {form.formState.isSubmitting ? "Login..." : "Login"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              fill
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
