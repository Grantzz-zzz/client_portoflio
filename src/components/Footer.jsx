export default function Footer() {
  return (
    <footer className="border-t hairline px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between gap-4 kicker text-charcoal">
      <span>&copy; {new Date().getFullYear()} Iyah Manalo</span>
      <div className="flex gap-6">
        <a href="https://www.instagram.com/iyahmnl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity" data-cursor="expand">Instagram</a>
        <a href="https://www.facebook.com/iyah.manalo.10" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity" data-cursor="expand">Facebook</a>
        <a href="#" className="hover:opacity-60 transition-opacity" data-cursor="expand">Contact</a>
      </div>
    </footer>
  )
}
