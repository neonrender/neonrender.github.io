const {https} = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.login = https.onRequest((request, response) => {
switch (request.method) {
 case 'POST':
  var auth = admin.database().ref('auth');
  auth.orderByValue().once("value", function(data) {


   try{

    assert(data.val().username.toString().trim(),request.body.username.toString().trim());
    assert(data.val().password.toString().trim(),request.body.password.toString().trim());

    response.send('login successful');
   }catch (e) {
    response.send('invalid username or password')
   }

  });
  break;
 default:
  response.send(notFound());
  break;
}
});

notFound=()=>'404 not found';