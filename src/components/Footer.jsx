export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="contact">
          <img
            className="footer-logo"
            src="./Assets/mile2-aseets/footer/logo-footer.svg"
            alt=""
          />
          <ul>
            <li>
              <img src="./Assets/mile2-aseets/footer/icons/icon-1.png" />
              <span> </span>
              341 Londonderry Road,İstanbul Türkiye
            </li>
            <li>
              <img src="./Assets/mile2-aseets/footer/icons/icon-2.png" />
              <span> </span>
              aciktim@teknolojikyemekler.com
            </li>
            <li>
              <img src="./Assets/mile2-aseets/footer/icons/icon-3.png" />
              <span> </span>
              +90 216 123 45 67
            </li>
          </ul>
        </div>
        <div className="menus">
          <h4>Sıccacık Menüler</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div>
          <h4>Instagram</h4>
          <div className="instagram-container">
            <div>
              {" "}
              <img src="./Assets/mile2-aseets/footer/insta/li-0.png" />
            </div>
            <div>
              <img src="./Assets/mile2-aseets/footer/insta/li-1.png" />
            </div>
            <div>
              {" "}
              <img src="./Assets/mile2-aseets/footer/insta/li-2.png" />
            </div>
            <div>
              <img src="./Assets/mile2-aseets/footer/insta/li-3.png" />
            </div>
            <div>
              {" "}
              <img src="./Assets/mile2-aseets/footer/insta/li-4.png" />
            </div>
            <div>
              <img src="./Assets/mile2-aseets/footer/insta/li-5.png" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
