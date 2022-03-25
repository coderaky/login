
import { useState, useEffect } from "react";

export const usePasswordValidation = ({
  
pass = "",
username = "",
requiredLength = 8,
  
}) => {
const [validLength, setValidLength] = useState(null);
const [hasNumber, setHasNumber] = useState(null);
const [validlen, setvalidlen] = useState(null);
const [specialChar, setSpecialChar] = useState(null);
const [match, setMatch] = useState(null);
  
useEffect(() => {
var num=pass.substring(pass.length-3,pass.length);  
setValidLength(username.length <= 8 && username.length>=1? true : false);
setvalidlen(pass.length === username.length+4? true : false);
setHasNumber(num.match(/^[0-9]+$/) != null? true : false);
setMatch(pass && pass.substring(0,username.length) === username);
setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(pass.charAt(username.length)));
  
}, [pass, username, requiredLength]);
  
return [validLength, hasNumber, validlen, match, specialChar];
};









// import { useState, useEffect } from "react";

// export const usePasswordValidation = ({
  
// username = "",
// password = "",
// requiredLength = 8,
  
// }) => {
// const [validLength, setValidLength] = useState(null);
// const [hasNumber, setHasNumber] = useState(null);
// const [specialChar, setSpecialChar] = useState(null);
// const [match, setMatch] = useState(null);
  
// useEffect(() => {
  
// setValidLength(username.length <= 8 ? true : false && password.length <= 12 ? true : false);
// setHasNumber(/\d/.test(password.charAt(password.length - 1)) && /\d/.test(password.charAt(password.length - 2))  && /\d/.test(password.charAt(password.length - 3)));
// setMatch(username && username === password.substring(0, username.length));
// setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password.charAt(password.length - 4)));
  
// }, [username, password, requiredLength]);
  
// return [validLength, hasNumber, match, specialChar];
// };