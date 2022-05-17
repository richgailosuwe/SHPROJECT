const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() => {
    navbarLinks.classList.toggle('active')
})

function myFunction(){
  var x= document.getElementById("myInput");
  if (x.type === "password"){
    x.type="text";
    document.getElementById('hide').style.display="inline-block";
    document.getElementById('show').style.display="none";
  }
  else{
    x.type="password"; 
    document.getElementById('hide').style.display="none";
    document.getElementById('show').style.display="inline-block"; 
  }
  }