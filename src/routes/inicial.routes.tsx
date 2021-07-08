import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login } from "../pages";

const Stack = createStackNavigator();

export default function LoginRoute() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="PaginaInicial" component={Home} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}