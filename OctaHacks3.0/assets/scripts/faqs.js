/* const items = document.querySelectorAll(".accordion a");
    
function toggleAccordion(){
this.classList.toggle('active');
this.nextElementSibling.classList.toggle('active');
}

 items.forEach(item => item.addEventListener('click', toggleAccordion)); */
 var acc = document.getElementsByClassName('acc');
var panel = document.getElementsByClassName('content');

for (var i = 0; i < acc.length; i++) {
acc[i].onclick = function() {
  var setClasses = !this.classList.contains('active');
  setClass(acc, 'active', 'remove');
  setClass(panel, 'active', 'remove');

  if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
  }
}
}

function setClass(els, className, fnName) {
for (var i = 0; i < els.length; i++) {
  els[i].classList[fnName](className);
}
}
