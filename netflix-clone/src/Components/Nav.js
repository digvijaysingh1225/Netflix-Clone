import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (

        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="Netflix Logo" className="nav__logo" />

            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Logo" className="nav__avatar" />

        </div>
    )
}

export default Nav;
