import { Link, NavLink } from 'react-router-dom';
import Logo from '/logo.svg';

function Header() {
  return (
    <header className="flex h-24 items-center justify-center px-4">
      <nav className="mx-auto flex w-full min-w-[320px] max-w-[1200px] items-center justify-between rounded-3xl border-2 border-border px-4 py-3 backdrop-blur-sm">
        <Link to="/" className="flex-shrink-0">
          <img
            src={Logo}
            alt="logo"
            width={91}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-6 text-lg font-medium text-text md:flex">
          <NavLink
            className={({ isActive }) =>
              `transition-all duration-300 hover:scale-105 hover:text-white ${
                isActive ? 'text-white' : ''
              }`
            }
            to="/"
          >
            Events
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `transition-all duration-300 hover:scale-105 hover:text-white ${
                isActive ? 'text-white' : ''
              }`
            }
            to="tickets"
          >
            My Tickets
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `transition-all duration-300 hover:scale-105 hover:text-white ${
                isActive ? 'text-white' : ''
              }`
            }
            to="about"
          >
            About Project
          </NavLink>
        </div>

        <button className="h-[52px] w-[169px] rounded-xl bg-white py-3 text-base font-semibold uppercase transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg">
          My Tickets &rarr;
        </button>
      </nav>
    </header>
  );
}

export default Header;
