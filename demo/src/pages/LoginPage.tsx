import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"
import { useEffect, useState } from "react"

export default function LoginPage() {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    // Slight delay ensures smoother transition after route change
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`min-h-screen bg-gray-900 w-full overflow-x-hidden transition-all duration-700 ease-out ${
        pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div
        className="grid min-h-svh lg:grid-cols-2"
        style={{ backgroundColor: "#6B8BA2" }}
      >
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <a href="#" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-4" />
              </div>
              TechMotiveSupreme.
            </a>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="bg-muted relative hidden lg:block">
          <img
            src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/03/931/523/Business-Owner-Photo-1.jpg?ve=1&tl=1"
            alt="Business Owner"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[.5] dark:grayscale"
          />
        </div>
      </div>
    </div>
  )
}
