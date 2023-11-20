const TextAreaField = ({ label, name, onBlur, placeholder, data }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        onBlur={onBlur} // Usar el prop onBlur aquí
        className="resize-none mt-1 p-2 w-full border-gray-300 rounded-md"
        placeholder={placeholder}
        rows={4}
        aria-label={label}
        maxLength="255"
        disabled={Boolean(data)} // Deshabilita el campo si data está presente
        readOnly={Boolean(data)} // Hace el campo solo lectura si data está presente
        value={data ? data : ""} // Muestra data si está presente
      ></textarea>
    </div>
  );
};

export default TextAreaField;