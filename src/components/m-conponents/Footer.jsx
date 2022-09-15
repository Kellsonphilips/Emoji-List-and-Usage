import React from "react";


function Footer() {
    
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        Ⓒ {currentYear} Philips.O <br />
        <a href="https://github.com/Kellsonphilips">Check GitHub repo</a>
      </p>
    </footer>
  );
}

export default Footer;