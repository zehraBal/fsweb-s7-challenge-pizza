export default function OrderTotal(props) {
  const { formInfo, total } = props;
  return (
    <div className="siparis-toplamı">
      <h3>Sipariş Toplamı</h3>
      <p>Seçimler: {formInfo.ekMalzeme.length * 5}₺</p>
      <p>Toplam: {total}₺</p>
    </div>
  );
}
