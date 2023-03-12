import { useEffect, useState } from 'react';
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';

import { Card } from './components/Card';

import coffeeImg from '../../assets/coffee.png';
import heroImg from '../../assets/hero.png';

import { HeroContainer, HomeContainer, Items, ListCoffe } from "./styles";

interface ICoffeCatalog {
    id: string;
    img: string;
    categorys: string[];
    title: string;
    description: string;
    price: number;
}

export function Home() {
    const [coffeeList, setCoffeeList] = useState<ICoffeCatalog[]>([]);

    useEffect(() => {
        const newCoffeItem: ICoffeCatalog = {
            id: '1234',
            img: coffeeImg,
            categorys: ['Tradicional', 'Expresso'],
            title: 'Expresso tradicional',
            description: 'O café tradicional é feito com água quente e grão moídos',
            price: 9.90,
        };

        setCoffeeList(state => [...state, newCoffeItem]);
    }, []);

    return (
        <>
            <HeroContainer>
                <div>
                    <div>
                        <h1> Encontre o café perfeito para qualquer hora do dia. </h1>
                        <h4> Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora </h4>

                        <Items>
                            <p>
                                <span>
                                    <ShoppingCartSimple size={16} />
                                </span>
                                Compra simples e segura
                            </p>
                            <p>
                                <span>
                                    <Package size={16} />
                                </span>
                                Embalagem mantém o café intacto
                            </p>
                            <p>
                                <span>
                                    <Timer size={16} />
                                </span>
                                Entrega rápida e rastreada
                            </p>
                            <p>
                                <span>
                                    <Coffee size={16} />
                                </span>
                                O café chega fresquinho até você
                            </p>
                        </Items>
                    </div>

                    <img src={heroImg} alt="" />
                </div>
            </HeroContainer>

            <HomeContainer>
                <ListCoffe>
                    <h2> Nossos cafés </h2>

                    <div>
                        {coffeeList.map(coffee => {
                            return (
                                <Card  key={coffee.id} coffee={coffee} />
                            );
                        })}
                    </div>
                </ListCoffe>
            </HomeContainer>
        </>
    );
}