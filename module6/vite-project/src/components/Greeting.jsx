function Greeting({ name = "World", children }) {
  return (
    <div className="Greeting componentBox">
      Hello <strong>{name}</strong>
      {children}
    </div>
  );
}

export default Greeting;
