import { useState } from "react";
import { usePasswordValidation } from "./hooks/usePasswordValidation";
import './App.css';

function App() {  

const [password, setPassword] = useState({
      pass: "",
      username: "",
     });
  
const [
validLength,
hasNumber,
validlen,
match,
specialChar,
] = usePasswordValidation({
pass: password.pass,
username: password.username,
});


const setFirst = (event) => {
  setPassword({ ...password, pass: event.target.value });
};
const setSecond = (event) => {
  setPassword({ ...password, username: event.target.value });
};
return (
<div className='App'>
  <div>
    Username:
    <input onChange={setSecond} type='text' />
  </div>
  <div>
    Password:
    <input onChange={setFirst} type='text' />
  </div>
  <div>
    <ul>
      <li>
        UserName Valid Length: {validLength ? <span>✅</span> : <span>❌</span>}
      </li>
      <li>
        Password Valid Length: {validlen ? <span>✅</span> : <span>❌</span>}
      </li>
      <li>Username Match: {match ? <span>✅</span> : <span>❌</span>}</li>
      <li>
        Special Character:{" "}
        {specialChar ? <span>✅</span> : <span>❌</span>}
      </li>
      <li>
        3 Number: {hasNumber ? <span>✅</span> : <span>❌</span>}
      </li>
      
      <li>
        Password is Valid: {validLength && validlen && match && specialChar && hasNumber ? <span>✅</span> : <span>❌</span>}
      </li>
      

  </ul>
  </div>
  </div>
  );
}
export default App;


