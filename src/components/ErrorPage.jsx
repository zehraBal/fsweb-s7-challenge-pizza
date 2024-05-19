import { useHistory } from "react-router-dom";
export default function ErrorPage(props) {
  const history = useHistory();
  const { error, errorCode } = props.location.state;
  return (
    <div className="errorPage">
      <h1>{errorCode}</h1>
      <h1>{error}</h1>
      <button className="siparis-buton" onClick={() => history.push("/")}>
        Tekrar Dene
      </button>
    </div>
  );
}
