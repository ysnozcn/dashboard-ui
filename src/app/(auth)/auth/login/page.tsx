import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="container relative flex h-[100vh] flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[800px]">
        <LoginForm />
      </div>
    </div>
  );
}
