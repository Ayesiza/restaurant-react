import React, { useRef, useState } from 'react'
import './register.css'
import emailjs from 'emailjs-com';

function Register() {
    const formRef= useRef();
    const [done, setDone] = useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_9k6epms', 'template_braozdc', formRef.current, 'user_m3cQzONBSi2qJo5DtziUP')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
    
    return (
        <div className="register">
           <div className="register-wrapper">
        <form ref={formRef} onSubmit={handleSubmit}>
              <h2>Email Us</h2>
               <input type="text" placeholder="UserName" name="user_name"  />
               <input type="text" placeholder="Subject" name="user_subject"  />
                 <input type="email" placeholder="Email" name="user_email"/>
               <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
               <button>Submit</button>
               {done && "Thank you"}
            </form>
            </div> 
        </div>
    )
}

export default Register
