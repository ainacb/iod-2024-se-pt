export function OperatorSelector({ value, onChange }) {
  const operators = ["+", "-", "*", "/"];

  return (
    <div className="operator-buttons">
      {operators.map((op) => (
        <button
          key={op}
          className={value === op ? "selected" : ""}
          onClick={() => onChange(op)}
        >
          {op}
        </button>
      ))}
    </div>
  );
}
