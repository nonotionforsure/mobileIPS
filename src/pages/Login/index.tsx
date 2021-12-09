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
import { IAuthenticate, IUser } from "../../interfaces/User.interface";
import { LoginTypes } from "../../types/ScreenStack.types";


export default function Login({ navigation }: LoginTypes) {
    const { signIn } = useAuth();
    const [data, setData] = useState<IAuthenticate>();
    const [isLoading, setIsLoading] = useState(true);

    function handleCadastrar() {
        navigation.navigate("Cadastrar");
    }
    // function handleHome() {
    //   navigation.navigate("HomeStack");
    // }
    function handleChange(item: IAuthenticate) {
        setData({ ...data, ...item });
    }
    async function handleSignIn() {
        try {

            if (data?.email && data.password) {
                await signIn(data);
            } else {
                Alert.alert("Preencha todos os campos!!!");

            }
        } catch (error) {
            const err = error as AxiosError;
            const data = err.response?.data as IUser;

            let message = "";
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
                    <Title>Login</Title>
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
                    <Button title="Login" onPress={handleSignIn} />
                    <ButtonText title="Cadastre-se" onPress={handleCadastrar} />
                </Form>
            </KeyboardAvoidingView>
        </Container>
    );
}