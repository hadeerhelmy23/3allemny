const contain = document.getElementById("contain")
const bigger=document.querySelector(".bigprem");
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");


const optionsList = document.querySelectorAll(".option");


contain.addEventListener("click", (_eo) => {
    if(_eo.target.className =="rad2"){
        bigger.style.display="block";
    }else if(_eo.target.className =="rad3"){
        bigger.style.display="block";
    }
else if(_eo.target.className =="rad4"){
    bigger.style.display="block";
}
 else if(_eo.target.className =="rad5"){
    bigger.style.display="block";
}




  

})


selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});