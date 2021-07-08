import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import InicialRoutes from "./inicial.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <InicialRoutes />
        </NavigationContainer>
    );
}