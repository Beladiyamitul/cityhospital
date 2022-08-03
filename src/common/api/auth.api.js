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
              resolve({payload: "Email Successfull"});
              }else{
                resolve({payload:"Please Enter Verify Email"});
              }
            } else {
              reject({payload: "somthing went wrong"});
            }
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode.localeCompare("auth/email-already-in-use")=== 0) {
            reject({payload: "Email Is Already registered"});
          }
          else{

            reject({payload: errorCode});
          }


          // ..
        });

    })

}