import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
    <footer className="footer">
        <div className="content has-text-centered">
            <p>
                <a href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                    <i className="fab fa-2x fa-facebook-square"></i>
                </a>
                <a href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                    <i className="fab fa-2x fa-twitter-square"></i>
                </a>
                <a href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                    <i className="fab fa-2x fa-pinterest-square"></i>
                </a>
            </p>
            <p>
                <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
        </div>
    </footer>
)

export default Navbar
