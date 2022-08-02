import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";


export const LoginAPI = (data) => {
    console.log(data);
    return new Promise ((resolve , reject) =>{

        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);


          onAuthStateChanged(auth, (user) => {
            if (user) {
         
             sendEmailVerification(user);
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
          // ...
        })

        .then((emailafterverify) => {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              if (user.emailVerified) {
                console.log("Email Successfull");
              }else{
                console.log("Please Enter Verify Email");
              }
            } else {
              console.log("somthing went wrong");
            }
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode.localeCompare("auth/email-already-in-use")=== 0) {
            console.log("Email Is Already registered");
          }
          else{

            console.log(errorCode);
          }


          // ..
        });

    })

}