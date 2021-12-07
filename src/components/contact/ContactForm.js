import { Formik, Form, Field, ErrorMessage } from "formik";
import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection } from "@firebase/firestore";
import { useState } from "react";
import { ThemeContext } from "../../context/themeContext/ThemeContext";
import { useEffect, useContext } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import SocialMedia from "../socialMedia/SocialMedia";

const ContactForm = () => {

    const [sentForm, setSentForm] = useState(false);
    const [messageId, setMessageId] = useState();

    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    
    const { toggle } = useContext(ThemeContext);
    const colRef = collection(db, 'mensajes')   



    return (  
        
        <div className="contactContainer__form" data-aos="flip-left">
                        <h1>CONTACTO</h1>
                        <hr/>
                        <SocialMedia />
                        <hr/>
            <h4>
                Si desea contactarme para colaborar en un proyecto o por alguna otra razón puede ponerse en contacto completando el formulario
            </h4>
            <div className="inputContainer">
            <Formik
                validateOnMount
                initialValues={{
                    nombre: '',
                    celular: '',
                    correo: '',
                    mensaje:''
                }}
                validate={(valores) => {
                    let errores = {}
                    if (!valores.nombre) {
                        errores.nombre = 'Por favor ingresa un nombre.'
                    }
                    else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'El nombre solo puede contener letras y espacios.'
                    }

                    if (!valores.correo) {
                        errores.correo = ' Por favor ingresa un correo electrónico.'
                    }
                    else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = 'El correo solo puede contener letras, números, puntos, guiones y guión bajo.'
                    }

                    if (!valores.celular) {
                        errores.celular = 'Por favor ingresa un celular.'
                    }
                    else if (!/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/.test(valores.celular)) {
                        errores.celular = 'Ingresa un celular válido.'
                    }

                    if (!valores.mensaje) {
                        errores.mensaje = 'Por favor escribe tu mensaje.'
                    }
                   

                    return errores
                }}
                onSubmit={(valores, {resetForm}) => {

                    let date = new Date();
                    let currentDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();

                    const selfGeneratedMessage = {
                        client: {
                            nombre: valores.nombre,
                            phone: valores.celular,
                            email: valores.correo,
                            message: valores.mensaje
                        },
                        date: currentDate,
                    };


                  const postMessage = async() => {
                      try {
                          const datos = await addDoc(colRef,{selfGeneratedMessage});
                      setMessageId(datos.id)
                      setSentForm(true)
                      }
                      catch (error){
                        console.error("Error enviando el documento: " + error)
                      }
                  }
                  resetForm()
                  postMessage()
                  setTimeout(() => setSentForm(false), 15000)

                }}
                >
                    {({ errors, isValid }) => ( 
                    <Form>
                    <div className="inputContainer__each">
                                <label htmlFor="nombre">Nombre </label>
                                <Field
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    autofocus={true}
                                />
                            </div>
                            <ErrorMessage name="nombre" component={() => (
                                <div className="inputContainer__each--error">{errors.nombre}</div>
                            )} />

                            <div className="inputContainer__each">
                                <label htmlFor="correo">Mail</label>
                                <Field
                                    type="email"
                                    name="correo"
                                    id="correo"
                                />
                            </div>
                            <ErrorMessage name="correo" component={() => (
                                <div className="inputContainer__each--error">{errors.correo}</div>
                            )} />
                            <div className="inputContainer__each">
                                <label htmlFor="celular">Celular</label>
                                <Field
                                    type="text"
                                    name="celular"
                                    id="celular"
                                />
                            </div>
                            <ErrorMessage name="celular" component={() => (
                                <div className="inputContainer__each--error">{errors.celular}</div>
                            )} />
                            <div className="inputContainer__each">
                                <label htmlFor="Description">Mensaje</label>
                                <Field
                                    type="textarea"
                                    name="mensaje"
                                    id="mensaje"
                                    maxLength="100"
                                />
                            </div>
                            <ErrorMessage name="mensaje" component={() => (
                                <div className="inputContainer__each--error">{errors.mensaje}</div>
                            )} />
                            {isValid? (<button className={toggle?"inputContainer__buttonIsDark":"inputContainer__button"} type="submit">Enviar mail</button>) : (<button className={toggle? "inputContainer__button--disabled": "inputContainer__buttonIsDark--disabled"} type="submit" >Enviar mensaje</button>)}
                            {sentForm ?
                                <div className="inputContainer__successAlert">Recibí tu mensaje con éxito con el código {messageId}!</div>
                                :
                                <>
                                </>
                            }
                    </Form>
                    )}
                </Formik>
                </div>
        </div>

    );
}
 
export default ContactForm;