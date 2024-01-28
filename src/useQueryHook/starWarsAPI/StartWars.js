import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import { Router } from 'react-router'
import Layout from './Layout'
import { BrowserRouter } from 'react-router-dom'
import './style.css'

const queryClient = new QueryClient()

const StartWars = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen/>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export default StartWars