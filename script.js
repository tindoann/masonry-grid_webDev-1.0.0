/*var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
}) */

function addClass(element, name) {
  var i, arr1, arr2; 
  arr1 = element.className.split(" "); 
  arr2 = name.split(" "); 
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i]; 
    }
  }
}

// Hide items that are not selected
function removeClass(element, name) {
  var i, arr1, arr2; 
  arr1 = element.className.split(" "); 
  arr2 = name.split(" "); 
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i], 1); 
    }
  }
  element.className = arr1.join(" "); 
}

// Add active class

var btnContainer = document.getElementsByClassName("flip-container"); 
var btns = btnContainer.getElementByClassName("btn"); 
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementByClassName("active"); 
    current[0].className = current[0].className.replace("active", ""); 
    this.className += " active"; 
  })
}


