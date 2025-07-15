import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Handler for logo/company click
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  return (
    <nav style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '1.5rem', 
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <a href="/" onClick={handleHomeClick} style={{ display: 'flex', alignItems: 'center', marginRight: '1rem', textDecoration: 'none' }}>
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
        <span style={{ color: '#222', fontWeight: 700, fontSize: '1.25rem', marginLeft: '0.75rem' }}>
          TechMotiveSupreme
        </span>
      </a>
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