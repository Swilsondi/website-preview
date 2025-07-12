import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '1.5rem', 
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
        <div style={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent'
        }}>
          <img 
            src="/assets/2CD47992-113A-4465-8751-028D4E0B51B5.png" 
            alt="TM Logo - Darker Version" 
            style={{ 
              height: '100%', 
              width: '100%',
              objectFit: 'cover'
            }} 
          />
        </div>
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem', marginLeft: 'auto' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/services">Services</Link>
      </div>
    </nav>
  );
}