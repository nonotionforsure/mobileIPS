import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container, Text } from "../styles/Container";
import { Button, ButtonText } from "../components";
import { Image } from "react-native";
export default function Home() {
  const navigation = useNavigation();
  function handleLogin() {
    navigation.navigate("Login");
  }
  return (
    <Container>
      <Image source={require("../../assets/splash.png")} />
      <Text>Permaneça conectado em qualquer lugar do mundo!</Text>
      <Text>Colecione momentos, lugares e recordações!</Text>
      <Button onPress={handleLogin} title="Iniciar" />
      {/* o que ta escrito no botão */}
    </Container>
  );
}
