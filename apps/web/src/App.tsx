import { QueryClientProvider } from '@tanstack/react-query'
import { Router } from '@app/pages/router'

import { client } from '@app/lib/query-client'

export function App() {
  return (
    <QueryClientProvider client={client}>
      <Router />
    </QueryClientProvider>
  )
}
