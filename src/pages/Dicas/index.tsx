import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
    Container,
    View,
    Text
} from "./style";
import { Button, ButtonText } from "../../components";

export default function Dicas() {
    const navigation = useNavigation();
    function handleLogin() {
        navigation.navigate("Login");
    }
    function handleHome() {
        navigation.navigate("Home");
    }
    return (
        <Container>
            <View>
                <Text> Quando se começa um planejamento de viagem
                    qual deve ser o primeiro item do checklist? Claro
                    que é o destino! Afinal, se ele não está definido muitos
                    outros itens da lista não podem ser riscados...
                </Text>
            </View>
        </Container>
    );
}