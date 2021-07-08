import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login, Cadastrar } from "../pages";
import MenuStack from "./menu.routes";

const Stack = createStackNavigator();

export default function LoginRoute() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="PaginaInicial" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastrar" component={Cadastrar} />
            <Stack.Screen name="Menu" component={MenuStack} />
        </Stack.Navigator>
    );
}