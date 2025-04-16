// import React from "react";
// import { useState, useEffect } from "react";
// // form spree
// import { useForm, ValidationError } from "@formspree/react";
// import AnimatedText from "./AnimatedText";
// import Image from "next/image";
// import { FaCheckCircle } from "react-icons/fa";
// import { Phone } from "lucide-react";

// const Contact = () => {
//   const [state, handleSubmit] = useForm("mkgornvw");

//   //state for form inputs
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   //state to control icon visibimity and button text
//   const [showIcon, setShowIcon] = useState(false);
//   // handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   //clear the form after submission and handle message visibility
//   useEffect(() => {
//     if (state.succeeded) {
//       setShowIcon(true); //show the succes icon
//       //clear for the inputs
//       setFormData({
//         firstname: "",
//         lastname: "",
//         email: "",
//         phone: "",
//         message: "",
//       });
//       // hide the icon and revert button text after 3 secondes
//       const timer = setTimeout(() => {
//         setShowIcon(false);
//       }, 3000);
//       //clean up the timer on component unmount or before re-running effect
//       return () => clearTimeout(timer);
//     }
//   }, [state.succeeded]);

//   // handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     handleSubmit(e); //call formspree's submit handler with formData
//   };

//   return (
//     <section className="pt-8 xl:pt-12 pb-32" id="contact">
//       <div className="container mx-auto">
//         <div className="flex flex-col items-center xl:flex-row gap-16">
//           <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
//             <AnimatedText
//               text="Envie d'en savoir plus, laisse moi un message !"
//               textStyles="h2 mb-12 text-center xl:text-left"
//             />
//             {/**form */}
//             <form
//               onSubmit={handleFormSubmit}
//               className="flex flex-col gap-6 w-full max-w-[480px]"
//             >
//               {/** Firstname & lastname fields */}
//               <div className="flex gap-8">
//                 <div className="flex-1 ">
//                   <label
//                     htmlFor="firstname"
//                     className="block mb-2 text-sm font-medium text-primary"
//                   >
//                     Prénom
//                     <span className="text-accent">*</span>
//                   </label>
//                   <input
//                     onChange={handleChange}
//                     type="text"
//                     id="firstname"
//                     name="firstname"
//                     value={formData.firstname}
//                     className="input"
//                     placeholder="Prénom"
//                     required
//                   />
//                 </div>
//                 <div className="flex-1 ">
//                   <label
//                     htmlFor="lastname"
//                     className="block mb-2 text-sm font-medium text-primary"
//                   >
//                     Nom
//                     <span className="text-accent">*</span>
//                   </label>
//                   <input
//                     onChange={handleChange}
//                     type="text"
//                     id="lastname"
//                     name="lastname"
//                     value={formData.lastname}
//                     className="input"
//                     placeholder="Nom"
//                     required
//                   />
//                 </div>
//               </div>
//               {/** email field */}
//               <div>
//                 <div className="flex-1 ">
//                   <label
//                     htmlFor="email"
//                     className="block mb-2 text-sm font-medium text-primary"
//                   >
//                     Email
//                     <span className="text-accent">*</span>
//                   </label>
//                   <input
//                     onChange={handleChange}
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     className="input"
//                     placeholder="VotreEmail@mail.com"
//                     required
//                   />
//                   <ValidationError
//                     prefix="Email"
//                     field="email"
//                     errors={state.errors}
//                   />
//                 </div>
//               </div>
//               {/** phone field */}
//               <div>
//                 <div className="flex-1 ">
//                   <label
//                     htmlFor="phone"
//                     className="block mb-2 text-sm font-medium text-primary"
//                   >
//                     Téléphone
//                     <span className="text-accent">*</span>
//                   </label>
//                   <input
//                     onChange={handleChange}
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     className="input"
//                     placeholder="+33 xx xx xx xx xx"
//                   />
//                 </div>
//               </div>
//               {/** message field */}
//               <div>
//                 <div className="flex-1">
//                   <label
//                     htmlFor="message"
//                     className="block mb-2 text-sm font-medium text-primary"
//                   >
//                     Message
//                     <span className="text-accent">*</span>
//                   </label>
//                   <textarea
//                     onChange={handleChange}
//                     type="text"
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     className="textarea"
//                     placeholder="Votre message ..."
//                     rows="5"
//                     required
//                   />
//                   <ValidationError
//                     prefix="Message"
//                     field="message"
//                     errors={state.errors}
//                   />
//                 </div>
//               </div>

