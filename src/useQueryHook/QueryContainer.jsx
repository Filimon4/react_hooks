import React from 'react'
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import StudyExample from './StudyExample';

const queryClient = new QueryClient()

const QueryContainer = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <StudyExample />
    </QueryClientProvider>
  )
}

export default QueryContainer