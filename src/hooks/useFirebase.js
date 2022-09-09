import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updatePassword, sendEmailVerification, updateProfile, } from "firebase/auth";
import { useEffect } from "react";

initializeAuthentication(); 
 
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
 
    const signInUsingGoogle = () =>{
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
      .then((result) => {
          setUser(result.user);
      }).catch((error) => {
          // Handle Errors here.
          setError(error.code);
          setError(error.message);
          // The email of the user's account used.
          setError(error.customData.email);
          // The AuthCredential type that was used.
          setError(GoogleAuthProvider.credentialFromError(error));
      }).finally(() =>{
        setIsLoading(false);
      });
    }

    const signInUsingGithub = () =>{
      setIsLoading(true);
      signInWithPopup(auth, gitProvider)
      .then((result) => {
        // The signed-in user info.
        setUser(result.user);
      }).catch((error) => {
        // Handle Errors here.
        setError(error.code);
        setError(error.message);
        // The email of the user's account used.
        setError(error.customData.email);
        // The AuthCredential type that was used.
        setError(GithubAuthProvider.credentialFromError(error));
      }).finally(()=>{
        setIsLoading(false);
      });
    };

    const signInUsingFacebook = () =>{
      setIsLoading(true);
      signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        setError(error.code);
        setError(error.message);
        // The email of the user's account used.
        setError(error.customData.email);
        // The AuthCredential type that was used.
        setError(FacebookAuthProvider.credentialFromError(error));
      }).finally(()=>{
        setIsLoading(false);
      });
    };

    const signInUsingTwitter = () =>{
      console.log('Twitter login coming soon...');
      alert('Twitter Login will be added later...');
    };

    const customLogin = (email, password) =>{
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        setUser(userCredential.user);
      })
      .catch((error) => {
        setError(error.code);
        setError(error.message);
      }).finally(()=>{
        setIsLoading(false);
      });
    };

    const customRegister = (email, password) =>{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
      })
      .catch((error) => {
        setError(error.code);
        setError(error.message);
      });
    };

    const handleLoginSubmitBtn = e =>{
      e.preventDefault();
      // console.log(email, password);
      customLogin(email, password);
    }

    const handleRegisterSubmitBtn = e =>{
      e.preventDefault();
      // console.log(email, password);

      if(!/.{8,}/.test(password)){
        setError('Ensure password is of minimum length 8');
        return;
      }
      if(!/(?=.*[A-Z])/.test(password)){
        setError('Ensure password has minimum one uppercase letters');
        return;
      }
      if(!/(?=.*[!@#$%^&*()\-__+.])/.test(password)){
        setError('Ensure password has minimum one special case letter');
        return;
      }
      if(!/(?=.*[0-9])/.test(password)){
        setError('Ensure password has minimum one digits');
        return;
      }
      if(!/(?=.*[a-z])/.test(password)){
        setError('Ensure password has minimum one lowercase letters');
        return;
      }
      customRegister(email, password);
    }

    const handleNameChange = e =>{
      setName(e.target.value);
    }

    const handleEmailChange = e =>{
      setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
      setPassword(e.target.value);
    }

    const handleForgotPassword = () =>{
      sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
      })
      .catch((error) => {
        setError(error.code);
        setError(error.message);
      });
    }

    const handleChangePassword = () =>{
      const user = auth.currentUser;
      const newPassword = password;
      updatePassword(user, newPassword).then(() => {
        // Update successful.
      }).catch((error) => {
        setError(error.code);
        setError(error.message);
      });
    }

    const setUserName = () =>{
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        // Profile updated!
      }).catch((error) => {
        setError(error.code);
        setError(error.message);
      });
    }

    const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
      }).catch((error) => {
        setError(error.code);
        setError(error.message);
      });
    }

    //observe user login change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              setUser(user);
            } else {
              // User is signed out
              setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    },[auth]);

    const logout = () =>{
      setIsLoading(true);
      signOut(auth)
      .then(() => {
          // Sign-out successful.
          setUser({});
        }).catch((error) => {
          setError(error);
        }).finally(()=>{
          setIsLoading(false);
        });
    }

    return {
      signInUsingGoogle, 
      signInUsingGithub, 
      signInUsingFacebook,
      signInUsingTwitter, 
      customLogin, 
      customRegister,
      handleLoginSubmitBtn,
      handleRegisterSubmitBtn,
      handleNameChange,
      handleEmailChange,
      handlePasswordChange,
      handleForgotPassword,
      handleChangePassword,
      verifyEmail,
      setUserName,
      logout,
      user, 
      error,
      isLoading
    };
}

export default useFirebase;