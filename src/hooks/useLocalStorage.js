// import { useEffect, useState } from "react";
// export const  useLocalStorage =(key, initialValue)=> {
//     console.log("key ", key);
//     console.log("initialvalue ", initialValue);
//     const storedValue = typeof window !== "undefined" ? localStorage.getItem(key) : null;
  
//     console.log("storedValue ", storedValue)
  
//     const [stored, setStored] = useState(storedValue !== null ? JSON.parse(storedValue) : initialValue);
//     console.log("stored ", stored)
//      useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(stored));
//     }, [key, stored]);
//     console.log("after stored ", stored);
//     return [stored, setStored];
//   }
  
// export default useLocalStorage;