import { useLocation } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
export default function Header() {
  const location = useLocation();
  return (
    <header class="header">
      <img src="./Assets/mile1-assets/logo.svg" alt="logo" />
      {location.pathname === "/siparisFormu" && (
        <Nav>
          <NavItem>
            <NavLink style={{ color: "white" }} active href="/">
              Anasayfa
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} active href="/secenekler">
              Seçenekler
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} active href="/siparisFormu">
              Sipariş Oluştur
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </header>
  );
}
