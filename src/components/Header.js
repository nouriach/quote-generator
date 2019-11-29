import React from 'react';

const Header = () => {
    return (
        <div className="header-container">
            <div>
                <img src="https://cdn2.downdetector.com/static/uploads/logo/The_Co-operative_Bank_logo.png" />
                {/* <img src="imgs\cooplogo_colour.svg" /> */}
            </div>
            <div>
                <a href="mailto:nouriach17@gmail.com?subject=Very funny Chuck Norris jokes, Nathan">
                    <p>Give feedback 
                        {/* <span>icon</span> */}
                    </p>
                </a>
                <a href="https://www.linkedin.com/in/nouriach/" target="_blank">
                    <p>Contact 
                        {/* <span>icon</span> */}
                    </p>
                </a>
            </div>
        </div>
    );
}

export default Header;
