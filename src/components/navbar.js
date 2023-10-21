import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(['access_token']);

  const navigate = useNavigate();

  const logout = () => {
    setCookies('access_token', '');
    window.localStorage.removeItem('userID');
    navigate('/auth');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar_link">
        Home
      </Link>
      <Link to="/search-games" className="navbar_link">
        Search Games
      </Link>
      {!cookies.access_token ? (
        <Link to="/auth" className="navbar_link">
          Login/Register
        </Link>
      ) : (
        <>
          <Link to="/my-account" className="navbar_link">
            My Account
          </Link>
          <button type="button" onClick={logout} className="navbar_logoutBtn">
            Logout
          </button>
        </>
      )}
    </nav>
  );
};
