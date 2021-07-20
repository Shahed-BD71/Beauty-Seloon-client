// const setUserToken = () => {
//   firebase
//     .auth()
//     .currentUser.getIdToken(/* forceRefresh */ true)
//     .then(function (idToken) {
//       sessionStorage.setItem("token", idToken);
//     })
//     .catch(function (error) {
//       // Handle error
//     });
// };
// export const handleGoogleSignIn = () => {
//   const googleProvider = new firebase.auth.GoogleAuthProvider();
//   return firebase
//     .auth()
//     .signInWithPopup(googleProvider)
//     .then((res) => {
//       const { displayName, photoURL, email } = res.user;
//       const signedInUser = {
//         isSignedIn: true,
//         name: displayName,
//         email: email,
//         photo: photoURL,
//         success: true,
//       };
//       return signedInUser;
//     })
//     .catch((err) => {
//       console.log(err);
//       console.log(err.message);
//     });
// };

// export const handleFbSignIn = () => {
//   const fbProvider = new firebase.auth.FacebookAuthProvider();
//   return firebase
//     .auth()
//     .signInWithPopup(fbProvider)
//     .then(function (result) {
//       var token = result.credential.accessToken;
//       var user = result.user;
//       user.success = true;
//       return user;
//     })
//     .catch(function (error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//     });
// };

// Email Password Login...

