const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          freedmanjrnicolas@yahoo.com
          <div className="uppercase text-sm tracking-wider"> ALl Rights Reserved</div>
        </div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{' '}
          <a href="https://reactbricks.com" className="hover:text-pink-600">
            KiingJayNiic
          </a>
        </div>
      </div>
    </footer >
  )
}

export default Footer
