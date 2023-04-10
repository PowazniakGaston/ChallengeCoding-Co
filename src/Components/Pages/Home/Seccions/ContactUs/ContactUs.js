import React from "react";
import "./styles/contactUs.css";
import { useForm } from "react-hook-form";

// import images
import Bear from "../../../../../Assets/img/bear-misc.svg";

export default function ContactUs() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    };

  return (
    <div className="contact-us-container">
      <div className="contact-us-inner-container">
        <div className="contact-box-centered"> 
        <div className="contact-us-col">
          <h5>#Sosloquehacés</h5>
          <img src={Bear} alt="bear image" />
        </div>
        <div className="contact-us-col">
          <form className="contact-us-form" onSubmit={handleSubmit(onSubmit)}>
            <p className="form-title">
              ¿Quieres saber más sobre nuestros cursos?
            </p>
            <p className="form-sub-text">Completá este formulario</p>
            <div className="form-row">
              <label htmlFor="nombre">Nombre*</label>
              <input placeholder="Escribe tu nombre" {...register("nombre")} />
            </div>
            <div className="form-row">
              <label htmlFor="telefono">Teléfono*</label>
              <input placeholder="612 27 84 09" {...register("telefono")} />
            </div>
            <div className="form-row">
              <label htmlFor="E-mail">E-mail*</label>
              <input placeholder="Escribe tu correo electrónico" {...register("email")} />
            </div>
            <div className="form-row">
                <label htmlFor="curso">Curso de interés</label>
                <select {...register("curso")}>
                    <option value="Curso de creatividad">Curso de creatividad</option>
                    <option value="Planificación y Estrategia">Planificación y Estrategia</option>
                    <option value="PR & Comunicación">PR & Comunicación</option>
                    <option value="Digital y social media">Digital y social media</option>
                </select>
            </div>
            <div className="form-row">
              <label htmlFor="mensaje">Mensaje</label>
              <input placeholder="Escribe un mensaje adicional" {...register("mensaje")} />
            </div>
            <p className="form-required-text">*datos obligatorios</p>
            <input className="submit-button" type="submit" />
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
