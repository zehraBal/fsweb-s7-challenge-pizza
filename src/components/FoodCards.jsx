import { Card, CardBody, CardText } from "reactstrap";

export default function FoodCards() {
  const paths = [
    {
      name: "Terminal Pizza",
      url: "./Assets/mile2-aseets/pictures/food-1.png",
      fiyat: "60₺",
      puan: "4.9",
      view: "(200)",
    },
    {
      name: "Position Absolute Acı Pizza",
      url: "./Assets/mile2-aseets/pictures/food-2.png",
      fiyat: "85₺",
      puan: "4.9",
      view: "(928)",
    },
    {
      name: "useEffect Tavuklu Burger",
      url: "./Assets/mile2-aseets/pictures/food-3.png",
      fiyat: "75₺",
      puan: "4.9",
      view: "(462)",
    },
  ];
  return (
    <div className="food-cards">
      {paths.map((path, index) => {
        return (
          <div className="food-card">
            <div key={index}>
              <img src={path.url} />
              <h5>{path.name}</h5>
              <div className="card-body">
                <p>{path.puan}</p>
                <p>{path.view}</p>
                <p style={{ fontWeight: 800 }}>{path.fiyat}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
