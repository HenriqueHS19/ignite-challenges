import { createContext, ReactNode, useEffect, useState } from "react";

interface ICoffee {
    id: string;
    img: string;
    title: string;
    price: number;
    amount: number;
}

interface ICartContext {
    coffees: ICoffee[];
    subTotal: number;
    totalAmountCoffee: number;
    addCoffeeInCart: (coffee: ICoffee) => void;
    removeCoffeeInCart: (id: string) => void;
    updateAmountCoffeeInCart: (id: string, type: 'plus' | 'minus') => void;
    updateTotalAmountCoffee: () => void;
    reset: () => void;
}

export const CartContext = createContext({} as ICartContext);

interface ICartContextProvider {
    children: ReactNode;
}

export function CartContextProvider({ children }: ICartContextProvider) {

    const [coffees, setCoffees] = useState<ICoffee[]>([]);
    const [subTotal, setSubTotal] = useState(0);
    const [totalAmountCoffee, setTotalAmountCoffee] = useState(0);

    function addCoffeeInCart(coffee: ICoffee) {
        const verifyIfExistsCoffeInCart = coffees.find(c => c.id === coffee.id);

        if (verifyIfExistsCoffeInCart) {
            setCoffees(state => {
                state.map(c => {
                    if (c.id === coffee.id) {
                        c.amount += coffee.amount;
                    }
                });

                return state;
            });
        }
        else {
            setCoffees(state => [...state, coffee]);
        }
        updateSubTotal();
    }

    function removeCoffeeInCart(id: string) {
        const updateListCoffee = coffees.filter(coffe => coffe.id != id);
        setCoffees(updateListCoffee);
    }

    function updateAmountCoffeeInCart(id: string, type: 'plus' | 'minus') {
        if (type === 'plus') {
            let findCoffee = coffees.find(coffe => coffe.id === id);
            
            if (findCoffee) {
                findCoffee.amount += 1;
            }
        }
        else {
            let findCoffee = coffees.find(coffe => coffe.id === id);
            
            if (findCoffee && findCoffee.amount > 1) {
                findCoffee.amount -= 1;
                console.log(findCoffee.amount);
            }
        }

        updateSubTotal();
    }

    function reset() {
        setCoffees([]);
        setSubTotal(0);
        setTotalAmountCoffee(0);
    }

    // Component internal functionality
    function updateSubTotal() {
        let accumulator = 0;
        coffees.map(coffee => {
            accumulator += (coffee.amount * coffee.price);
        });
        setSubTotal(accumulator);
    }

    function updateTotalAmountCoffee() {
        let accumulator = 0;
        coffees.map(coffee => {
            accumulator += coffee.amount;
        });
        setTotalAmountCoffee(accumulator);
    }

    useEffect(() => {
        updateSubTotal();
        updateTotalAmountCoffee();
    }, [coffees, subTotal]);

    return (
        <CartContext.Provider value={{ coffees, subTotal, addCoffeeInCart, removeCoffeeInCart, totalAmountCoffee, updateAmountCoffeeInCart, updateTotalAmountCoffee, reset }}>
            {children}
        </CartContext.Provider>
    );
}