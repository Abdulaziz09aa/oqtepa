import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='container'>
      <div className="footer__hr">
      <hr />
      </div>
         <div className="footer">
            <div className="footer__img"></div>
            <div className="footer__text">
                <div className="footer__desc">
                    <div className="footer__menyu">
                    <p>Menyu</p>
                    </div>
                    <div className="footer__filyal">
                    <p>Filialar</p>
                    </div>
                    <div className="footer__about">
                     <p>Biz haqimizda</p>
                    </div>
                    <div className="footer__contact">
                    <p>Kontactlar</p>
                    </div>
                </div>
                
            </div>
            <div className="footer__phones">
              <div className="footer__telegram"><span>Telegram</span></div>
              <div className="footer__insta"><span>Instagram</span></div>
            </div>
         </div>
         <div className="footer__hr2">
        <hr />
         </div>
    </div>
  )
}

export default Footer