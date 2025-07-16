"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 px-4">
      <div className="text-center max-w-md">
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong!</h1>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button onClick={reset} className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>

          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <details className="text-left bg-gray-100 p-4 rounded-lg text-sm">
            <summary className="cursor-pointer font-medium mb-2">Error Details (Development Only)</summary>
            <pre className="whitespace-pre-wrap text-red-600">{error.message}</pre>
          </details>
        )}

        <div className="mt-8 text-sm text-gray-500">
          <p>
            If this problem persists, please contact us at{" "}
            <a href="mailto:ujjwal.converzia@gmail.com" className="text-red-600 hover:underline">
              ujjwal.converzia@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
