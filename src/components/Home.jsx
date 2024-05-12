import { useHistory } from "react-router-dom";
export default function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/siparisFormu");
  }

  return (
    <div class="home-page">
      <h1>
        <span>KOD ACIKTIRIR</span>
        <span> PİZZA DOYURUR</span>
      </h1>
      <div class="siparis-buton-div">
        <button class="siparis-buton" type="button" onClick={handleClick}>
          Siparis Ver
        </button>
      </div>
    </div>
  );
}
