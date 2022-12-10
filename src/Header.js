import { useEffect, useState } from "react";
import Footer from './Footer'
const Header = () => {
  const [count, setCount] = useState("A");

//   const countOne = () => {
//     setCount(prev => prev + 1)
// }

  // useEffect(() => {

  // },[])
  return (
    <div>
        <Footer count={count}/>
      <h1>Navbar</h1>
      <button onClick={() => setCount("B")}>Click me</button>
      <button onClick={() => setCount("C")}>Click me</button>
      <button onClick={() => setCount("D")}>Click me</button>

      
    </div>
  );
};

export default Header;
