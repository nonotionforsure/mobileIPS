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

    return (
        <Container>
            <View>
                <Text>

                    1 -Contrate um seguro de viagem
                    Sempre faça um seguro de viagem! Parece óbvio, mas muitas pessoas não se incomodam com isso e
                    acabam perdendo muito dinheiro quando as coisas dão errado…

                </Text>
            </View>
        </Container>
    );
}