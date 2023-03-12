import { useState } from "react";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

import { ContentPaymentType } from "./styles";

interface ITypePayment {
    handleSetTypePayment: (type: string | null) => void;
}

interface IActiveButtonPayament {
    type: 'credit' | 'debit' | 'money' | null;
}

export function TypePayment({ handleSetTypePayment }: ITypePayment) {

    const [activeButtonPayament, setActiveButtonPayament] = useState<IActiveButtonPayament>({ type: null });

    function handleActiveButtonPayament({ type }: IActiveButtonPayament) {
        const newActiveButton: IActiveButtonPayament = {
            type,
        }
        setActiveButtonPayament(newActiveButton);
        handleSetTypePayment(type);
    }

    return (
        <ContentPaymentType>
            <header>
                <CurrencyDollar size={22} />
                <span>
                    <h3> Pagamento </h3>
                    <p> O pagamento é feito na entrega. Escolha a forma que deseja pagar </p>
                </span>
            </header>

            <div>
                <button
                    type="button"
                    onClick={() => handleActiveButtonPayament({ type: "credit" })}
                    className={activeButtonPayament.type === 'credit' ? 'active' : ''}
                >
                    <CreditCard size={22} />
                    Cartão de crédito
                </button>

                <button
                    type="button"
                    onClick={() => handleActiveButtonPayament({ type: "debit" })}
                    className={activeButtonPayament.type === 'debit' ? 'active' : ''}
                >
                    <Bank size={22} />
                    Cartão de débito
                </button>

                <button
                    type="button"
                    onClick={() => handleActiveButtonPayament({ type: "money" })}
                    className={activeButtonPayament.type === 'money' ? 'active' : ''}
                >
                    <Money size={22} />
                    Dinheiro
                </button>
            </div>
        </ContentPaymentType>
    );
}

