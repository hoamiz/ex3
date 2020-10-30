import React from 'react';
import { BurgerBottom } from './burgerBottom';
import { BurgerTop } from './burgerTop';
import { Bacon } from './bacon';
import { Cheese } from './cheese';
import { ChickenFried } from './chickenFried';
import { PorkSteak } from './porkStick';
import { Tomato } from './tomato';
import { Salad } from './salad';
import { BeefStick } from './beefSteak';

export const BurgerMix = (props) => {
    const { topping } = props
    console.log(topping)
    return (
        <div>
            <BurgerTop />
            {topping && topping.map(x => {
                switch (x) {
                    case "bacon":
                        return <Bacon />
                    case "beef":
                        return <BeefStick />
                    case "cheese":
                        return <Cheese />
                    case "chicken":
                        return <ChickenFried />
                    case "pork":
                        return <PorkSteak />
                    case "salad":
                        return <Salad />
                    case "tomoto":
                        return <Tomato />
                    default:
                        return null
                }
            })}
            <BurgerBottom />
        </div>
    )
}