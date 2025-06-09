import ClientWrapper from "@/components/client-wrapper"

export default function ConverziaLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      <ClientWrapper />

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/5 to-purple-900/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-lg">
            Crafted by <span className="font-semibold text-indigo-600">Ujjwal Tiwari</span> (Founder) &{" "}
            <span className="font-semibold text-indigo-600">Bhaskar Gupta</span> (Co-founder) • Built for founders who
            want to scale smarter, faster, better.
          </p>
        </div>
      </footer>
    </div>
  )
}
