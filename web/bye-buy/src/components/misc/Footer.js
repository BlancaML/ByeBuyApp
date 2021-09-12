import React from 'react';
import logofooter from '../../img/logo-white-tag.png'
function Footer() {
    return(
        <footer className="footer bg-dark c-app-white text-center">
            <div className="text-center pt-4 text-white">
                <img src={logofooter} style={{maxWidth: "250px"}} className="img" alt="logo-Bye-Buy"/>
            </div>
            <div className="container pt-3 p-0">
                <section className="mb-3">
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-instagram"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/BlancaML" role="button"><i className="fa fa-github"></i></a>
                </section>
                <div className="text-center py-3 text-white">
                © 2021 Copyright: Bye-Buy
                </div>
                
            </div>
        </footer>

    )
}

export default Footer;