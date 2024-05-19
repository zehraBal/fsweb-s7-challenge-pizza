import FormBanner from "./FormBanner";
import OrderForm from "./OrderForm";
import Promotion from "./Promotion";

export default function FormPage() {
  return (
    <div className="formpage">
      <FormBanner />
      <Promotion />
      <OrderForm />
    </div>
  );
}
