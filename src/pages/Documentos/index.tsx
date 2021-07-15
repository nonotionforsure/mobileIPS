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
                    Carteira de Identidade.
                    Passaporte.
                    Carteira Nacional de Habilitação (modelo físico com fotografia);
                    A CNH-e (Carteira Nacional de Habilitação Eletrônica);
                    Carteira de Trabalho;
                    DNI (Documento Nacional de Identidade);
                    Título de Eleitor Eletrônico
                </Text>
            </View>
        </Container>
    );
}