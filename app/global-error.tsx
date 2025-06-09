"use client"

import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 px-4">
          <div className="text-center max-w-md">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />

            <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Error</h1>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A critical error occurred. Please refresh the page or try again later.
            </p>

            <Button onClick={reset} className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}
