import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
        <div>
            <img  alt="" />
            <p>Travelbuzz a self-employed singel person owned company<br/>Providing reliable Tourisms Service from 2017</p>
        </div>
        <div>
            <span className="footer-title">Services</span>
            <a href="/"className="link link-hover">Tour to Meseum</a>
            <a href="/"className="link link-hover">Tour To Safarry Park</a>
            <a href="/"className="link link-hover">Arrange Foods</a>
            <a href="/"className="link link-hover">Provides Transport</a>
        </div>
        <div>
            <span className="footer-title">About My Service</span>
            <a href="/"className="link link-hover">About Me</a>
            <a href="/"className="link link-hover">Contact</a>
            <a href="/"className="link link-hover">Jobs</a>
            <a href="/"className="link link-hover">Press kit</a>
        </div>
        <div>
            <span className="footer-title">Legal</span>
            <a href="/"className="link link-hover">Terms of use</a>
            <a href="/"className="link link-hover">Privacy policy</a>
            <a href="/"className="link link-hover">Cookie policy</a>
        </div>
    </footer>
    );
};

export default Footer;