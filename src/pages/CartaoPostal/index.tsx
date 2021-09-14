import React from "react";
import { useNavigation } from "@react-navigation/core";
import { ButtonAction } from "../../components"
import {
    Container,
    Title,
    Perfil,
    TextInput,

} from "./style";

export default function CartaoPostal() {
    const navigation = useNavigation();
    function handleFoto() {
        navigation.navigate("Camera");
    }
    function handleFile() {
        navigation.navigate("File");
    }
    return (
        <Container>
            <Perfil source={require("../../../assets/perfil.png")} />
            <Title>Lázaro Eduardo:</Title>
            <TextInput placeholder="Insira a mensagem para seu cartão postal"></TextInput>
            <ButtonAction image={require("../../../assets/camera.png")} onPress={handleFoto} />
            <ButtonAction image={require("../../../assets/abrirarquivo.png")} onPress={handleFile} />
        </Container>
    );
}