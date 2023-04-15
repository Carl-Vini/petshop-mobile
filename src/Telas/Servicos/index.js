import React from "react";

import { SafeAreaView,StatusBar, Text } from "react-native";


const servicos = [
    {
        id: 1, 
        nome: 'Banho',
        preco: 79.9, 
        descricao: "Banho completo"
    },
    {
        id: 2,
        nome: 'Vacina V4',
        preco: 89.9,
        descricao: 'Uma dose da vacina V4. Seu animalzinho precisa de 2'
    },
    {
        id: 3,
        nome: 'Vacina antirrábica',
        preco: 99.9,
        descricao: 'Uma dose da vacina antirrábica. Seu animalzinho precisa de uma por ano'
    }
]

export default function Servicos() {
    return <SafeAreaView>
        <StatusBar/>
        <Text>Seviços!</Text>
    </SafeAreaView>

}