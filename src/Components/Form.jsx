import { useState } from 'react';
import '../index.css'

//Aqui deberan implementar el form completo con sus validaciones


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Nombre es requerido.";
    if (!formData.email) tempErrors.email = "Correo electrónico es requerido.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Correo electrónico no es válido.";
    if (!formData.message) tempErrors.message = "Mensaje es requerido.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Formulario enviado:', formData);
      setSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Introduce tu nombre"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Introduce tu correo electrónico"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          placeholder="Introduce tu mensaje"
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <button type="submit" className="submit-button">Enviar</button>
      {submitted && (
        <h2 className="success-message">
          Gracias por contactarnos, resolveremos tus inquietudes vía email.
        </h2>
      )}
    </form>
  );
};

export default Form;
