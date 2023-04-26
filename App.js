import React from 'react';
import Servicos from './src/Telas/Servicos';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Carrinho from './src/Telas/Servicos copy';
import Rotas from './src/Rotas';
import TelaPadrao from './src/componentes/TelaPadrao/Index';


export default function App() {
  return (<TelaPadrao>
        <Rotas />
  </TelaPadrao>
  
  );
}


