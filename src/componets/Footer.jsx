import React from "react";

function Footer(){
    const today = new Date();
    const thisYear = today.getFullYear();

    return (
        <footer>
            <p>{"Copyright ⓒ " + thisYear}</p>
        </footer>
    );
}

export default Footer;