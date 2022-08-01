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
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode);

          // ..
        });

    })

}