import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <div>
                    <h1>Contact</h1>
                    {/* <p>If you'd like more help & information, you can:</p> */}
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/nouriach/" target="_blank">
                        {/* <span>icon</span> */}
                        <p>LinkedIn</p>
                    </a>
                    <a href="mailto:nouriach17@gmail.com?subject=Very funny Chuck Norris jokes, Nathan">
                        {/* <span>icon</span> */}
                        <p>nouriach17@gmail.com</p>
                    </a>
                    {/* <span>icon</span> */}
                    <p>07 514 286 490</p>
                </div>
            </div>
            <div className="footer-container">
                <img src="http://www.mycleveragency.com/img/logos/white/co-operative-bank@2x.png" height="50" width="100"/>
            </div>
        </>
    );
}

export default Contact;