import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext, useEffect } from "react";

import { FinishedPurchase } from "../../context/FinishedPurchase";
import { CartContext } from "../../context/Cart";

import successIllustration from '../../assets/success-Illustration.svg';

import { SuccessContainer } from "./styles";


export function Success() {

    const { address, typePayment } = useContext(FinishedPurchase);
    const { reset } = useContext(CartContext);

    useEffect(() => {
        reset();
    }, []);

    return (
        <SuccessContainer>
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é so aguardar que logo o café chegará até você.</p>

                <ul>
                    <li>
                        <span>
                            <MapPin size={16} />
                        </span>
                        <p>Entrega em <strong> {address.street }, { address.number } </strong> { address.district } - { address.city }, { address.uf } </p>
                    </li>
                    <li>
                        <span>
                            <Timer size={16} />
                        </span>
                        <p>
                            Previsão de entrega <br />
                            <strong> 20min - 30min </strong>
                        </p>
                    </li>
                    <li>
                        <span>
                            <CurrencyDollar size={16} />
                        </span>
                        <p>
                            Pagamento na entega <br />
                            <strong> 
                                { typePayment === 'credit' && 'Cartão de crédito' }
                                { typePayment === 'debit' && 'Cartão de débito' }
                                { typePayment === 'money' && 'Dinheiro' }
                            </strong>
                        </p>
                    </li>
                </ul>
            </div>

            <img src={successIllustration} alt="" />
        </SuccessContainer>
    );
}