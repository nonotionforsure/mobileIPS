import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
    Container,
    View,
    Text
} from "./style";


export default function Documentos() {
    const navigation = useNavigation();

    return (
        <Container>
            <View>
                <Text>
                    <tr>Carteira de Identidade</tr>
                    <tr>Passaporte</tr>
                    <tr>Carteira Nacional de Habilitação (modelo físico com fotografia) </tr>
                    <tr>A CNH-e (Carteira Nacional de Habilitação Eletrônica) </tr>
                    <tr>Carteira de Trabalho; </tr>
                    <tr>DNI (Documento Nacional de Identidade) </tr>
                    <tr>Título de Eleitor Eletrônico</tr>
                </Text>
            </View>
        </Container>
    );
}