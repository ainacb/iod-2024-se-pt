export function NumberInput({ value, onChange, placeholder }) {
  return (
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
