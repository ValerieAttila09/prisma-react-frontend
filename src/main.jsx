import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = "pk_test_b3B0aW1hbC1wb2xlY2F0LTg2LmNsZXJrLmFjY291bnRzLmRldiQ"

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ClerkProvider>,
)
