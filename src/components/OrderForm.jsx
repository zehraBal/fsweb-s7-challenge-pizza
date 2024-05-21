import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import Check from "./Check";
import Count from "./Count";
import axios from "axios";
import OrderTotal from "./OrderTotal";

const initialErrors = {
  ekMalzeme: true,
  fullname: true,
  pizzaSize: true,
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
  pizzaHamur: "klasik",
  ekMalzeme: [],
  siparisNotu: "",
  fullname: "",
  adet: 1,
};
const errorMessages = {
  fullname: "Lütfen geçerli bir ad ve soyad giriniz.",
  pizzaSize: "Lütfen pizza için boyut seçiniz.",
  ekMalzeme: " En az 4 en fazla 10 malzeme seçebilirsiniz. 5₺",
};

export default function OrderForm() {
  const history = useHistory();
  const [isValid, setIsValid] = useState(true);
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
      if (newValue.length < 4 || newValue.length > 10) {
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

    if (name == "pizzaSize") {
      if (value !== "") {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };
  //handleSubmit fonksiyonu
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    axios
      .post("https://reqres.in/api/pizza", form)
      .then((res) => {
        console.log(res.data);
        const { id, createdAt } = res.data;
        console.log("Sipariş Özeti:");
        console.log("ID:", id);
        console.log("Oluşturulma Tarihi:", createdAt);
        setForm(initialForm);
        setFiyat(0);
        setCount(1);
        history.push({
          pathname: "/siparisOzeti",
          state: { id, createdAt, form, fiyat },
        });
      })
      .catch((err) => {
        console.log(err);

        history.push({
          pathname: "/errorPage",
          state: { error: err.message, errorCode: err.code },
        });
      });
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

  //isValid
  useEffect(() => {
    if (errors.ekMalzeme || errors.fullname || errors.pizzaSize) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [errors]);

  //form elemanları

  return (
    <>
      <Form className="siparisForm-container" onSubmit={handleSubmit}>
        <div className="pizza-size-container">
          <div className="boyut-container">
            <div className="boyut">
              <h3>Boyut Seç</h3>
              {errors.pizzaSize && (
                <p style={{ color: "red" }}>{errorMessages.pizzaSize}</p>
              )}
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
            <h3>Hamur Seç</h3>
            <FormGroup>
              <select
                type="select"
                name="pizzaHamur"
                onChange={handleChange}
                value={form.pizzaHamur}
              >
                <option>Klasik Hamur</option>
                <option>İnce Hamur</option>
              </select>
            </FormGroup>
          </div>
        </div>

        <h3>Ek Malzemeler</h3>
        {errors.ekMalzeme && (
          <p style={{ color: "red" }}>{errorMessages.ekMalzeme}</p>
        )}
        <div className="malzemeler-container">
          {malzemeler.map((malzeme, index) => {
            return (
              <Check
                key={index}
                changeFn={handleChange}
                isChecked={form.ekMalzeme.includes(malzeme.value)}
                value={malzeme.value}
                label={malzeme.label}
                name="ekMalzeme"
                className="malzeme-label"
              />
            );
          })}
        </div>

        <div className="input-container">
          <h3>Ad Soyad</h3>
          <Input
            type="textarea"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
          />
          {errors.fullname && (
            <p style={{ color: "red" }}>{errorMessages.fullname}</p>
          )}
          <h3>Sipariş Notu</h3>
          <Input
            type="textarea"
            name="siparisNotu"
            value={form.siparisNotu}
            onChange={handleChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </div>
        <div className="divider" />
        <div className="siparisOzeti-container">
          <div className="count-button">
            <Count
              onCountChange={handleCountChange}
              count={count}
              setCount={setCount}
            />
          </div>
          <div className="siparis-toplamı">
            <OrderTotal formInfo={form} total={fiyat} />
            <button className="submit-button" disabled={!isValid}>
              {" "}
              Sipariş Ver
            </button>
          </div>
        </div>
      </Form>
    </>
  );
}
