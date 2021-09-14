import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
    Container,
    FormRow,
    Label,
    TextInput,
    Title,
    Form,
    Perfil,

} from "./style";
import { Button, ButtonText } from "../../components";

export default function Cadastrar() {
    const navigation = useNavigation();
    function handleHome() {
        navigation.navigate("Home");
    }
    return (
        <Container>
            <Perfil source={require("../../../assets/perfil.png")} />
            <Form>
                <Title>Editar Perfil</Title>
                <FormRow>
                    <Label>E-mail:</Label>
                    <TextInput placeholder="e-mail"></TextInput>
                </FormRow>
                <FormRow>
                    <Label>Senha:</Label>
                    <TextInput placeholder="senha"></TextInput>
                </FormRow>
                <Button title="Salvar" onPress={handleHome} />
            </Form>
        </Container>
    );
}