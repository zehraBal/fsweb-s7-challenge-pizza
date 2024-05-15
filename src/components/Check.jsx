import { Label, Input } from "reactstrap";
export default function Check({ changeFn, isChecked, value, label, name }) {
  return (
    <Label>
      <Input
        type="checkbox"
        onChange={changeFn}
        name={name}
        value={value}
        checked={isChecked}
      />
      {label}
    </Label>
  );
}
