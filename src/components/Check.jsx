import { Label, Input } from "reactstrap";
export default function Check({ changeFn, isChecked, value, label }) {
  return (
    <Label>
      <Input
        type="checkbox"
        onChange={changeFn}
        name="ekMalzeme"
        value={value}
        checked={isChecked}
      />
      {label}
    </Label>
  );
}
