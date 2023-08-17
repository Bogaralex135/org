import FooterLink from './Footer/FooterLink'
export function Footer() {
  return (
    <footer className='flex justify-around items-center bg-Footer text-white p-14 text-xl'>
      <div className='flex gap-8'>
        <FooterLink
          href='https://www.linkedin.com/in/bogar-alejandro-vázquez-mata-479846256/'
          src='/img/linkedin.svg'>
          LinkedIn
        </FooterLink>
        <FooterLink
          href='https://github.com/Bogaralex135'
          src='/img/github.svg'>
          GitHub
        </FooterLink>
        <FooterLink
          href='https://alejandro-vazquez.netlify.app'
          src='/img/portfolio.svg'>
          Portfolio
        </FooterLink>
      </div>
      <img src='/img/logo-footer.png' alt='logo-footer' />
      <p>Desarrollado por: Bogar Alejandro Vazquez Mata</p>
    </footer>
  )
}

export default Footer
