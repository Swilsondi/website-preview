import { LoginForm } from "@/components/login-form";

export default function Login() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />

        <div className="bg-red-500 text-white p-4">If this is red, Tailwind is working!</div>
      </div>
    </div>
  )
}
