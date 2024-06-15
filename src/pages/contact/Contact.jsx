// import React, { useRef } from 'react'
// import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
// import { FiSend } from 'react-icons/fi'
// import "./contact.css"
// import  emailjs from '@emailjs/browser'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const Contact = () => {


//   const form=useRef();

//   const sendEmail=(e)=>{
//     e.preventDefault();

//     emailjs.sendForm('service_tknehyd' , 'template_n91c9y6' ,form.current , 'xmI3cYGLclCS-7_-C')

//     .then(() => {
//       // Reset form fields after successful submission
//       form.current.reset();
//     })
//     .catch((error) => {
//       console.error('Error sending email:', error);
//     });
//   }

//   const notify=()=>{
//     toast("Email Send Successfully")
//   }
//   return (
//     <section className="contact section">
//       <h2 className="section_title">
//         Get In <span>Touch</span>
//       </h2>

//       <div className="contact_container container grid">
//         <div className="contact_data">
//           <h3 className="contact_title">Don't be Shy</h3>
//           <p className="contact_description">
//             Feel free to get in touch with me. I am always open to discussing
//             new projects, creative ideas or opportunities to be part of your visions.
//           </p>
//           <div className="contact_info">
//             <div className="info_item">
//               <FaEnvelopeOpen className='info_icon' />


//               <div>
//                 <span className="info_title">Mail me</span>
//                 <h4 className="info_desc">meenakshisundaram212000@gmail.com</h4>
//               </div>
//             </div>
//             <div className="info_item">
//               <FaPhoneSquareAlt className='info_icon' />


//               <div>
//                 <span className="info_title">Call me</span>
//                 <h4 className="info_desc">9566404125</h4>
//               </div>
//             </div>

//           </div>
//           <div className="contact_socials">
//             <a href="https://facebook.com" className="contact_social-link"> <FaFacebookF/></a>
//             <a href="https://twitter.com" className="contact_social-link"> <FaTwitter/></a>
//             <a href="https://youtube.com" className="contact_social-link"> <FaYoutube/></a>
//             <a href="https://linkedin.com" className="contact_social-link"> <FaLinkedin/></a>
//           </div>

       
//         </div>
//         <form  className="contact_form" ref={form} onSubmit={sendEmail}>
//             <div className="form_input-group">
//               <div className="form_input-div">
//                 <input type="text" placeholder='Your Name' name='from_name' className="form_control" />
//               </div>
//               <div className="form_input-div">
//                 <input type="email" placeholder='Your Email' name='from_email' className="form_control" />
//               </div>
//               <div className="form_input-div">
//                 <input type="text" placeholder='Your Subject'name='from_subject' className="form_control" />
//               </div>
//             </div>

//             <div className="form_input-div">
//                <textarea placeholder='Your Message' name='message' className="form_control textarea"></textarea>
//               </div>
//               <button className="button" onClick={notify}>Send Message <span className="button_icon contact_button-icon"><FiSend/></span></button>
//               <ToastContainer/>
//           </form>
//       </div>

//     </section>
//   )
// }

// export default Contact

// ---------------------------------------------------------------------------



import React, { useRef, useState } from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css";
import emailjs from '@emailjs/browser';
import parse from 'html-react-parser'

const Contact = () => {
  const formRef = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const formData = new FormData(formRef.current);
    
    if (!formData.get('from_name')) {
      errors.from_name = parse('<span className="require">Name is required</span>');
    }

    if (!formData.get('from_email')) {
      errors.from_email =  parse('<span className="require">Email is required</span>');
    } else if (!isValidEmail(formData.get('from_email'))) {
      errors.from_email = parse('<span className="require">Invalid Email Format</span>');
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs.sendForm('service_tknehyd', 'template_n91c9y6', formRef.current, 'xmI3cYGLclCS-7_-C')
      .then(() => {
        formRef.current.reset();
        toast.success("Message sent successfully");
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error("Failed to send message");
      });
  };

  return (
    <section className="contact section">
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className="contact_title">Don't be Shy</h3>
          <p className="contact_description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen className='info_icon' />
              <div>
                <span className="info_title">Mail me</span>
                <h4 className="info_desc">meenakshisundaram212000@gmail.com</h4>
              </div>
            </div>
            <div className="info_item">
              <FaPhoneSquareAlt className='info_icon' />
              <div>
                <span className="info_title">Call me</span>
                <h4 className="info_desc">9566404125</h4>
              </div>
            </div>
          </div>
          <div className="contact_socials">
            {/* <a href="https://facebook.com" className="contact_social-link"> <FaFacebookF/></a>
            <a href="https://twitter.com" className="contact_social-link"> <FaTwitter/></a> */}
            <a href="https://github.com/Sundar429" className="contact_social-link"> <FaGithub/></a>
            <a href="https://www.linkedin.com/in/meenakshi-sundaram-m-1473b2195" className="contact_social-link"> <FaLinkedin/></a>
          </div>
        </div>
        <form className="contact_form" ref={formRef} onSubmit={sendEmail}>
          <div className="form_input-group">
            <div className="form_input-div">
              <input type="text" placeholder='Your Name' name='from_name' className="form_control" />
              {errors.from_name && <span className="error">{errors.from_name}</span>}
            </div>
            <div className="form_input-div">
              <input type="email" placeholder='Your Email' name='from_email' className="form_control" />
              {errors.from_email && <span className="error">{errors.from_email}</span>}
            </div>
            <div className="form_input-div">
              <input type="text" placeholder='Your Subject' name='from_subject' className="form_control" required />
            </div>
          </div>
          <div className="form_input-div">
            <textarea placeholder='Your Message' name='message' className="form_control textarea" required></textarea>
          </div>
          <button type="submit" className="button">Send Message <span className="button_icon contact_button-icon"><FiSend/></span></button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
