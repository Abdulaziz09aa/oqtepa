import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='container'>
      <div className="contact">
        <h1>Kontaktlar</h1>
        <div className="contact__big">
          <div className="contact__big__img"></div>
          <div className="contact__big__qr">
            <div className="contact__qr"></div>
              <h3>Izoh qoldiring yoki</h3>
            <h4>Telegramda savol bering</h4>
            <h4>@Oqtepalavash__TM</h4>
          </div>
          <div className="contact__big__address">
            <h2>Yagona aloqa markazi</h2>
            <h4>+998 78 150 00 30</h4>
            <h2>Telegram bot</h2>
            <h4>t.me/oqtepalavash_bot</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact