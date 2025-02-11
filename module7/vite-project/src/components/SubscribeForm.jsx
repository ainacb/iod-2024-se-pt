import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";

export default function SubscribeForm() {
  const [status, setStatus] = useState("");
  const [nameInputProps, resetName] = useFormInput("Mary");
  const [emailInputProps, resetEmail] = useFormInput("mary@pop.com");

  //   // similar state variables mapped to form inputs
  //   const [firstName, setFirstName] = useState("Mary");
  //   const [email, setEmail] = useState("mary@poppins.com");

  //   // similar handler functions
  //   const handleNameChange = (e) => setFirstName(e.target.value);
  //   const handleEmailChange = (e) => setEmail(e.target.value);

  function handleSubscribe() {
    resetName("");
    resetEmail("");
    setStatus("Thanks for subscribing!");
  }

  return (
    <div className="SubscribeForm componentBox">
      <label>
        First name: {/* form inputs with similar props */}
        <input {...nameInputProps} />
      </label>
      <label>
        Email: {/* form inputs with similar props */}
        <input {...emailInputProps} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}
