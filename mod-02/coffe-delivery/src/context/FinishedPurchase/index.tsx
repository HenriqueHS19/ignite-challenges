import { createContext, useState } from "react";

interface IAddress {
    street: string;
    number: number;
    district: string;
    city: string;
    uf: string;
}

interface IFinishedPurchase {
    address: IAddress;
    typePayment: string;
    setNewPurchase: (newAdress: IAddress, typePayment: string) => void;
}

export const FinishedPurchase = createContext({} as IFinishedPurchase);

interface IFinishedPurchaseProvider {
    children: React.ReactNode;
}

export function FinishedPurchaseProvider({ children }: IFinishedPurchaseProvider) {
    const [address, setAddress] = useState<IAddress>({} as IAddress);
    const [typePayment, setTypePayment] = useState('');

    function setNewPurchase(newAddress: IAddress, typePayment: string) {
        setTypePayment(typePayment);
        setAddress(newAddress);
    }

    return (
        <FinishedPurchase.Provider value={{ address, typePayment, setNewPurchase }}>
            {children}
        </FinishedPurchase.Provider>
    );
}