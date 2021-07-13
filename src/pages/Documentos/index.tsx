import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
    Container,
    View,
    Text
} from "./style";
import { Button, ButtonText } from "../../components";

export default function Documentos() {
    const navigation = useNavigation();

    return (
        <Container>
            <View>
                <Text> documentos pipi1
                </Text>
            </View>
        </Container>
    );
}