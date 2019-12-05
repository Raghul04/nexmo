
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '6cd2b74c',
  apiSecret: 'HfeJ4VERcIR4M9xF'
});

nexmo.message.sendSms(
  '12012791252', '917598412387', 'yo',
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
		  console.log("here")
        console.dir(responseData);
      }
    }
 );

