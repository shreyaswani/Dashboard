function forgotpass(){
    const user = document.getElementById('username').value;
    firebase.auth().sendPasswordResetEmail(user)
    .then((response) => {
        alert('Reset Email sent successfully');
    })
    .catch((error) => {
        document.getElementById('error').innerHTML = error.message;
    })
}