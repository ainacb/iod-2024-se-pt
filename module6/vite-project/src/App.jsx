import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "./components/PropsDisplayer";
import { City } from "./components/City";
import Pet from "./components/Pet";

function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  );
}

function Welcome(props) {
  // custom Welcome component
  return (
    <div className="Welcome componentBox">
      {/* if the 'name' prop exists, render it on the screen */}
      <h3 style={{ color: "blue", textTransform: "uppercase" }}>
        {" "}
        Welcome {props.name} {props.age}!
      </h3>
      {/* if this component has children, render them here */}
      {props.children}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const invalidJSX = (
    <>
      <p> paragraph 1 </p>
      <p> paragraph 2 </p>
    </>
  );

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };

  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );

  const spideyJSXFragment = (
    <>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </>
  );

  function City({ name, state = "NSW", country = "Australia", children }) {
    // destructuring the props.children property as well
    return (
      <div className="City componentBox">
        <strong>{name}</strong> is in {state}, {country}
        {children}
      </div>
    );
  }

  {
    /* Everything in between <City> and </City> is passed as 
props.children */
  }
  <City name="Newcastle">
    <div>
      Newcastle is a harbour city in the Australian state of New South Wales.
    </div>
    <div>
      <strong>Population:</strong> 322,278 (2016)
    </div>
  </City>;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React !!!</h1>

<Pet />
      <Pet type="Dog" colour="Brown" name="Bingo" />

      <City name="Newcastle">
<div>Newcastle is a harbour city in the Australian state
of New South Wales.</div>
<div><strong>Population:</strong> 322,278 (2016)</div>
</City>
      <City name="Aina" />
      <City name="Aina" state="Pampanga" country="Philippines">
        <p>Pampanga is located in Central Luzon, two hours drive north of Manila</p>
      </City>



      {/* Renders the component with multiple props - add your own! */}
      <PropsDisplayer prop1="first" prop2="second" prop3={3} />

      <Welcome name="Aina" age="31" />
      <Welcome name="students">
        <p>This is props children</p>

      </Welcome>

      <ExampleComponent />

      {/* state and country are not specified, will use defaults */}
      <City name="Sydney" />
      {/* country is not specified, will use default */}
      <City name="Melbourne" state="VIC" />
      {/* all values are specified, won't use defaults */}
      <City name="Chicago" state="Illinois" country="USA" />

      {spideyJSX}
      {spideyJSXFragment}
      {invalidJSX}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
