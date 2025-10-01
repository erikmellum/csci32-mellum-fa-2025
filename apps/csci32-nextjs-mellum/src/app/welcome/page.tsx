'use client'

import AuthExample from '@/components/AuthExample'

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome! 👋
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started by signing up for a new account or signing in to your existing account.
          </p>
        </div>

        {/* Auth Component */}
        <AuthExample />

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Secure Authentication
            </h3>
            <p className="text-gray-600">
              JWT-based authentication with secure password hashing
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Fast & Modern
            </h3>
            <p className="text-gray-600">
              Built with Next.js, GraphQL, and TypeScript for maximum performance
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Beautiful UI
            </h3>
            <p className="text-gray-600">
              Crafted with Tailwind CSS for a modern, responsive design
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}