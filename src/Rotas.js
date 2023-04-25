import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Servicos from './Telas/Servicos'
import Carrinho from "./Telas/Servicos copy";


const Tab = createBottomTabNavigator();

export default function Rotas() {

    
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Serviços" component={Servicos}/>
                <Tab.Screen name="Carrinho" component={Carrinho}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}