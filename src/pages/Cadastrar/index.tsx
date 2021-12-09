import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { Image, Alert, KeyboardAvoidingView } from "react-native";
import {
    Container,
    FormRow,
    Label,
    TextInput,
    Title,
    Form,
} from "./style";
import { Button, ButtonText } from "../../components";
import { useAuth } from "../../hook/auth";
import { IRegister, IUser } from "../../interfaces/User.interface";
import { LoginTypes } from "../../types/ScreenStack.types";

export default function Cadastrar({ navigation }: LoginTypes) {
    const { register } = useAuth();
    const [data, setData] = useState<IRegister>();
    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
    }
    function handleLogin() {
        navigation.navigate("Login");
    }
    /* function handleHome() {
        navigation.navigate("Home");
    } */
    async function handleRegister() {
        try {

            if (data?.email && data.name && data.password) {
                await register(data);
            } else {
                Alert.alert("Preencha todos os campos!!!");
            }
        } catch (error) {
            const err = error as AxiosError;
            const data = err.response?.data as IUser;
            let message = "";
            console.log(error);
            if (data.data) {
                for (const [key, value] of Object.entries(data.data)) {
                    message = `${message} ${value}`;
                }
            }
            Alert.alert(`${data.message} ${message}`);
        }
    }

    return (
        <Container>
            <KeyboardAvoidingView>
                <Form>
                    <Title>Cadastrar</Title>

                    <FormRow>
                        <Label>Nome</Label>
                        <TextInput
                            placeholder="nome"
                            onChangeText={(i) => handleChange({ name: i })}
                        ></TextInput>
                    </FormRow>

                    <FormRow>
                        <Label>E-mail</Label>
                        <TextInput
                            placeholder="e-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ email: i })}
                        ></TextInput>
                    </FormRow>
                    <FormRow>
                        <Label>Senha</Label>
                        <TextInput
                            placeholder="senha"
                            secureTextEntry={true}
                            onChangeText={(i) => handleChange({ password: i })}
                        ></TextInput>
                    </FormRow>
                    <Button title="Salvar" onPress={handleRegister} />
                    <ButtonText title="Login" onPress={handleLogin} />
                </Form>
            </KeyboardAvoidingView>
        </Container>
    );
}