import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { gqlClient, setAuthToken, clearAuthToken } from '../services/graphql-client'
import { graphql } from '../generated/gql'
import type { SignUpInput, SignInInput, SignUpMutation, SignInMutation } from '../generated/graphql'

// Define the mutations using codegen graphql function
const SIGN_UP_MUTATION = graphql(`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      token
      user {
        user_id
        name
        email
      }
    }
  }
`)

const SIGN_IN_MUTATION = graphql(`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      token
      user {
        user_id
        name
        email
      }
    }
  }
`)

// Extract types from generated mutations
type AuthUser = NonNullable<SignUpMutation['signUp']>['user']
type AuthResult = NonNullable<SignUpMutation['signUp']>

interface UseAuthReturn {
  // State
  isLoading: boolean
  error: string | null
  user: AuthUser | null

  // Actions
  signUp: (input: SignUpInput) => Promise<AuthResult | null>
  signIn: (input: SignInInput) => Promise<AuthResult | null>
  signOut: () => void
  clearError: () => void
}

export function useAuth(): UseAuthReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<AuthUser | null>(() => {
    // Initialize user from localStorage if available
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('authUser')
      return storedUser ? JSON.parse(storedUser) : null
    }
    return null
  })
  const router = useRouter()

  const signUp = async (input: SignUpInput): Promise<AuthResult | null> => {
    try {
      setIsLoading(true)
      setError(null)
      const result = await gqlClient.request<SignUpMutation>(SIGN_UP_MUTATION, { input })

      if (result.signUp) {
        // Set auth token for future requests
        setAuthToken(result.signUp.token)
        
        // Store user data
        setUser(result.signUp.user)
        if (typeof window !== 'undefined') {
          localStorage.setItem('authUser', JSON.stringify(result.signUp.user))
        }
        
        // Redirect to dashboard after successful sign up
        router.push('/dashboard')
        
        return result.signUp
      }

      return null
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign up failed'
      setError(errorMessage)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const signIn = async (input: SignInInput): Promise<AuthResult | null> => {
    try {
      setIsLoading(true)
      setError(null)

      const result = await gqlClient.request<SignInMutation>(SIGN_IN_MUTATION, { input })

      if (result.signIn) {
        // Set auth token for future requests
        setAuthToken(result.signIn.token)
        
        // Store user data
        setUser(result.signIn.user)
        if (typeof window !== 'undefined') {
          localStorage.setItem('authUser', JSON.stringify(result.signIn.user))
        }
        
        // Redirect to dashboard after successful sign in
        router.push('/dashboard')
        
        return result.signIn
      }

      return null
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign in failed'
      setError(errorMessage)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = () => {
    // Clear auth token and localStorage
    clearAuthToken()
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authUser')
    }
    setError(null)
  }

  const clearError = () => {
    setError(null)
  }

  return {
    isLoading,
    error,
    user,
    signUp,
    signIn,
    signOut,
    clearError,
  }
}

// Example usage:
// const { signUp, signIn, signOut, isLoading, error, clearError } = useAuth()
//
// const handleSignUp = async () => {
//   const result = await signUp({ email, password, name })
//   if (result) {
//     console.log('Signed up:', result.user)
//     // Redirect or update UI
//   }
// }
//
// const handleSignIn = async () => {
//   const result = await signIn({ email, password })
//   if (result) {
//     console.log('Signed in:', result.user)
//     // Redirect or update UI
//   }
// }