//               {/**submit button */}
//               <button
//                 type="submit"
//                 disabled={state.submitting}
//                 className="btn btn-accent flex items-center justify-center gap-2"
//               >
//                 {state.submitting ? (
//                   <span> Envoie en cours...</span>
//                 ) : (
//                   <>
//                     {/** Show icon with opacity transition*/}
//                     <FaCheckCircle
//                       className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out 
//                     ${showIcon ? "opacity-100" : "opacity-0"}`}
//                     />
//                     <span
//                       className={`transition-opacity duration-500 ease-in-out ${
//                         showIcon ? "opacity-0" : "opacity-100"
//                       }`}
//                     >
//                       Envoyer votre message
//                     </span>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//           {/**Image Background*/}
//           <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
//             <Image
//               src="/assets/contact/img.jpg"
//               className="object-cover"
//               fill
//               quality={100}
//               alt="alt"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
// import ReCAPTCHA from "react-google-recaptcha"; // Décommente si tu veux activer reCAPTCHA

const Contact = () => {
  const [state, handleSubmit] = useForm("mkgornvw");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showIcon, setShowIcon] = useState(false);

  // Pour reCAPTCHA (optionnel)
  // const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
      const timer = setTimeout(() => setShowIcon(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Pour reCAPTCHA (optionnel)
    // if (!recaptchaToken) {
    //   alert("Veuillez valider le reCAPTCHA !");
    //   return;
    // }
    // const form = e.target;
    // const data = new FormData(form);
    // data.append("g-recaptcha-response", recaptchaToken);
    // handleSubmit(data);

    handleSubmit(e); // Version sans reCAPTCHA
  };

  return (
    <section className="pt-8 xl:pt-12 pb-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-16">
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
            <AnimatedText
              text="Envie d'en savoir plus, laisse moi un message !"
              textStyles="h2 mb-12 text-center xl:text-left"
            />
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-6 w-full max-w-[480px]"
            >
              {/* Prénom & Nom */}
              <div className="flex gap-8">
                <div className="flex-1 ">
                  <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-primary">
                    Prénom <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    className="input"
                    placeholder="Prénom"
                    required
                  />
                </div>
                <div className="flex-1 ">
                  <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-primary">
                    Nom <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    className="input"
                    placeholder="Nom"
                    required
                  />
                </div>
              </div>
              {/* Email */}
              <div>
                <div className="flex-1 ">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    className="input"
                    placeholder="VotreEmail@mail.com"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>
              {/* Téléphone */}
              <div>
                <div className="flex-1 ">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-primary">
                    Téléphone <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    className="input"
                    placeholder="+33 xx xx xx xx xx"
                  />
                </div>
              </div>
              {/* Message */}
              <div>
                <div className="flex-1">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    onChange={handleChange}
                    id="message"
                    name="message"
                    value={formData.message}
                    className="textarea"
                    placeholder="Votre message ..."
                    rows="5"
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
              </div>

              {/* Champ honeypot caché */}
              <input
                type="text"
                name="website"
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              {/* reCAPTCHA (optionnel) */}
              {/*
              <ReCAPTCHA
                sitekey="VOTRE_SITE_KEY_RECAPTCHA"
                onChange={token => setRecaptchaToken(token)}
              />
              */}

              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={state.submitting}
                className="btn btn-accent flex items-center justify-center gap-2"
              >
                {state.submitting ? (
                  <span> Envoie en cours...</span>
                ) : (
                  <>
                    <FaCheckCircle
                      className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out 
                    ${showIcon ? "opacity-100" : "opacity-0"}`}
                    />
                    <span
                      className={`transition-opacity duration-500 ease-in-out ${
                        showIcon ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Envoyer votre message
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
          {/* Image de fond */}
          <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
            <Image
              src="/assets/contact/img.jpg"
              className="object-cover"
              fill
              quality={100}
              alt="alt"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
