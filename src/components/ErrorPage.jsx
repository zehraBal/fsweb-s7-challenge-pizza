import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
export default function ErrorPage(props) {
  const history = useHistory();
  const { error, errorCode } = props.location.state;
  return (
    <div>
      <h1>{errorCode}</h1>
      <h1>{error}</h1>
      <Button onClick={() => history.push("/")}>Tekrar Dene</Button>
    </div>
  );
}
