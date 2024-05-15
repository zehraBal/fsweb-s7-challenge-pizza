import { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

export default function Count({ onCountChange, count, setCount }) {
  const increment = () => {
    setCount(count + 1);
    onCountChange(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      onCountChange(count - 1);
    }
  };
  return (
    <ButtonGroup className="count-button">
      <Button
        className="decrement-button"
        onClick={decrement}
        variant="secondary"
        style={{ backgroundColor: "#FDC913" }}
      >
        -
      </Button>
      <p
        className="sonuc"
        variant="secondary"
        style={{
          backgroundColor: "#FAF7F2",
          color: "#292929",
          padding: "5px 20px 5px 20px",
          margin: "0",
        }}
      >
        {count}
      </p>

      <Button
        onClick={increment}
        style={{ backgroundColor: "#FDC913" }}
        variant="secondary"
      >
        +
      </Button>
    </ButtonGroup>
  );
}
