import React, { Component } from "react";
import { EntryCounterExample, EntryFirstPartDefinition, EntrySecondPartDefinition, EntryExample, EntryFirstPart, EntrySecondPart, EntryTitle, EntryExampleSource, EntryExplanation } from "./EntryStyles";
import DictData from "../../../data/data.json";

class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 8
            //randomNumber: Math.floor(DictData.length * Math.random()),
        };
    }

    render() {
        return (
            <div>
                <h1>Pleonasmo do dia</h1>
                <EntryTitle><p>
                    
                    
                </p></EntryTitle>
                <EntryFirstPart>
                {DictData[27].firstWord}
                </EntryFirstPart>
                <EntryFirstPartDefinition>
                    {DictData[27].firstWordClass}
                </EntryFirstPartDefinition>

                <EntrySecondPart>
                {DictData[27].secondWord}
                </EntrySecondPart>
                <EntrySecondPartDefinition>
                {DictData[27].secondWordClass}
                </EntrySecondPartDefinition>


                <EntryExplanation>
                {DictData[27].explanation}
                </EntryExplanation>

                <EntryExampleSource>
                </EntryExampleSource>

                <EntryCounterExample>
                {DictData[27].counterExample}
                </EntryCounterExample>
            </div>
        );
    }
}

export default Entry;