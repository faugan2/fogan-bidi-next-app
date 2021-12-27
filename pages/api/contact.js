const send_message=(req,res)=>{
    const {name,email,message}=req.body;

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'foganbidi2@gmail.com',
          pass: 'faugan2000@@@@@!',
        },
        secure: true,
      })

      const mailData = {
        from: email,
        to: 'foganbidi2@gmail.com',
        subject: `Message From ${name}`,
        text: message,
        html: <div>{message}</div>
       }

       transporter.sendMail(mailData, function (err, info) {
        if(err){
            console.log("erreur",err)
            res.status(404);
        }
        else{
            res.status(200);
            console.log("ok for sending",info)
        }
      })
    
    res.json({message:"ok"});
}

export default send_message;