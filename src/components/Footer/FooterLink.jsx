export function FooterLink({ children, src, href }) {
  return (
    <a
      href={href}
      className='flex justify-center items-center gap-2 text-white'>
      <img src={src} alt={children} className='text-white' />
      {children}
    </a>
  )
}

export default FooterLink
