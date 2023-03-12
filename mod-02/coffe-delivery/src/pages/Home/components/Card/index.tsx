import { useContext, useState } from "react";

import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import { AmountCoffe, CardContainer, CardContent, Footer } from "./styles";
import { CartContext } from "../../../../context/Cart";

interface ICoffee {
    id: string;
    img: string;
    categorys: string[];
    title: string;
    description: string;
    price: number;
}

interface ICard {
    coffee: ICoffee;
}

export function Card({ coffee }: ICard) {

    const [amountCoffee, setAmountCoffee] = useState(1);

    const { addCoffeeInCart } = useContext(CartContext);

    function handleAddCoffeeInCart() {
        const newCoffee = {
            ...coffee,
            amount: amountCoffee,
        };

        addCoffeeInCart(newCoffee);
        setAmountCoffee(1);
    }

    // Component internal functionality
    function handleAmountCoffe(type: 'plus' | 'minus') {
        if (type === 'plus') {
            setAmountCoffee(state => {
                return state += 1;
            });
        }
        else {
            if (amountCoffee > 1) {
                setAmountCoffee(state => {
                    return state -= 1;
                });
            }
        }
    }

    return (
        <CardContainer>
            <CardContent>
                <img src={coffee.img} alt="" />

                <div>
                    {coffee.categorys.map(category => {
                        return (
                            <span> {category} </span>
                        );
                    })}

                </div>

                <h2> {coffee.title} </h2>
                <p> {coffee.description} </p>
            </CardContent>

            <Footer>
                <span>
                    <strong>{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(coffee.price) }</strong>
                </span>

                <div>
                    <AmountCoffe>
                        <button type="button" onClick={() => handleAmountCoffe('minus')} >
                            <Minus size={12} />
                        </button>

                        <p> {amountCoffee} </p>

                        <button type="button" onClick={() => handleAmountCoffe('plus')} >
                            <Plus size={12} />
                        </button>
                    </AmountCoffe>

                    <button type="button" onClick={handleAddCoffeeInCart}>
                        <ShoppingCartSimple size={24} />
                    </button>
                </div>
            </Footer>
        </CardContainer>
    );
}