import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
    Container,
    FormRow,
    Label,
    TextInput,
    Title,
    Form,
} from "./style";
import { Button, ButtonText } from "../../components";

export default function Cadastrar() {
    const navigation = useNavigation();
    function handleLogin() {
        navigation.navigate("Login");
    }
    function handleHome() {
        navigation.navigate("Home");
    }
    return (
        <Container>
            <Form>
                <Title>Cadastrar</Title>
                <FormRow>
                    <Label>E-mail</Label>
                    <TextInput placeholder="e-mail"></TextInput>
                </FormRow>
                <FormRow>
                    <Label>Senha</Label>
                    <TextInput placeholder="senha"></TextInput>
                </FormRow>
                <Button title="Login" onPress={handleHome} />
                <ButtonText title="Login" onPress={handleLogin} />
            </Form>
        </Container>
    );
}