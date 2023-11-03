import React from "react";

const ClinicalTab = ({ clinicalData, handleInputChange }) => {
  const renderInputField = (label, name, value, type = "text") => {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
          placeholder={label}
        />
      </div>
    );
  };

  const renderTextArea = (label, name, value, rows = 3) => {
    return (
      <div className="col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <textarea
          name={name}
          value={value}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
          rows={rows}
        ></textarea>
      </div>
    );
  };

  return (
    <>
      {/* Signos Vitales */}
      <div className="col-span-2">
        <h4 className="text-lg font-bold text-gray-700 mb-2">Signos Vitales</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderInputField("Temperatura (°C)", "signosVitales.temperatura")}
          {renderInputField("Frecuencia Cardiaca", "signosVitales.fc")}
          {renderInputField("Frecuencia Respiratoria", "signosVitales.fr")}
          {renderInputField("Presión Arterial", "signosVitales.pa")}
          {renderInputField("Saturación de Oxígeno (%)", "signosVitales.sat")}
          {renderInputField("Peso (kg)", "signosVitales.peso", "number")}
          {renderInputField("Talla (cm)", "signosVitales.talla", "number")}
        </div>
      </div>
      <div className="col-span-2">
        <h4 className="text-lg font-bold text-gray-700 mb-2">
          Datos de la Consulta
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderTextArea("Antecedentes", "antecedentes")}
          {renderTextArea("Motivo de Consulta", "motivoConsulta")}
        </div>
      </div>
      {/* Exploración Física */}
      <div className="col-span-2">
        <h4 className="text-lg font-bold text-gray-700 mb-2">
          Exploración Física
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderTextArea("Examen General", "exploracionFisica.exGeneral")}
          {renderTextArea("Piel y Faneras", "exploracionFisica.pielYFaneras")}
          {renderTextArea("Cabeza y Cuello", "exploracionFisica.cabezaYCuello")}
          {renderTextArea(
            "Torax y Pulmones",
            "exploracionFisica.toraxYPulmones"
          )}
          {renderTextArea("Cardiovascular", "exploracionFisica.cardiovascular")}
          {renderTextArea("Abdomen", "exploracionFisica.abdomen")}
          {renderTextArea("Urogenital", "exploracionFisica.urogenital")}
          {renderTextArea("Extremidades", "exploracionFisica.extremidades")}
          {renderTextArea(
            "SNC (Sistema Nervioso Central)",
            "exploracionFisica.snc"
          )}
        </div>
      </div>

      {renderTextArea("Observaciones", "observaciones")}
    </>
  );
};

export default ClinicalTab;