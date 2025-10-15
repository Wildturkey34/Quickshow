import { ClerkProvider } from '@clerk/clerk-react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

ReactGA.initialize('G-2381MP3M97')


ReactGA.send({ hitType: 'pageview', page: window.location.pathname })


function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(

  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RootApp />
  </ClerkProvider>
)
