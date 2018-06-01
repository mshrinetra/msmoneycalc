import React from "react";

const Footer = function () {
    return (
        <footer className="footer mt-4 text-center bg-dark text-white">
            Copyright (c) {(new Date()).getFullYear()} Manvendra Shrinetra
        </footer>
    );
}

export default Footer;