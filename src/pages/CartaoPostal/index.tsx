import React from "react";
import { useNavigation } from "@react-navigation/core";
import { ButtonAction } from "../../components"
import {
    Container,
    Text,
    Title,
    Perfil,

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
            <Text>
                Insira a mensagem de seu cartão postal:
            </Text>
            <ButtonAction image={require("../../../assets/camera.png")} onPress={handleFoto} />
            <ButtonAction image={require("../../../assets/abrirarquivo.png")} onPress={handleFile} />


        </Container>
    );
}