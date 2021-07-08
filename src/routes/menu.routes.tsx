import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dicas } from "../pages";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
            <Drawer.Screen name="Dicas" component={Dicas} />

        </Drawer.Navigator>
    );
}