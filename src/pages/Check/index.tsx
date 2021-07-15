import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
    Container,
    FormRow,
    Label,
    TextInput,
    Title,
    Form,
    Text,
} from "./style";
import { Button, ButtonText } from "../../components";
import { Image } from "react-native";

export default function Check() {
    const navigation = useNavigation();

    function handleHome() {
        navigation.navigate("Home");
    }
    return (
        <Container>
            <Form>
                <Title>Check-List</Title>
                <FormRow>
                    <Label>local:</Label>
                    <TextInput placeholder="Elói Mendes"></TextInput>
                </FormRow>
                <FormRow>
                    <Label>Imagem:</Label>
                    <Text> Inpur para fotos</Text>
                </FormRow>
                <Button title="Salvar" onPress={handleHome} />

            </Form>
        </Container>
    );
}