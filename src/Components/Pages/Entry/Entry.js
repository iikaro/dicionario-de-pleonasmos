import React, { Component } from "react";
import { EntryCounterExample, EntryDefinition, EntryExample, EntryFirstPart, EntrySecondPart, EntryTitle } from "./EntryStyles";
import DictData from "../../../data/data.json";

class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 8
            //randomNumber: Math.floor(DictData.length * Math.random()),
        };
    }
    
    render(){
    return (
        <div>
            <h1>Dicionário de Pleonasmos</h1>
            <EntryTitle><p>
            {DictData[7].firstWord}
            {DictData[7].secondWord}
            </p></EntryTitle>

            <EntryFirstPart><p>
                Primeira expressao</p>
                <EntryDefinition>
                    definition two
                </EntryDefinition>
            </EntryFirstPart>

            <EntrySecondPart><p>
                Segunda expressao</p>
                <EntryDefinition>
                    definition two
                </EntryDefinition>
            </EntrySecondPart>

            <EntryExample><p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
            </p></EntryExample>

            <EntryCounterExample><p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
            </p></EntryCounterExample>
        </div>
    );
}
}

export default Entry;