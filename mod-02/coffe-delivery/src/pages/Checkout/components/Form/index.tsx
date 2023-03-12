import { useFormContext } from "react-hook-form";
import { MapPin } from "phosphor-react";

import { ContentForm, FormContainer, InputGroup } from "./styles";

export function Form() {
    const { register } = useFormContext();

    return (
        <ContentForm>
            <header>
                <MapPin size={22} />
                <span>
                    <h3> Endereço de entrega </h3>
                    <p> Informe o endereço onde deseja receber seu pedido </p>
                </span>
            </header>

            <FormContainer>
                <input type="text" placeholder="CEP" required {...register('cep')} />

                <input type="text" placeholder="Rua" required {...register('street')} />

                <InputGroup>
                    <input type="number" placeholder="Número" required {...register('number', { valueAsNumber: true })} />
                    <input type="text" placeholder="Complemento" {...register('complement')} />
                </InputGroup>

                <InputGroup>
                    <input type="text" placeholder="Bairro" required {...register('district')} />
                    <input type="text" placeholder="Cidade" required {...register('city')} />
                    <input type="text" placeholder="UF" required {...register('uf')} />
                </InputGroup>
            </FormContainer>
        </ContentForm>
    );
}