export default function Banner({ onClick }) {
  return (
    <div className="banner">
      <h3>fırsatı kaçırma</h3>
      <h1>
        <span>KOD ACIKTIRIR</span>
        <span> PİZZA DOYURUR</span>
      </h1>
      <div className="siparis-buton-div">
        <button className="aciktim-btn" type="button" onClick={onClick}>
          ACIKTIM
        </button>
      </div>
    </div>
  );
}
