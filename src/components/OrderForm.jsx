import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Check from "./Check";

const initialErrors = {
  boyut: "",
  kalinlik: "",
  malzemeler: "",
  isim: "",
};
const malzemeler = [
  { value: "pepperoni", label: "Pepperoni" },
  { value: "sosis", label: "Sosis" },
  { value: "kanada jambonu", label: "Kanada Jambonu" },
  { value: "tavuk ızgara", label: "Tavuk Izgara" },
  { value: "soğan", label: "Soğan" },
  { value: "domates", label: "Domates" },
  { value: "mısır", label: "Mısır" },
  { value: "sucuk", label: "Sucuk" },
  { value: "jalepeno", label: "Jalepeno" },
  { value: "sarımsak", label: "Sarımsak" },
  { value: "biber", label: "Biber" },
  { value: "ananas", label: "Ananas" },
  { value: "kabak", label: "Kabak" },
];
const initialForm = {
  pizzaSize: "",
  pizzaHamur: "",
  ekMalzeme: [],
  siparisNotu: "",
  fullname: "",
  adet: "",
};

export default function OrderForm() {
  const [boyut, setboyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [eklemeler, setEklemeler] = useState([]);
  const [adet, setAdet] = useState(1);
  const [fiyat, setFiyat] = useState(0);
  const [erros, setErrors] = useState(initialErrors);
  const [form, setForm] = useState(initialForm);
  const handleChange = (event) => {
    const { type, name, checked, value } = event.target;
    let newValue;
    if (type === "checkbox") {
      const oldValues = form.ekMalzeme;
      if (checked) {
        newValue = [...oldValues, value]; // Seçildiyse değeri ekler
      } else {
        newValue = oldValues.filter((v) => v !== value); // Seçilmediyse değeri kaldırır
      }
    } else {
      newValue = value;
    }

    setForm({ ...form, [name]: newValue });
  };

  console.log(form);
  const handleSubmit = (e) => {};
  useEffect(() => {}, []);

  return (
    <Form className="siparisForm-container">
      <h3>Position Absolute Acı Pizza</h3>
      <h2>85.50₺</h2>
      <p>
        Frontent Dev olarak hala position:absolute kullaniyorsan bu çok acı
        pizza tam sana göre. Pizza. domates, peynir ve genellikle çeşitli diger
        malzemelerle kaplanmış. daha sonra geleneksel olarak odun ateşinde bir
        firinda yüksek sicaklkta pişirilen, genellikle yuvarlak, düzieştirilmiş
        mayalı bugday bazlı hamurdan oluşan italyan kökenli lezzetli bir
        yemektir.. Küçük bir pizzaya bazen pizzetta denir.
      </p>
      <div className="pizza-size-container">
        <div className="boyut-kalinlik-container">
          <div className="boyut">
            <h3>Boyut Seç</h3>
            <FormGroup>
              <Input
                type="radio"
                name="pizzaSize"
                value="Küçük"
                onChange={handleChange}
                checked={form.pizzaSize === "Küçük"}
              />
              <Label htmlFor="küçük">Küçük</Label>
            </FormGroup>

            <FormGroup>
              <Input
                type="radio"
                name="pizzaSize"
                value="Orta"
                onChange={handleChange}
                checked={form.pizzaSize === "Orta"}
              />
              <Label htmlFor="orta">Orta</Label>
            </FormGroup>

            <FormGroup>
              <Input
                type="radio"
                name="pizzaSize"
                value="Büyük"
                onChange={handleChange}
                checked={form.pizzaSize === "Büyük"}
              />
              <Label htmlFor="büyük">Büyük</Label>
            </FormGroup>
            <h3>Hamur Kalinligi</h3>
            <FormGroup>
              <select
                type="select"
                name="pizzaHamur"
                onChange={handleChange}
                value={form.pizzaHamur}
              >
                <option>İnce Hamur</option>
                <option>Klasik Hamur</option>
              </select>
            </FormGroup>
          </div>
        </div>
      </div>

      <div className="malzemeler-container">
        {malzemeler.map((malzeme, index) => {
          return (
            <Check
              changeFn={handleChange}
              isChecked={form.ekMalzeme.includes(malzeme.value)}
              value={malzeme.value}
              label={malzeme.label}
            />
          );
        })}
      </div>
      <div>
        <h3>Ad Soyad</h3>
        <Input type="textarea" name="fullname" onChange={handleChange} />
        <h3>Sipariş Notu</h3>
        <Input type="textarea" name="siparisNotu" onChange={handleChange} />
      </div>
      <button>Sipariş Ver</button>
    </Form>
  );
}
