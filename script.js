// Wait for page to load
window.onload = function() {
  // Mobile menu
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('navMenu');
  
  btn.onclick = function() {
    if(menu.classList.contains('active')) {
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
  };
  
  // Form validation
  window.validateForm = function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var msg = document.getElementById('formMsg');
    
    name = name.trim();
    email = email.trim();
    subject = subject.trim();
    message = message.trim();
    
    if(name.length < 2) {
      msg.innerHTML = "Please enter your name";
      return false;
    }
    
    if(!email.includes('@')) {
      msg.innerHTML = "Please enter valid email";
      return false;
    }
    
    if(subject.length < 3) {
      msg.innerHTML = "Please enter a subject";
      return false;
    }
    
    if(message.length < 10) {
      msg.innerHTML = "Message is too short";
      return false;
    }
    
    msg.style.color = "#0BF2BF";
    msg.innerHTML = "Message sent!";
    
    setTimeout(function() {
      document.getElementById('contactForm').reset();
      msg.innerHTML = "";
    }, 2000);
    
    return false;
  };
  
  // Skill bar animation
  var bars = document.getElementsByClassName('inner-bar');
  setTimeout(function() {
    for(var i = 0; i < bars.length; i++) {
      bars[i].style.width = bars[i].style.width;
    }
  }, 500);
};