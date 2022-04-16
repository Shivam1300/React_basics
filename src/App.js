import "./styles.css";

export default function App() {
  return (
    <div className="form">
      <text id="email">Email</text>
      <input id="i1" type="text" placeholder="Enter your Email"></input>
      <text id="pass">Password</text>
      <input id="i2" type="text" placeholder="Enter your Password"></input>
      <button id="button" type="button">
        Submit
      </button>
    </div>
  );
}
