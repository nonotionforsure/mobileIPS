import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
    Container,
    View,
    Text,
    TextInput,
    Title,
} from "./style";



export default function Restaurantes() {
    const navigation = useNavigation();
    return (
        <Container>
            <Title>Local:</Title>
            <TextInput></TextInput>
            <View>
                <Text>
                    Opções:
                </Text>
                <Text>
                    -Tripadvisor
                </Text>
                <Text>
                    -Booking
                </Text>
                <Text>
                    -Hoteis.com
                </Text>
            </View>
        </Container>
    );
}