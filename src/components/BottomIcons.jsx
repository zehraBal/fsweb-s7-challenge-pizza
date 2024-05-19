export default function BottomIcons() {
  const icons = [
    { path: "./Assets/mile2-aseets/icons/1.svg", val: "Ramen" },
    { path: "./Assets/mile2-aseets/icons/2.svg", val: "Pizza" },
    { path: "./Assets/mile2-aseets/icons/3.svg", val: "Burger" },
    { path: "./Assets/mile2-aseets/icons/4.svg", val: "French Fries" },
    { path: "./Assets/mile2-aseets/icons/5.svg", val: "Fast Food" },
    { path: "./Assets/mile2-aseets/icons/6.svg", val: "Soft Drinks" },
  ];
  return (
    <div className="icon-rad-div">
      {icons.map((icons, index) => {
        return (
          <div className="bottom-icon-container">
            <button className="bottom-icons-button">
              <img src={icons.path} />
              {icons.val}
            </button>
          </div>
        );
      })}
    </div>
  );
}
