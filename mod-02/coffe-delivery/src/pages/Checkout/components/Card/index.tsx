import { useContext } from "react";
import { Minus, Plus, Trash } from "phosphor-react";

import { CartContext } from "../../../../context/Cart";

import { ButtonGroup, ContentPurchase, FinishedPurchaseContainer, Item } from "./styles";

export function Card() {

    const { coffees, updateAmountCoffeeInCart, removeCoffeeInCart, subTotal } = useContext(CartContext);

    function handleUpdateAmountCoffeeInCart(id: string, type: 'plus' | 'minus') {
        updateAmountCoffeeInCart(id, type);
    }

    function handleRemoveCoffeInCart(id: string) {
        removeCoffeeInCart(id);
    }

    return (
        <FinishedPurchaseContainer>
            <h2> Cafés selecionados </h2>

            <ContentPurchase>
                <div>
                    {coffees.map(coffee => {
                        return (
                            <Item key={coffee.id}>

                                <img src={coffee.img} alt="" />

                                <div>
                                    <header>
                                        <p> {coffee.title} </p>
                                        <strong> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(coffee.price)} </strong>
                                    </header>

                                    <ButtonGroup>
                                        <span>
                                            <button type="button" onClick={() => handleUpdateAmountCoffeeInCart(coffee.id, 'minus')} >
                                                <Minus size={12} />
                                            </button>

                                            <p> {coffee.amount} </p>

                                            <button type="button" onClick={() => handleUpdateAmountCoffeeInCart(coffee.id, 'plus')}>
                                                <Plus size={12} />
                                            </button>
                                        </span>

                                        <button type="button" onClick={() => handleRemoveCoffeInCart(coffee.id)} >
                                            <Trash size={12} />
                                            Remover
                                        </button>
                                    </ButtonGroup>
                                </div>
                            </Item>
                        );
                    })}
                </div>

                <footer>
                    <div>
                        <span>
                            <p> Total de itens </p>
                            <p> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subTotal)} </p>
                        </span>

                        <span>
                            <p> Entrega </p>
                            <p> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(3.50)} </p>
                        </span>

                        <span>
                            <strong> Total </strong>
                            <strong> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subTotal + 3.50)} </strong>
                        </span>
                    </div>

                    <button type="submit">Confirmar pedido</button>
                </footer>
            </ContentPurchase>
        </FinishedPurchaseContainer>
    );
}