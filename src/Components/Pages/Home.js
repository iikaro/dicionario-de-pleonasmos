import React from "react";
import { HomeTextBox } from "./HomeStyles";

function Home() {
    return (
        <div>
            <h1>Dicionário de Pleonasmos</h1>
            <HomeTextBox><p>
                Bem-vindo ao primeiro dicionário de pleonasmos online da língua portuguesa.</p>
                <p>
                Aqui, os pleonasmos são organizados em verbetes, categorizados de acordo com a class gramatical das expressões que os compõem, explicados, e exemplificados,
                </p>
                <p>
                tanto com ocorrências quanto com expressões que ilustram como o pleonasmo deve ser evitado. Possui uma dúvida? Gostaria de compartilhar um pleonasmo? Entre em contato!
            </p></HomeTextBox>
        </div>
    );
}

export default Home;