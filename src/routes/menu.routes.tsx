import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dicas, Perfil, Home, Documentos, Hoteis } from "../pages";


const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
            <Drawer.Screen name="Dicas" component={Dicas} />
            <Drawer.Screen name="Perfil" component={Perfil} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Hoteis" component={Hoteis} />
            <Drawer.Screen name="Documentos Essenciais" component={Documentos} />

        </Drawer.Navigator>
    );
}