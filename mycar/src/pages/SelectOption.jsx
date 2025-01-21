import { useParams } from "react-router-dom";
import OptionPageHeader from "../components/OptionPageHeader";
import { useState } from "react";
import ModelList from "../components/ModelList";

export default function SelectOption() {
    const { carName } = useParams();
    const [step, setStep] = useState(1);

    return (
        <div>
            <OptionPageHeader step={step} setStep={setStep} />
            <ModelList carName={carName} />
        </div>
    )
}