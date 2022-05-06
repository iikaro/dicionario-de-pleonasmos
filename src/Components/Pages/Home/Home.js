import React from "react";
import { PageContainer } from "../Entry/EntryStyles";
import { HomeText, HomeTextBox } from "./HomeStyles";

export const Home = () => {
    return (
        <PageContainer>
            <h1>Dicionário de Pleonasmos</h1>
            <HomeTextBox>
                <HomeText>
                    Bem-vindo ao primeiro dicionário de pleonasmos online da língua portuguesa.
                    <br />Aqui, os pleonasmos são organizados em verbetes, categorizados de acordo com a class gramatical das expressões que os compõem, explicados, e exemplificados, tanto com ocorrências quanto com expressões que ilustram como o pleonasmo deve ser evitado.
                    <br />Possui uma dúvida? Gostaria de compartilhar um pleonasmo? Entre em contato!
                </HomeText>
            </HomeTextBox>
        </PageContainer>
    );
}