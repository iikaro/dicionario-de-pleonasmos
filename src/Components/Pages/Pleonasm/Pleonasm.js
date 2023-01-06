import React from "react";
import { useParams } from "react-router-dom";
import { EntryCounterExample, EntryFirstPartDefinition, EntrySecondPartDefinition, EntryFirstPart, EntrySecondPart, EntryTitle, EntryExampleSource, EntryExplanation, PageContainer } from "./PleonasmStyles";
import { getPleonasm } from "../../../data/Data";

export const Pleonasm = () => {
    let params = useParams();
    let pleonasm = getPleonasm(parseInt(params.pleonasmId, 10));
    return (
            <PageContainer>
                <EntryFirstPart>
                    {pleonasm.firstWord}
                </EntryFirstPart>
                <EntryFirstPartDefinition>
                    {pleonasm.firstWordClass}
                </EntryFirstPartDefinition>

                <EntrySecondPart>
                    {pleonasm.secondWord}
                </EntrySecondPart>
                <EntrySecondPartDefinition>
                    {pleonasm.secondWordClass}
                </EntrySecondPartDefinition>

                <EntryExplanation>
                    {pleonasm.explanation}
                </EntryExplanation>

                <EntryExampleSource>
                </EntryExampleSource>

                <EntryCounterExample>
                    {pleonasm.counterExample}
                </EntryCounterExample>
            </PageContainer>
    );
}