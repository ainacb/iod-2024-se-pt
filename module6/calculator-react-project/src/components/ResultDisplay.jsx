export function ResultDisplay({ result }) {
  return <h3>Result: {result !== null ? result : "No calculation yet"}</h3>;
}
