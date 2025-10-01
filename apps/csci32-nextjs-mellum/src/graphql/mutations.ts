// GraphQL mutations for codegen to discover

export const SIGN_UP_MUTATION = /* GraphQL */ `
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
`

export const SIGN_IN_MUTATION = /* GraphQL */ `
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
`
