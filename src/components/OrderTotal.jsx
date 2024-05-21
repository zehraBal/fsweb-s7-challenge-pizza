import { useLocation } from "react-router-dom";

export default function OrderTotal(props) {
  const location = useLocation();
  const totalStyle =
    location.pathname === "/siparisFormu"
      ? { color: "#ce2829", fontWeight: 500 }
      : { color: "#faf7f2" };
  const { formInfo, total } = props;
  return (
    <div>
      <h3>Sipariş Toplamı</h3>
      <p>Seçimler: {formInfo.ekMalzeme.length * 5}₺</p>
      <p style={totalStyle}>Toplam: {total}₺</p>
    </div>
  );
}
