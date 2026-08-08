import { ThemeProvider } from './theme'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Profile from './pages/Profile'

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Profile />
      <Footer />
    </ThemeProvider>
  )
}
