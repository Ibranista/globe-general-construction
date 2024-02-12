import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { theme } from './theme'
import { Footer } from './components/Shared'
import './Style.App.css'
import { AboutUs, Home } from './Pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/About',
    element: <AboutUs />,
  },
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ paddingBottom: '90px' }}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default App
