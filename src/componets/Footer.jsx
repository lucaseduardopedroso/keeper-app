//Challenge I - 4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
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