import React, { useState } from "react";
import Props from "../props";
import Props2 from "../props2";

export function App() {

  const [count, setcount] = useState(0)

  const minus = () => {
    if (count <= 0) {
      setcount(0)
    }
    else {
      setcount(count - 1)
    }
  }

  return (
    <div>
      <div className="count">
        <button onClick={() => minus()}>-</button>
        <h1 className={count <= 5 ? "col1" : "col2"}>count: {count}</h1>
        <button onClick={() => setcount(count + 1)}>+</button>
      </div>
      <hr />

      <div className="props">
        <Props maincount={count} text="Taraqqiyot" />


        <Props2 mainclear={setcount} >

          <div>
          <button>salom</button>
          </div>  
        </Props2>





      </div>

    </div>
  )
}

