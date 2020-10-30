import 'dotenv/config';


const accountSid = process.env.ACCOUNT_SID; 
const authToken = process.env.AUTH_TOKEN; 
const client = require('twilio')(accountSid, authToken);

 
class sms {
    static async sms(req, res) {
        try{
        const {phone, message} = req.body;

    client.messages 
      .create({  
         from: '+12013836815',       
         to: phone,
         body: message
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