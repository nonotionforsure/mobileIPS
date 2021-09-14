import React from "react";
import { FlatList } from "react-native";
import data from "../../services/data"

import {
    Container,
    Text,
    Text1,
    View,
    Image
} from "./style";


export default function Experiencias() {

    return (
        <Container>
            <FlatList data={data} renderItem={({ item }) => (
                <View key={item.id}>
                    <Image source={item.imagem} />
                    <Text1>{item.visita}</Text1>
                    <Text1>{item.cidade}</Text1>
                    <Text>{item.texto}</Text>
                </View>
            )} />
        </Container>
    );
}