import OrderTotal from "./OrderTotal";
export default function OrderConfirmation(props) {
  const { id, createdAt, form, fiyat } = props.location.state;

  return (
    <div className="orderSum-container">
      <h5>lezzetin yolda</h5>
      <h1>SİPARİŞ ALINDI!</h1>
      <div className="divider" />
      <div className="order-summary">
        <ul>
          <li>ID: {id}</li>
          <li>Oluşturulma Tarihi: {createdAt}</li>
          <li>Boyut: {form.pizzaSize}</li>
          <li>Hamur: {form.pizzaHamur}</li>
          <li>Ek Malzemeler: {form.ekMalzeme.join(", ")}</li>
        </ul>
        <OrderTotal formInfo={form} total={fiyat} />
      </div>
    </div>
  );
}
