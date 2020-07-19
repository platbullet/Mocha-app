import React from "react";

function Footer(){
    const day = new Date().getFullYear();

    return  <footer>
                Copyright Mocha {day}
            </footer>
}

export default Footer;