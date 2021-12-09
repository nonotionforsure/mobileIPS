import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginRoutes from "./inicial.routes";
import MenuStack from "./menu.routes";
import { useAuth } from "../hook/auth";

export default function Routes() {
    const { access_token } = useAuth();
    console.log(access_token);
    return (
        <NavigationContainer>
            {access_token ? <MenuStack /> : <LoginRoutes />}
        </NavigationContainer>
    );
}