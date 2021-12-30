import styles from "../styles/ContactContent.module.css";

import Link from "next/link";
import { useState } from "react";
import {server} from "../config";

const ProjetContent= ()=>{
    const [name,set_name]=useState("");
    const [email,set_email]=useState("");
    const [message,set_message]=useState("");

    const send_message=async (e)=>{
        if(name===""){
            alert("The name is required");
            return;
        }
        if(email===""){
            alert("The email is required");
            return;
        }
        if(message===""){
            alert("The message is required");
        }
        const btn=e.target;
        btn.disabled=true;
        btn.innerText="Please wait...";
        console.log(`${server}/api/contact`);

        const req=await fetch(`${server}/api/contact`,{
            method:"POST",
            body:JSON.stringify({name,email,message}),
            headers:{
                "Content-Type":"application/json"
            }
        })

        const res=await req.text();
        console.log("the result is ",res)
        btn.disabled=false;
        btn.innerText="Send";
        set_name("");
        set_email("");
        set_message("");
       alert("Your message is sent successfuly");

    }

    return (
        <div className={styles.container}>
           
               <h2>Contacts Me</h2>
               <div className={styles.form_line}>
                   <label>Full Name</label>
                   <input type="text" value={name} onChange={e=>set_name(e.target.value)} />
               </div>
               <div  className={styles.form_line}>
                   <label>Email</label>
                   <input type="email" value={email} onChange={e=>set_email(e.target.value)} />
               </div>
               <div  className={styles.form_line}> 
                   <label>Message</label>
                   <textarea placeholder="Type your message" value={message} onChange={e=>set_message(e.target.value)}></textarea>
               </div>

               <div className={styles.form_line2}>
                   <button onClick={send_message}>Send</button>
               </div>
           
        </div>
    );
}
export default ProjetContent;