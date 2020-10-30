import React, { useState } from "react";
import { BurgerMix } from './burgerMix';
import { FormOrder } from './formOrder';
import "./burger.css"
// menu - form
// burger - component
const BurgerContainer = () => {
    const [topping, setTopping] = useState(["bacon", "beef", "cheese", "chicken", "pork", "salad", "tomoto"])
    return (
        <div className="burger-container">
            <FormOrder setTopping={setTopping} topping={topping} />
            <BurgerMix topping={topping} className="burger-mix" />
        </div>
    )
}

export default BurgerContainer