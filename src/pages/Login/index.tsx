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

export default function Login() {
    const navigation = useNavigation();
    function handleCadastrar() {
        navigation.navigate("Cadastrar");
    }
    function handleHome() {
        navigation.navigate("HomeStack");
    }
    return (
        <Container>
            <Form>
                <Title>Adopted</Title>
                <FormRow>
                    <Label>E-mail</Label>
                    <TextInput placeholder="e-mail"></TextInput>
                </FormRow>
                <FormRow>
                    <Label>Senha</Label>
                    <TextInput placeholder="senha"></TextInput>
                </FormRow>
                <Button title="Login" onPress={handleHome} />
                <ButtonText title="Cadastre-se" onPress={handleCadastrar} />
            </Form>
        </Container>
    );
}