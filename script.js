const formopenBtn=document.querySelector("#form-open"),
home=document.querySelector(".home"),
formcontainer=document.querySelector(".form-container"),
formcloseBtn=document.querySelector(".form-close"),
signupBtn=document.getElementById("signup"),
loginBtn=document.querySelector("#login"),
pwshowhide=document.querySelectorAll(".pw-hide");



formopenBtn.addEventListener( "click", ()=> home.classList.add("show"));
formcloseBtn.addEventListener( "click", ()=>home.classList.remove("show"));


signupBtn.addEventListener("click",(e) =>{ 
e.preventDefault();
formcontainer.classList.add("active");
});
loginBtn.addEventListener("click",(e) =>{ 
e.preventDefault();
formcontainer.classList.remove("active");
});


pwshowhide.forEach(icon=>{
    icon.addEventListener('click',()=>{
    let getpwInput=icon.parentElement.querySelector("input")
    if(getpwInput.type==="password"){
        getpwInput.type="text";
        icon.classList.replace("uil-eye-slash","uil-eye");
    }
    else{
        getpwInput.type="password";
        icon.classList.replace("uil-eye","uil-eye-slash");
    }
})
});

document.getElementById("register").onsubmit=function () {
    let emailInput=document.querySelector('.email').value;
    let emailRe=/\w+\d+@gmail.(com|net)/;
    let validationResult=emailRe.test(emailInput);
    if(validationResult===false){
      return false;
   }
    return true;
  };

document.getElementById("register").onsubmit=function () {
    let emailInput=document.querySelector('.pass').value;
    let passRe=/(\w+\d+)||(\d+\w)/;
    let validationResult=passRe.test(emailInput);
    if(validationResult===false){
      return false;
   }
    return true;
  };