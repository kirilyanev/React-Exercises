import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../utils/firebase.js';
import AuthContext from '../../contexts/AuthContext.js';

const Header = () => {
    const {isAuthenticated, username} = useContext(AuthContext);
    
    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }

        auth.currentUser.getIdToken()
            .then(function (idToken) {
                return fetch('http://localhost:5001', {
                    headers: {
                        'Authorization': idToken
                    }
                });
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }, [isAuthenticated]);

    const logoutHandler = (e) => {
        // e.preventDefault();
        auth.signOut();
    };

    return (
        <>
            <header id="site-header">
                <nav className="navbar">

                    <section className="navbar-dashboard">
                        <div className="first-bar">
                            <Link to="/">Dashboard</Link>
                            <Link className="button" to="#">My Pets</Link>
                            <Link className="button" to="/pets/create">Add Pet</Link>
                        </div>
                        <div className="second-bar">
                            <ul>
                                {isAuthenticated
                                    ? <li>Welcome, {username}</li>
                                    : <li>Welcome, Guest</li>
                                }
                                <li><Link onClick={logoutHandler} to="/"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                            </ul>
                        </div>
                    </section>
                    <section className="navbar-anonymous">
                        <ul>
                            <li><Link to="/register"><i className="fas fa-user-plus"></i> Register</Link></li>
                            <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                        </ul>
                    </section>
                </nav>
            </header>
            <style jsx>{`
                nav.navbar {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    align-self: center;  
                    letter-spacing: 0.05rem;
                    background: #234465;
                    padding: 0.8rem 1rem;
                    color: white;
                }

                #site-header > nav > section.navbar-dashboard > a{
                    list-style: none;
                    text-decoration: none;
                    align-self: center;
                    font-weight: bold;
                    font-size: 1.5rem;
                    color: white;
                    
                }
                #site-header > nav > section.navbar-dashboard > form > input[type="text"],
                #site-header > nav > section.navbar-anonymous > ul > li:nth-child(1) > a,
                #site-header > nav > section.navbar-user > ul > li:nth-child(1),
                #site-header > nav > section.navbar-dashboard > ul > li:nth-child(1) > a{
                    margin-right: 0.5rem;

                }


                nav.navbar ul {
                    background: transparent;
                    padding: 0.5rem;
                    border-radius: 0.3rem;
                    margin: 0;
                }
                nav.navbar ul li {
                    display: block;
                    list-style: none outside;
                    position: relative;
                }
                nav.navbar ul li a {
                    display: block;
                    padding: 0.4rem 0.8rem;
                    border-radius: 0.4rem;
                    text-decoration: none;
                    font-weight: bold;
                    background: cadetblue;
                    color: rgb(255, 255, 255);
                }
                .button:hover,
                    nav.navbar ul li a:hover,
                    nav.navbar ul li:hover > a {
                    background: rgb(248, 215, 107);
                    color: rgb(0, 0, 0);
                    font-weight: bold;
                }
            `}</style>
        </>
    );
};

export default Header;
