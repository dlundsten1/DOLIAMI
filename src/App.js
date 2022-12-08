import { useEffect, useState } from "react"
import "./App.css"
import boredApi from "./boredApi"
import { QueryClient, QueryClientProvider } from "react-query"
import Activity from "./components/Activity"

function App() {
  
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>

      <div className='App'>
        <header className='App-header'>
          <Activity />
         
        </header>
      </div>
    </QueryClientProvider>
  )
}

export default App
