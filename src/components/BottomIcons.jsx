import { useHistory } from "react-router-dom";
export default function BottomIcons() {
  const history = useHistory();
  const icons = [
    { path: "/mile2-aseets/icons/1.svg", val: "Ramen" },
    { path: "/mile2-aseets/icons/2.svg", val: "Pizza" },
    { path: "/mile2-aseets/icons/3.svg", val: "Burger" },
    { path: "/mile2-aseets/icons/4.svg", val: "French Fries" },
    { path: "/mile2-aseets/icons/5.svg", val: "Fast Food" },
    { path: "/mile2-aseets/icons/6.svg", val: "Soft Drinks" },
  ];
  const handleClick = () => {
    history.push("/siparisFormu");
  };
  return (
    <div className="icon-rad-div">
      {icons.map((icons, index) => {
        return (
          <div key={index} className="bottom-icon-container">
            <button onClick={handleClick} className="bottom-icons-button">
              <img src={icons.path} />
              {icons.val}
            </button>
          </div>
        );
      })}
    </div>
  );
}
