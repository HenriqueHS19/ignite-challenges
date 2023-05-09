import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { SearchFormContainer } from './styles';
import { PublicationContenxt } from '../../../../contexts/Publication';

export function SearchForm() {
    const { register, handleSubmit } = useForm();

    const { searchPublication, totalItems } = useContext(PublicationContenxt);

    async function handleQuerySubmit(data: any) {
        searchPublication(data.query);
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleQuerySubmit)}>
            <header>
                <strong> Publicações </strong>
                <span> { new Intl.NumberFormat().format(totalItems) } publicações </span>
            </header>
            <form>
                <input type="text" placeholder='Buscar conteúdo' {...register('query')} />
            </form>
        </SearchFormContainer>
    );
}