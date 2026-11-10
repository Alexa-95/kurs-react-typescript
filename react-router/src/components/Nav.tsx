import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="w-full bg-gray-200">
        <div className="container mx-auto py-4">
          <ul className="flex gap-4 px-4">
            <li>
              <NavLink
                to="/"
                className={({isActive}) =>
                  `hover:text-blue-500 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-500'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({isActive}) =>
                  `hover:text-blue-500 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-500'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({isActive}) =>
                  `hover:text-blue-500 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-500'}`
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav