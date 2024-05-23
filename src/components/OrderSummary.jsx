import OrderTotal from "./OrderTotal";
export default function OrderConfirmation(props) {
  const { form, fiyat } = props.location.state;
  let capitalized = form.fullname
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  let hamur =
    form.pizzaHamur.charAt(0).toUpperCase() +
    form.pizzaHamur.slice(1).toLowerCase();
  let ekMalzemeler = form.ekMalzeme
    .map(
      (malzeme) =>
        malzeme.charAt(0).toUpperCase() + malzeme.slice(1).toLowerCase()
    )
    .join(", ");
  return (
    <div className="orderSum-container">
      <h5>lezzetin yolda</h5>
      <h1>SİPARİŞ ALINDI!</h1>
      <div className="divider" />
      <div className="order-summary">
        <ul>
          <li>Ad Soyad: {capitalized}</li>
          <li>Boyut: {form.pizzaSize}</li>
          <li>Hamur: {hamur}</li>
          <li>Ek Malzemeler: {ekMalzemeler}</li>
        </ul>
        <div className="total-cont">
          <OrderTotal formInfo={form} total={fiyat} />
        </div>
      </div>
    </div>
  );
}
