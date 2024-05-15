import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Check from "./Check";
import Count from "./Count";
import axios from "axios";

const initialErrors = {
  ekMalzeme: "",
  fullname: "",
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
  adet: 1,
};

export default function OrderForm() {
  const [isValid, setIsValid] = useState(false);
  const [count, setCount] = useState(1);
  const [fiyat, setFiyat] = useState(0);
  const [errors, setErrors] = useState(initialErrors);
  const [form, setForm] = useState(initialForm);

  // handleChange fonksiyonu
  const handleChange = (event) => {
    const { type, name, checked, value } = event.target;
    let newValue;
    if (name === "ekMalzeme") {
      const oldValues = form.ekMalzeme;
      if (checked) {
        newValue = [...oldValues, value]; // Seçildiyse değeri ekler
      } else {
        newValue = oldValues.filter((v) => v !== value); // Seçilmediyse değeri kaldırır
      }

      if (newValue.length < 4 && newValue.length > 10) {
        setErrors({ ...errors, [name]: true });
      } else {
        setErrors({ ...errors, [name]: false });
      }
    } else {
      newValue = value;
    }

    setForm({ ...form, [name]: newValue });

    if (name == "fullname") {
      if (value.replaceAll(" ", "").length >= 3) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };
  console.log(errors);
  //handleSubmit fonksiyonu
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/pizza", form)
      .then((res) => {
        console.log(res.data); // API yanıtını konsola yazdır
        const { id, createdAt } = res.data; // Yanıttan gerekli bilgileri al
        console.log("Sipariş Özeti:");
        console.log("ID:", id);
        console.log("Oluşturulma Tarihi:", createdAt);
        setForm(initialForm);
        setFiyat(0);
        setCount(1);
      })
      .catch((err) => console.log(err));
  };

  //toplam tutar hesaplamak için fonksiyon
  const updatePrice = () => {
    let newFiyat = form.adet * (85.5 + form.ekMalzeme.length * 5);
    setFiyat(newFiyat);
  };

  //fiyatı formda seçilenlere göre güncelleme
  useEffect(() => {
    updatePrice();
  }, [form]);

  // adet için bir handle fonksiyonu count sayısını forma kaydediyor
  const handleCountChange = (newCount) => {
    setForm({ ...form, adet: newCount });
  };

  //form elemanları

  return (
    <Form className="siparisForm-container" onSubmit={handleSubmit}>
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
        <div className="boyut-container">
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
          </div>
        </div>
        <div className="hamur-container">
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

      <div className="malzemeler-container">
        <h3>Ek Malzemeler</h3>
        <p>En az 4 en fazla 10 malzeme seçebilirsiniz. 5₺ </p>
        {malzemeler.map((malzeme, index) => {
          return (
            <Check
              key={index}
              changeFn={handleChange}
              isChecked={form.ekMalzeme.includes(malzeme.value)}
              value={malzeme.value}
              label={malzeme.label}
              name="ekMalzeme"
            />
          );
        })}
      </div>

      <div className="count-button">
        {" "}
        <Count
          onCountChange={handleCountChange}
          count={count}
          setCount={setCount}
        />
      </div>

      <div className="input-container">
        <h3>Ad Soyad</h3>
        <Input
          type="textarea"
          name="fullname"
          value={form.fullname}
          onChange={handleChange}
        />
        <h3>Sipariş Notu</h3>
        <Input
          type="textarea"
          name="siparisNotu"
          value={form.siparisNotu}
          onChange={handleChange}
        />
      </div>
      <div className="siparisOzeti-container">
        <div className="siparis-toplamı">
          <h3>Sipariş Toplamı</h3>
          <p>Seçimler: {form.ekMalzeme.length * 5}₺</p>
          <p>Toplam: {fiyat}₺</p>
        </div>
        <button className="submit-button"> Sipariş Ver</button>
      </div>
    </Form>
  );
}
