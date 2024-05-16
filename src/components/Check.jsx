import { Label, Input } from "reactstrap";
export default function Check({
  changeFn,
  isChecked,
  value,
  label,
  name,
  className,
}) {
  return (
    <Label className={className}>
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
