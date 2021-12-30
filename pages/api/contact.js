import firebase from "firebase";
import {db} from "../../connexion_firebase";

const send_message=  (req,res)=>{
    const {name,email,message}=req.body;

      
    db
     .collection("messages")
     .add({name,email,message,date:firebase.firestore.FieldValue.serverTimestamp()})
     .then((r)=>{
      res.status(200).send("OK")
     })
     .catch((err)=>{
      res.status(404).send("erreur",err.message);
     });
     
    


    
}

export default send_message;