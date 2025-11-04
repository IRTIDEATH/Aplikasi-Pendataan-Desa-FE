import { LoginForm } from "./_components/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-24">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  );
}
