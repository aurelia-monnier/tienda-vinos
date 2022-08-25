import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd, item}) => {
    const [counter, setCounter] = useState(0)

    const sumar = () => {
        counter<stock ? setCounter(counter + 1) : alert("Stock insuficiente. Beber con moderación")
    }

    const restar = () => {
        counter>initial && setCounter(counter - 1) 
    }

    
  return (
    <div className="counterBlock">
        <div className="counter">
          <button className="counterButton" onClick={restar}>-</button>
          <p>{counter}</p>
          <button className="counterButton" onClick={sumar}>+</button>
        </div>
        <button disabled={counter=== 0? true:false} onClick={() => onAdd(counter, item)}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount