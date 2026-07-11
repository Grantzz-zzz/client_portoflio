import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import CustomCursor from './CustomCursor.jsx'

export default function Layout({ children }) {
  return (
    <div className="bg-cream text-ink min-h-screen">
      <CustomCursor />
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
