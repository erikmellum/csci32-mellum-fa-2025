import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export default function AuthExample() {
  const { signUp, signIn, signOut, isLoading, error, clearError } = useAuth()
  const [isSignUpMode, setIsSignUpMode] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSignUpMode) {
      const result = await signUp({
        email: formData.email,
        password: formData.password,
        name: formData.name || undefined,
      })

      if (result) {
        console.log('Signed up successfully:', result.user)
        // Redirect or update UI
      }
    } else {
      const result = await signIn({
        email: formData.email,
        password: formData.password,
      })

      if (result) {
        console.log('Signed in successfully:', result.user)
        // Redirect or update UI
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{isSignUpMode ? 'Sign Up' : 'Sign In'}</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
          <button onClick={clearError} className="ml-2 text-red-500 hover:text-red-700">
            ×
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUpMode && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name (optional)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Loading...' : isSignUpMode ? 'Sign Up' : 'Sign In'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={() => setIsSignUpMode(!isSignUpMode)}
          className="text-indigo-600 hover:text-indigo-500 text-sm"
        >
          {isSignUpMode ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </button>
      </div>

      <div className="mt-4 text-center">
        <button type="button" onClick={signOut} className="text-red-600 hover:text-red-500 text-sm">
          Sign Out
        </button>
      </div>
    </div>
  )
}
