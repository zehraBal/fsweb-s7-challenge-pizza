import { useHistory } from "react-router-dom";
import BottomIcons from "./BottomIcons";
import TopIcons from "./TopIcons";
import FoodCards from "./FoodCards";
import Banner from "./Banner";
Banner;
export default function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/siparisFormu");
  }

  return (
    <div className="home-page">
      <Banner onClick={handleClick} />
      <TopIcons />
      <div className="first-section">
        <div className="images-section">
          <div className="ozel-lezzetus">
            <div>
              <h2>
                <span>Özel</span>
                <span>Lezzetus</span>
              </h2>
              <p>Position Absolute Acı Burger</p>
              <button
                className="siparis-buton"
                type="button"
                onClick={handleClick}
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <div className="hackathlon-npm-container">
            <div className="hackathlon">
              <h4>
                <span>Hackathlon </span>
                <span>Burger Menü</span>
              </h4>
              <button
                className="siparis-buton"
                type="button"
                onClick={handleClick}
              >
                SİPARİŞ VER
              </button>
            </div>
            <div className="npm">
              <h4>
                <span>
                  <span style={{ color: "#ce2829" }}>Çooooook</span> hızlı
                </span>
                <span>npm gibi kurye</span>
              </h4>
              <button
                className="siparis-buton"
                type="button"
                onClick={handleClick}
              >
                SİPARİŞ VER{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="context">
          <p className="first-text">en çok paketlenen menüler</p>
          <p className="second-text">Acıktıran Kodlara Doyuran Lezzetler</p>
        </div>

        <BottomIcons />
        <div>
          <FoodCards />
        </div>
      </div>
    </div>
  );
}
