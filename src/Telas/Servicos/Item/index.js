import React, { useState } from "react";
import estilos from "./estilos";
import { Button, Text } from "react-native";
import { View } from "react-native";

import CampoInteiro from "../../../componentes/CampoInteiro/Index";

export default function Item({ nome, preco, descricao }) {

    const [quantidade, setQuantidade] = useState(1);

    return (
        <>

            <View style={estilos.informacao}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
                <Text style={estilos.preco}>{preco}</Text>
            </View>
            <View style={estilos.carrinho}>
                <View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Quantidade: </Text>
                        <CampoInteiro valor={quantidade} acao={setQuantidade}/>
                    </View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}> Preço </Text>
                        <Text style={estilos.preco}>0</Text>
                    </View>
                </View>
                <Button title="Adicionar"/>
            </View>
            <View style={estilos.divisor}/>
        </>
    )
}