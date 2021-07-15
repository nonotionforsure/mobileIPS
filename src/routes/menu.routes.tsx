import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dicas, Perfil, Home, Documentos, Hoteis, Restaurantes, Turismo, Check } from "../pages";
import colors from "../styles/colors"


const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: `${colors.verdinho}` }
            }}
        >
            <Drawer.Screen name="Editar Perfil" component={Perfil} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Dicas" component={Dicas} />
            <Drawer.Screen name="Hoteis" component={Hoteis} />
            <Drawer.Screen name="Restaurantes" component={Restaurantes} />
            <Drawer.Screen name="Turismo" component={Turismo} />
            <Drawer.Screen name="Documentos Essenciais" component={Documentos} />
            <Drawer.Screen name="Check-List" component={Check} />


        </Drawer.Navigator>
    );
}