import 'dotenv/config';


const accountSid = process.env.ACCOUNT_SID; 
const authToken = process.env.AUTH_TOKEN; 
const client = require('twilio')(accountSid, authToken);

 
class sms {
    static async sms(req, res) {
        try{
        const {to, from,  body} = req.body;

        console.log('message', body)

    client.messages 
      .create({  
         from: from,       
         to: to,
         body: body
       }) 
      .then(message => res.status(201).json({
          status: 201,
          message
      })) 
      .done();
        }catch(err){
            console.log('err from twilio', err);
        }

    }
}

module.exports= sms;