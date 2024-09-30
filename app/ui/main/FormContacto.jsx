"use client";
import { useState, useEffect } from "react";

export default function FormContacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    fechaEvento: "",
    tipo_evento: "",
    paquete: "",
    asunto: "",
  });

  const [errors, setErrors] = useState({});
  const [id_paquete, setIdPaquete] = useState(0);
  const [id_asunto, setIdAsunto] = useState(0);
  const [id_tipo_evento, setIdTipoEvento] = useState(0);

  useEffect(() => {
    const id_paquete = Number(sessionStorage.getItem("id_paquete" || 0));
    const id_asunto = Number(sessionStorage.getItem("id_asunto" || 0));
    const id_tipo_evento = Number(
      sessionStorage.getItem("id_tipo_evento" || 0)
    );

    setIdPaquete(id_paquete);
    setIdAsunto(id_asunto);
    setIdTipoEvento(id_tipo_evento);

    setFormData((prevData) => ({
      ...prevData,
      paquete: id_paquete ? id_paquete.toString() : "",
      asunto: id_asunto ? id_asunto.toString() : "",
      tipo_evento: id_tipo_evento ? id_tipo_evento.toString() : "",
    }));
  }, []);

  const paquetes = [
    { label: "Básico", value: 1 },
    { label: "Estándar", value: 2 },
    { label: "Todo incluido", value: 3 },
    { label: "Promoción", value: 4 },
    { label: "Personalizado", value: 5 },
  ];

  const tipos_eventos = [
    { label: "Boda", value: 1 },
    { label: "XV Años", value: 2 },
    { label: "Bautizo", value: 3 },
    { label: "Aniversario", value: 4 },
    { label: "Empresarial", value: 5 },
    { label: "Otro", value: 6 },
  ];

  const asuntos = [
    { label: "Reunión virtual", value: 1 },
    { label: "Contratación", value: 2 },
    { label: "Cotización personalizada", value: 3 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.fechaEvento)
      newErrors.fechaEvento = "La fecha del evento es obligatoria";
    if (!formData.tipo_evento)
      newErrors.tipo_evento = "El tipo de evento es requerido";
    if (!formData.paquete) newErrors.paquete = "El paquete es requerido";
    if (!formData.asunto) newErrors.asunto = "El asunto es requerido";
    return newErrors;
  };

  const handleSubmit = (e, action) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const paqueteLabel = paquetes.find(
      (p) => p.value === parseInt(formData.paquete)
    )?.label;

    const asuntoLabel = asuntos.find(
      (a) => a.value === parseInt(formData.asunto)
    )?.label;

    const tipoEventoLabel = tipos_eventos.find(
      (t) => t.value === parseInt(formData.tipo_evento)
    )?.label;

    if (action === "whatsapp") {
      const whatsappMessage = `Hola, me gustaría obtener más información. Aquí están mis datos:
      \nAsunto: ${asuntoLabel}
      \nNombre: ${formData.nombre}
      \nFecha del evento: ${formData.fechaEvento}\n
      Tipo de evento: ${tipoEventoLabel}\n
      Paquete: ${paqueteLabel}`;
      window.open(
        `https://wa.me/5544546582?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      );
    } else if (action === "call") {
      window.open("tel:+525544546582", "_blank");
    }
  };

  return (
    <div className="mx-auto max-w-screen-md px-8">
      <form onSubmit={(e) => handleSubmit(e, "submit")}>
        <div className="my-5">
          <label
            htmlFor="txt_nombre"
            className="block text-md font-medium text-white pb-2"
          >
            * Nombre del interesado
          </label>
          <input
            type="text"
            id="txt_nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`bg-gray-700 w-full p-2 border ${
              errors.nombre ? "border-red-500" : "border-gray-500"
            } rounded`}
          />
          {errors.nombre && (
            <div className="text-red-500 text-sm mt-1">{errors.nombre}</div>
          )}
        </div>

        <div className="my-5">
          <label
            htmlFor="txt_fecha_evento"
            className="block text-left text-white mb-2"
          >
            * Fecha de tu evento
          </label>
          <input
            type="date"
            id="txt_fecha_evento"
            name="fechaEvento"
            value={formData.fechaEvento}
            onChange={handleChange}
            className="bg-gray-700 w-full p-2 border border-gray-500 rounded"
          />
          {errors.fechaEvento && (
            <div className="text-red-500 text-sm mt-1">
              {errors.fechaEvento}
            </div>
          )}
        </div>

        <div className="my-5">
          <label
            htmlFor="dropdown_tipo_evento"
            className="block text-md font-medium text-white pb-2"
          >
            * Tipo de evento
          </label>
          <select
            id="dropdown_tipo_evento"
            name="tipo_evento"
            value={formData.tipo_evento}
            onChange={handleChange}
            className={`bg-gray-700 w-full p-2 border ${
              errors.tipo_evento ? "border-red-500" : "border-gray-500"
            } rounded`}
          >
            <option value="">Selecciona el tipo de evento</option>
            {tipos_eventos.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
          {errors.tipo_evento && (
            <div className="text-red-500 text-sm mt-1">
              {errors.tipo_evento}
            </div>
          )}
        </div>

        <div className="my-5">
          <label
            htmlFor="dropdown_paquete"
            className="block text-md font-medium text-white pb-2"
          >
            * Paquete de tu interés
          </label>
          <select
            id="dropdown_paquete"
            name="paquete"
            value={formData.paquete}
            onChange={handleChange}
            className={`bg-gray-700 w-full p-2 border ${
              errors.paquete ? "border-red-500" : "border-gray-500"
            } rounded`}
          >
            <option value="">Selecciona un paquete</option>
            {paquetes.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
          {errors.paquete && (
            <div className="text-red-500 text-sm mt-1">{errors.paquete}</div>
          )}
        </div>

        <div className="my-5">
          <label
            htmlFor="dropdown_asunto"
            className="block text-md font-medium text-white pb-2"
          >
            * Asunto
          </label>
          <select
            id="dropdown_asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            className={`bg-gray-700 w-full p-2 border ${
              errors.asunto ? "border-red-500" : "border-gray-500"
            } rounded`}
          >
            <option value="">Selecciona un asunto</option>
            {asuntos.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
          {errors.asunto && (
            <div className="text-red-500 text-sm mt-1">{errors.asunto}</div>
          )}
        </div>

        <div className="grid-flow-row justify-center space-y-4 pt-5">
          <button
            type="button"
            className="p-3 bg-purple-700 text-white rounded-full w-full"
            onClick={(e) => handleSubmit(e, "whatsapp")}
          >
            Enviar mensaje de whatsapp
          </button>
        </div>
      </form>
    </div>
  );
}
