const question = document.querySelectorAll(".accordion__header");


for (var i =0; i<question.length; i++) {
  question[i].addEventListener ("click", function(){
      this.classList.toggle ("active");

      var answer = this.nextElementSibling;
       
      if (answer.style.display === "block"){
        answer.style.display = "none";
      }

      else {
        answer.style.display = "block"
      }
  })
}


