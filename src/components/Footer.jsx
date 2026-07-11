export default function Footer() {
  return (
    <footer className="border-t hairline px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between gap-4 kicker text-charcoal">
      <span>&copy; {new Date().getFullYear()} Avery Lane</span>
      <div className="flex gap-6">
        <a href="#" className="hover:opacity-60 transition-opacity" data-cursor="expand">Instagram</a>
        <a href="#" className="hover:opacity-60 transition-opacity" data-cursor="expand">TikTok</a>
        <a href="#" className="hover:opacity-60 transition-opacity" data-cursor="expand">Contact</a>
      </div>
    </footer>
  )
}
