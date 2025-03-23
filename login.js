

// let isLogin=false;

// $(document).ready(function() {

//     //checking login status
//     let isLogin = localStorage.getItem("isLogin") === "false";
    

//     $(".startTrack").click(function(){
//         if (isLogin==false) {
//             window.location.href="login.html";
//             // localStorage.setItem("isLogin", "true");
//         }
//     })

//     $(".loginbtn").click(function(){
//         // event.preventDefault(); // Stop default submission
//         window.location.href = "index.html";
//         localStorage.setItem("isLogin", "true"); // Store login state
//         alert("Login Successful!");
        
//     })
// })


$(document).ready(function() {
    // Check login status from localStorage
    let isLogin = localStorage.getItem("isLogin") === "false";

    // Redirect if not logged in
    $(".startTrack").click(function() {
        if (!isLogin) {
            window.location.href = "login.html";
        }
    });

    // Simulating login (Add this in login.html script)
    $("#login-form").submit(function(event) {
        event.preventDefault(); // Stop default submission
        localStorage.setItem("isLogin", "true"); // Store login state
        alert("Login Successful!");
        window.location.href = "index.html"; // Redirect
    });

    // Logout function
    window.logout = function() {
        localStorage.removeItem("isLogin");
        alert("Logged out!");
        window.location.href = "index.html";
    };
});
