import CartWidget from './CartWidget.jsx'
import logoImg from '../assets/logo.png'   

export default function NavBar() {
  const nav = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    backgroundColor: '#f59ad9',
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    height: '70px'
  }

  const logoContainer = { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '10px' 
  }

  const logoImgStyle = {
    height: '70px',
    width: 'auto'
  }

  const logoText = { 
    fontSize: '1.5rem', 
    fontWeight: 700, 
    color: '#fff', 
    margin: 0 
  }

  const right = { display: 'flex', alignItems: 'center', gap: '20px' }
  const ul = { listStyle: 'none', display: 'flex', gap: '16px', margin: 0, padding: 0 }
  const a = { textDecoration: 'none', color: '#fff', fontWeight: 600 }

  return (
    <nav style={nav}>
      <div style={logoContainer}>
        <img src={logoImg} alt="Logo Alduu Accesorios" style={logoImgStyle} />
        <h1 style={logoText}>Alduu Accesorios</h1>
      </div>
      <div style={right}>
        <ul style={ul}>
          <li><a href="#" style={a}>Inicio</a></li>
          <li><a href="#" style={a}>Productos</a></li>
          <li><a href="#" style={a}>Contacto</a></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  )
}
