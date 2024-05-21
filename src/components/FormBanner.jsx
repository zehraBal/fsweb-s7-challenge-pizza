import { useLocation } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
export default function FormBanner() {
  return (
    <div className="form-banner">
      <div className="image-banner">
        <img src="./Assets/mile2-aseets/pictures/form-banner.png" alt="" />
      </div>
      <div className="nav-container">
        <Nav>
          <NavItem>
            <NavLink style={{ color: "#5F5F5F" }} active href="/">
              Anasayfa
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "#5F5F5F" }} active href="/secenekler">
              Seçenekler
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "#5F5F5F" }} active href="/siparisFormu">
              Sipariş Oluştur
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
}
