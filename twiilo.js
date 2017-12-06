const client = require('twilio')(
    'AC29570f44a0080bc25e643c231478045f',
    'f5e380296ed0fdbb4139147840dfc8a3';
  );
  
  client.messages.create({
    from: '+14245433073',
    to: '+14158667411',
    body: 'New Password is...'
  }).then((messsage) => console.log(message.sid));