import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import useSWR, { SWRConfiguration } from 'swr'
import { gqlClient } from '../services/graphql-client'

// Global SWR fetcher for GraphQL
const graphqlFetcher = ([doc, vars]: [TypedDocumentNode<any, any>, any?]) => gqlClient.request(doc, vars)

// Custom useGraphQL hook with clean API
export function useGraphQL<Result, Variables extends object = {}>(
  document: TypedDocumentNode<Result, Variables>,
  variables?: Variables,
  config?: SWRConfiguration,
) {
  return useSWR([document, variables], graphqlFetcher, config)
}

// Example usage:
// const { data, error, isLoading } = useGraphQL(GET_USERS_QUERY, { limit: 10 })
// const { data } = useGraphQL(GET_USER_QUERY, { id: 1 }, { refreshInterval: 5000 })
// const { data } = useGraphQL(GET_ALL_USERS_QUERY) // no variables
