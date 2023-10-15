import AuthForm from "@/app/(site)/components/AuthForm";

export default function Home() {
  return (
    <div
      className="
        flex
        min-h-full
        justify-center
        flex-col
        py-12
        sm:px-6
        lg:px-6
        bg-gray-100
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          className="
            text-center
            text-3xl
            font-bold
            tracking-tight
            text-gray-900
          "
        >
          Sign in to your account
        </h2>
      </div>
      {/* Auth form 📝 */}
      <AuthForm />
    </div>
  )
}
