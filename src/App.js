import { useState, useEffect } from "react";

export const usePasswordValidation = ({
  
username = "",
Password = "",
requiredLength = 8,
  
}) => {
const [validLength, setValidLength] = useState(null);
const [hasNumber, setHasNumber] = useState(null);
const [specialChar, setSpecialChar] = useState(null);
const [match, setMatch] = useState(null);
  
useEffect(() => {
  
setValidLength(username.length >= requiredLength ? true : false);
setValidLength(Password.length ===12 ? true : false);
setSpecialChar(/[-._!"`'#%&,:;<>=@{}~$()*+/\\?[\]^|]+/.test(username));
setMatch(username && username === Password.substring(0, username.length));
setHasNumber(/^[0-9]*$/.test(Password));
  
}, [username, Password, requiredLength]);
  
return [validLength, hasNumber, match, specialChar];
};