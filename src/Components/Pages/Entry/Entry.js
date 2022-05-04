import React from "react";
import { EntryCounterExample, EntryFirstPartDefinition, EntrySecondPartDefinition, EntryFirstPart, EntrySecondPart, EntryTitle, EntryExampleSource, EntryExplanation } from "./EntryStyles";
import DictData from "../../../Data/data.json";

export const Entry = () => {
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

a
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