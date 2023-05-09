import { LoginContainer } from "./styles";
import logoIcon from '../../assets/logo.svg';
import { useForm } from "react-hook-form";
import { api } from "../../libs/api";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";
import { useNavigate } from "react-router-dom";

export function Login() {
    const { handleSetUser } = useContext(UserContext);

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    async function handleLogin(data: any) {
        const response = await api.get(`users/${data.login}`);

        if (response.status === 200) {
            handleSetUser(response.data);
            navigate('/home');
        }
    }

    return (
        <LoginContainer>
            <img src={logoIcon} alt="Logo" />

            <form onSubmit={handleSubmit(handleLogin)}>
                <input type="text" placeholder="Usuario do github" {...register('login')} />
                <button> Entrar </button>
            </form>
        </LoginContainer>
    )
}