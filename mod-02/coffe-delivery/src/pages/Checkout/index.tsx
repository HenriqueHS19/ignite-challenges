import { useContext, useState } from "react";

import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useNavigate } from "react-router-dom";

import { Form } from "./components/Form";
import { TypePayment } from "./components/TypePayament";
import { Card } from "./components/Card";

import { CartContext } from "../../context/Cart";
import { FinishedPurchase } from "../../context/FinishedPurchase";

import { Box, CheckoutContainer } from "./styles";

interface ITypePaymaent {
    type: string | null;
}

const purchaseSchema = zod.object({
    cep: zod.string().min(1, 'Informe e CEP'),
    street: zod.string().min(1, 'Informe o nome da rua'),
    number: zod.number().describe('Informe o numero'),
    complement: zod.string().optional(),
    district: zod.string().min(1, 'Informe o bairro'),
    city: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().min(1, 'Informe a UF'),
});

type TPurchaseForm = zod.infer<typeof purchaseSchema>;

export function Checkout() {
    const [ typePayment, setTypePayment ] = useState<ITypePaymaent>({ type: null });
    const { coffees, subTotal } = useContext(CartContext);
    const { setNewPurchase } = useContext(FinishedPurchase);

    const navigate = useNavigate();

    const newPurchaseForm = useForm<TPurchaseForm>({
        resolver: zodResolver(purchaseSchema),
        defaultValues: {
            cep: '',
            street: '',
            number: 0,
            complement: '',
            district: '',
            city: '',
            uf: '',
        }
    });

    const { handleSubmit, reset } = newPurchaseForm;

    // Component internal functionality
    const deliveryCharge = 3.50;

    function handleFinishedPurchase(data: TPurchaseForm) {
        if (typePayment.type != null) {
            const newPurchase = {
                ...data,
                coffees,
                total: subTotal + deliveryCharge,
                typePayment: typePayment.type,
            }

            const { street, number, complement, district, city, uf } = newPurchase;

            const addressPurchase = {
                street,
                number: Number(number),
                complement,
                district,
                city,
                uf,
            }

            setNewPurchase(addressPurchase, newPurchase.typePayment);

            reset();
            handleSetTypePayment(null);
            navigate('/success');
        }
    }

    function handleSetTypePayment(type: string | null) {
        setTypePayment({ type });
    }

    return (
        <CheckoutContainer>
            <form onSubmit={handleSubmit(handleFinishedPurchase)}>
                <Box>
                    <h2> Complete seu pedido </h2>

                    <FormProvider {...newPurchaseForm}>
                        <Form />
                    </FormProvider>

                    <TypePayment handleSetTypePayment={handleSetTypePayment}/>
                </Box>

                <Card />               
            </form>
        </CheckoutContainer>
    );
}