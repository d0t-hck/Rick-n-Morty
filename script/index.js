"use strict";

window.onload = function() {
  let modal = this.document.getElementById("modal");

  document.addEventListener(
    'click',
    function(event) {
      if (event.target.matches('.list-item') || event.target.matches('.open')) {
        modal.style.display = 'block'
      }

      if (event.target.matches('#close') || event.target.matches('.close')) {
        modal.style.display = 'none'
      }
      console.log(event.target)
    },
    false
  );
};