import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Camera, CartaoPostal, File, } from "../pages";

const Stack = createStackNavigator();

export default function LoginRoute() {
    return (


        <Stack.Navigator headerMode="none">
            <Stack.Screen name="CartaoPostal" component={CartaoPostal} />
            <Stack.Screen name="Camera" component={Camera} />
            <Stack.Screen name="File" component={File} />
        </Stack.Navigator>
    );
}