import React from 'react'

const Footer = () => {
  return (
    <div id='footer'>
        <p>© {new Date().getFullYear()} <a href="">Kirsty Hall</a> All rights reserved</p>
        <p></p>
        <p>This website was created as a <a href="https://northcoders.com">Northcoders</a> project </p>    
        <p><a className="footer-link" href="https://www.flaticon.com/free-icons/publication" title="publication icons">Publication icons created by Candy Design - Flaticon</a></p>
    </div>
  )
}

export default Footer;
