import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import auth from '../utils/auth';

const Navbar = () => {

    const [loginCheck, setLoginCheck] = useState(false);
  
    const checkLogin = () => {
      if (auth.loggedIn()) {
        setLoginCheck(true);
      }
    };
  
    useEffect(() => {
      checkLogin();
    }, []);

    return (
        <nav className = 'nav'>
            <h1>Daily Planner</h1>
            {loginCheck? (
                <ul>
                    <li className = 'nav-item'>
                        <button>
                            <Link to = '/'>Home</Link>
                        </button>
                    </li>

                    <li className = 'nav-item'>
                        <button>
                            <Link to = '/calendar'>Calendar</Link>
                        </button>
                    </li>

                    <li className = 'nav-item'>
                        <button>
                            <Link to = '/event-create'>Create New Event</Link>
                        </button>
                    </li>

                    <li className = 'nav-item'>
                        <button>
                            <Link to = '/all'>View All Events</Link>
                        </button>
                    </li>

                    <li className = 'nav-item'>
                        <button>
                            <Link to = '/user'>User Settings</Link>
                        </button>
                    </li>
                    
                    <li className = 'nav-item'>
                        <button onClick={auth.logout}>
                            <Link to=''>Logout</Link>
                        </button>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li className = 'nav-item'>
                        <button>
                            <Link to = '/login'>Login</Link>
                        </button>
                    </li>

                    <li className = 'nav-item'>
                        <button>
                            <Link to = '/signup'>Sign Up</Link>
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar;