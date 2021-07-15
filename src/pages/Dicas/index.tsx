import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
    Container,
    View,
    Text
} from "./style";
import { Button, ButtonText } from "../../components";

export default function Dicas() {
    const navigation = useNavigation();

    return (
        <Container>
            <View>
                <Text>
                    1 -Contrate um seguro de viagem
                    Sempre faça um seguro de viagem! Parece óbvio, mas muitas pessoas não se incomodam com isso e
                    acabam perdendo muito dinheiro quando as coisas dão errado…

                    2 - Menos é mais
                    Quando se trata de roupas para levar durante a viagem, menos será sempre melhor. Viajar apenas com a bagagem de mão deve ser o seu objetivo.
                    Leve menos e você vai viajar mais barato (não haverá cobranças por bagagem despachada ou por excesso de bagagem),
                    mais rápido (não precisará esperar por suas malas), e mais fácil (uma bolsa significa menos trabalho).

                    3 - Não esqueça de um adaptador de tomadas e carregadores de eletrônicos
                    Comprar um carregador pode custar uma fortuna nos aeroportos. Antes de viajar, confira também os padrões de tomadas do destino
                    e já leve tudo conforme a sua necessidade. De preferência, coloque esses itens na mala de mão.

                    4 - Evite usar chinelos a bordo
                    No caso improvável de uma emergência, é melhor ter um bom par de sapatos resistentes para proteger seus pés de objetos quentes ou cortantes.

                    5 - Leve baralho
                    Jogos de cartas são excelentes para quebrar o gelo internacional e são úteis também para passar o tempo durante os atrasos inevitáveis.
                    Impossível encontrar alguém que não saiba jogar pelo menos uma canastrinha, truco ou paciência.

                    6 - Conheça pelo menos os jargões do idioma falado no destino
                    Memorize algumas palavras essenciais da língua local e tenha coragem de usá-las!
                    Moradores ficam mais receptivos com aqueles que fazem um esforço para se comunicar com eles em sua própria língua. Não tenha medo de errar.

                </Text>
            </View>
        </Container>
    );
}