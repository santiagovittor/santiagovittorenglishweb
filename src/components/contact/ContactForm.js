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
        
        <div className="contactContainer__form" data-aos="fade-down">
                        <h1>CONTACT ME</h1>
                        <SocialMedia />
            <h4>
            If you would like to contact me to collaborate on a project or for any other reason, please reach out by completing the form
            </h4>
            <div className="inputContainer">
            <Formik
                validateOnMount
                initialValues={{
                    name: '',
                    phone: '',
                    mail: '',
                    message:''
                }}
                validate={(valores) => {
                    let errores = {}
                    if (!valores.nombre) {
                        errores.nombre = 'Please add a name.'
                    }
                    else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'Name can only contain letters and spaces.'
                    }

                    if (!valores.correo) {
                        errores.correo = ' Please add an e-mail.'
                    }
                    else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = 'E-mail can only contain letters, numbers, dots and slashes.'
                    }

                    if (!valores.celular) {
                        errores.celular = 'Please add a cell phone.'
                    }
                    else if (!/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/.test(valores.celular)) {
                        errores.celular = 'Please add a valid cell phone.'
                    }

                    if (!valores.mensaje) {
                        errores.mensaje = 'Please write a message.'
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
                        console.error("Error sending the document: " + error)
                      }
                  }
                  resetForm()
                  postMessage()
                  setTimeout(() => setSentForm(false), 15000)

                }}
                >
                    {({ errors, isValid }) => ( 
                    <Form>
                    <div className={toggle? "inputContainer__each" : "inputContainer__each--isDark"}>
                                <label htmlFor="nombre">Name </label>
                                <Field
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                />
                            </div>
                            <ErrorMessage name="nombre" component={() => (
                                <div className="inputContainer__each--error">{errors.nombre}</div>
                            )} />

                            <div className={toggle? "inputContainer__each" : "inputContainer__each--isDark"}>
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
                            <div className={toggle? "inputContainer__each" : "inputContainer__each--isDark"}>
                                <label htmlFor="celular">Phone</label>
                                <Field
                                    type="text"
                                    name="celular"
                                    id="celular"
                                />
                            </div>
                            <ErrorMessage name="celular" component={() => (
                                <div className="inputContainer__each--error">{errors.celular}</div>
                            )} />
                            <div className={toggle? "inputContainer__each" : "inputContainer__each--isDark"}>
                                <label htmlFor="Description">Message</label>
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
                            {isValid? (<button className={toggle?"inputContainer__buttonIsDark":"inputContainer__button"} type="submit">Enviar mensaje</button>) : (<button className={toggle? "inputContainer__button--disabled": "inputContainer__buttonIsDark--disabled"} type="submit" >Enviar mensaje</button>)}
                            {sentForm ?
                                <div className="inputContainer__successAlert">I succesfully received your message with ID {messageId}!</div>
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