import React from "react";
import Accordion from "@/components/evaluations/acordeon";
import VitalSigns from "@/components/evaluations/VitalSigns";
import ChiefComplaint from "@/components/evaluations/chiefComplaint";
import ExplorationTab from "@/components/evaluations/ExplorationTab";
import GlasgowComaScale from "@/components/evaluations/MentalStatusTab";
import DiagnosticoMedico from "@/components/evaluations/DiagnosisTab";
import TratamientoYDecisionCita from "@/components/evaluations/TreatmentTab";
import Signature from "@/components/evaluations/Signature";

const FormEvaluation = ({ defaultTriaje, setMedicalRecordData }) => {
  return (
    <>
      <Accordion title="Ultimo Triaje" id="triage">
        <VitalSigns
          defaultTriaje={defaultTriaje}
          setMedicalRecordData={setMedicalRecordData}
        />
      </Accordion>
      <Accordion title="Motivo de la Consulta" id="consulta">
        <ChiefComplaint setMedicalRecordData={setMedicalRecordData} />
      </Accordion>
      <Accordion title="Exploracion Fisica" id="expfisica">
        <ExplorationTab setMedicalRecordData={setMedicalRecordData} />
      </Accordion>
      <Accordion title="Nivel de Consciencia" id="glasgow">
        <GlasgowComaScale setMedicalRecordData={setMedicalRecordData} />
      </Accordion>
      <Accordion title="Diagnostico" id="glasgow">
        <DiagnosticoMedico setMedicalRecordData={setMedicalRecordData} />
      </Accordion>
      <Accordion title="Receta Medica" id="glasgow">
        <TratamientoYDecisionCita setMedicalRecordData={setMedicalRecordData} />
      </Accordion>

      <Accordion title="Firma" id="glasgow">
        <Signature />
      </Accordion>
    </>
  );
};

export default FormEvaluation;
