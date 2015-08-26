require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"views":[function(require,module,exports){
var views={"aboutme":"<div class = \"container-fluid\">\n\n  <div class = \"row\">\n    <div class = \"col-md-4\">\n      <img class = \"about-me-pic\" src=\"images/elizpic.png\">\n    </div>\n    <div class = \"col-md-2\"></div>\n    <div class = \"col-md-6 about-me-paragraph\">\n      <h1>Hi, I'm Elizabeth.</h1>\n      <br>\n      <p>Urbanite. Animal lover. Explorer.</p>\n      <br>\n      <p>Born in Charlottte, and after seeing the world, I've made it back home. Alumna of Appalachian State University\n      and recent graduate of the Iron Yard's Front End Engineering Program.</p>\n      </br>\n      <p>I strive to create simple, intuitive, and useful web applications. I'm adaptable, always learning,\n      and constantly challenging myself to be better.</p>\n      <br>\n      </div>\n  </div>\n\n</div>\n","appts":"<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <h1 class = \"float-left\"> Appointments App </h1>\n      <a class = \"float-left-low\" href=\"http://elizabethshealy.github.io/events/\">View Site |</a>\n      <a class = \"float-left-low\" href=\"https://github.com/elizabethshealy/events/tree/master\">Repo</a>\n    </div>\n  </div>\n  <!-- <div class = \"row\">\n    <div class = \"col-md-2\"></div>\n    <div class = \"col-md-8\">\n      <p> The appointments app was created as an assignment for my Front End Engineering class at The Iron Yard. <p>\n    </div>\n    <div class = \"col-md-2\"></div>\n  </div> -->\n\n  <div class = \"row\">\n    <div class = \"col-md-7\">\n      <div id=\"image-appt\"></div>\n    </div>\n    <div class = \"col-md-1\"></div>\n    <div class = \"col-md-4 text-style\">\n      <p class = \"appt-text\"> An appointment management system built in jQuery. Users can add, save, edit, and delete appointments. <p>\n      <br>\n      <ul class = \"text-style\">Languages:\n        <li>HTML</li>\n        <li>CSS</li>\n        <li>Javascript</li>\n      </ul>\n      <br>\n      <ul class = \"text-style\">Frameworks:\n        <li>jQuery</li>\n        <li>Backbone.js</li>\n        <li>Underscore.js</li>\n        <li>Parsley.js</li>\n        <li>Ajax</li>\n      </ul>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <!-- <a class = \"float-right\" href=\"http://elizabethshealy.github.io/events/\">View Site |</a>\n      <a class = \"float-right\" href=\"https://github.com/elizabethshealy/events/tree/master\">Repo</a> -->\n    </div>\n  </div>\n\n  <div class = \"row space-row\">\n  </div>\n\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <a class = \"nav-back\" href=\"# \">Back to Portfolio</a>\n    </div>\n  </div>\n\n\n\n</div>\n","contactme":"<form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Name</label>\n    <input type=\"name\" class=\"form-control\" id=\"exampleInputEmail1\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Email</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputPassword1\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Email</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputPassword1\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n</form>\n","forge":"<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <h1 class = \"float-left\"> The Forge </h1>\n      <a class = \"float-left-low\" href=\"http://tiy-forge.herokuapp.com/users/sign_in\">View Site |</a>\n      <a class = \"float-left-low\" href=\"https://github.com/The-Iron-Planet/forge\">Repo</a>\n    </div>\n  </div>\n  <!-- <div class = \"row\">\n    <div class = \"col-md-2\"></div>\n    <div class = \"col-md-8\">\n      <p> The appointments app was created as an assignment for my Front End Engineering class at The Iron Yard. <p>\n    </div>\n    <div class = \"col-md-2\"></div>\n  </div> -->\n\n  <div class = \"row\">\n    <div class = \"col-md-7\">\n      <div id=\"image-forge\"></div>\n    </div>\n    <div class = \"col-md-1\"></div>\n    <div class = \"col-md-4 text-style\">\n      <p class = \"appt-text\"> A social application for Iron Yard graduates to network, find jobs, and share resources. Built in Ruby on Rails. <p>\n      <br>\n      <ul class = \"text-style\">Languages:\n        <li>HTML</li>\n        <li>CSS</li>\n        <li>Javascript</li>\n        <li>Ruby on Rails</li>\n      </ul>\n      <br>\n      <ul class = \"text-style\">Frameworks & Technologies:\n        <li>jQuery</li>\n        <li>Bootstrap</li>\n        <li>SASS</li>\n        <li>PostgreSQL</li>\n        <li>Rails 12 Factor</li>\n        <li>Devise</li>\n        <li>Paperclip</li>\n        <li>AWS-SDK</li>\n        <li>AutoHTML</li>\n        <br>\n      </ul>\n      <!-- <a class = \"float-right\" href=\"http://tiy-forge.herokuapp.com/users/sign_in\">View Site |</a>\n      <a class = \"float-right\" href=\"https://github.com/The-Iron-Planet/forge\">Repo</a> -->\n    </div>\n  </div>\n\n  <div class = \"row space-row\">\n  </div>\n\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <a class = \"nav-back\" href=\"# \">Back to Portfolio</a>\n    </div>\n  </div>\n\n</div>\n","home":"<div class = \"container-fluid\">\n\n  <!-- <div class  = \"row header-row\">\n    <div class = \"col-md-1\"></div>\n    <div class = \"col-md-1\"></div>\n    <div class = \"col-md-6\"></div>\n    <div class = \"col-md-3 top-nav\">\n      <a class = \"nav-link\" href=\"#aboutme\">About Me\n      </a>\n      <a class = \"nav-link\" href=\"http://www.kyck.com\">Contact Me\n      </a>\n    </div>\n    <div class = \"col-md-1\"></div>\n  </div> -->\n\n  <!-- <div class  = \"row row-1\">\n    <div class = \"col-md-5\"></div>\n    <div class = \"col-md-2 portfolio-title\">\n    <h1>Portfolio</h1>\n    </div>\n    <div class = \"col-md-5\"></div>\n  </div> -->\n\n  <!-- <div class  = \"row\">\n    <div class = \"col-md-1\"></div>\n    <div class = \"col-md-3\">\n      <a href=\"#appts\">\n        <div id=\"box-appts\"></div>\n      </a>\n      <h3>HTML, CSS, jQuery</h3>\n    </div>\n    <div class = \"col-md-3\">\n      <a href=\"#forge\">\n        <div id=\"box-forge\"></div>\n        <h3>HTML, CSS, jQuery </h3>\n      </a>\n    </div>\n    <div class = \"col-md-3\">\n      <a href=\"#smashingboxes\">\n        <div id=\"box-boxes\"></div>\n        <h3>HTML, CSS</h3>\n      </a>\n    </div>\n    <div class = \"col-md-1\"></div>\n  </div> -->\n\n  <!-- <div class  = \"row\">\n    <div class = \"col-md-4 green\">\n      <a href=\"#appts\">\n        <div id=\"box-appts\"></div>\n      </a>\n      <h3>HTML, CSS, jQuery</h3>\n    </div>\n    <div class = \"col-md-4\">\n      <a href=\"#forge\">\n        <div id=\"box-forge\"></div>\n        <h3>HTML, CSS, jQuery </h3>\n      </a>\n    </div>\n    <div class = \"col-md-4 blue\">\n      <a href=\"#smashingboxes\">\n        <div id=\"box-boxes\"></div>\n        <h3>HTML, CSS</h3>\n      </a>\n    </div>\n    <div class = \"col-md-4\"></div>\n  </div> -->\n\n  <div class  = \"row\">\n    <div class = \"col-md-12\">\n      <div class  = \"row middle-row\">\n        <div class = \"col-md-3 box-fill\">\n          <a href=\"#appts\">\n            <div id=\"box-appts\"></div>\n          </a>\n          <h3>HTML, CSS, jQuery</h3>\n        </div>\n        <div class = \"col-md-1 margin-more\"></div>\n        <div class = \"col-md-3 box-fill\">\n          <a href=\"#forge\">\n            <div id=\"box-forge\"></div>\n          </a>\n          <h3>HTML, CSS, jQuery </h3>\n        </div>\n        <div class = \"col-md-1 margin-more\"></div>\n        <div class = \"col-md-3 box-fill\">\n          <a href=\"#smashingboxes\">\n            <div id=\"box-boxes\"></div>\n          </a>\n          <h3>HTML, CSS</h3>\n        </div>\n      </div>\n  </div>\n\n  <!-- <div class  = \"row\">\n    <div class = \"col-md-12 \">\n      <a href=\"http://tiy-forge.herokuapp.com/users/sign_in\">\n        <div id=\"box1\">\n        </div>\n        <h3>HTML, CSS, jQuery</h3>\n      </a>\n      <a href=\"http://tiy-forge.herokuapp.com/users/sign_in\">\n        <div id=\"box\">\n          <div id=\"overlay\">\n            <span id=\"plus\">HTML, CSS, JQUERY</span>\n          </div>\n        </div>\n      </a>\n      <a href=\"http://tiy-forge.herokuapp.com/users/sign_in\">\n        <div id=\"box\">\n          <div id=\"overlay\">\n            <span id=\"plus\">+</span>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div> -->\n\n  <!-- <div class  = \"row white-project\">\n      <div class = \"col-md-5\">\n        <a href=\"http://tiy-forge.herokuapp.com/users/sign_in\">\n          <img class = \"portfolioimg-second\" src=\"images/iMac-forgenew.jpg\">\n        </a>\n      </div>\n      <div class = \"col-md-1\"></div>\n      <div class = \"col-md-5 about-project-text\">\n        <h1> The Forge </h1>\n        <p> Built using Rails and Heroku. Also using Boostrap, Jquery, CSS,\n          HTML, and a bunch of other crap.\n        </p>\n      </div>\n      <div class = \"col-md-1\"></div>\n  </div> -->\n\n  <!-- <div class  = \"row grey-project\">\n    <div class = \"col-md-1\"></div>\n    <div class = \"col-md-5 about-project-text align-left\">\n      <h1> The Forge </h1>\n      <p> Built using Rails and Heroku. Also using Boostrap, Jquery, CSS,\n        HTML, and a bunch of other crap.\n      </p>\n    </div>\n    <div class = \"col-md-1\"></div>\n    <div class = \"col-md-5\">\n      <a href=\"http://tiy-forge.herokuapp.com/users/sign_in\">\n        <img class = \"portfolioimg-second\" src=\"images/iMac-forgenew.jpg\">\n      </a>\n    </div>\n  </div> -->\n\n</div>\n","not-found":"<h1>404 Not found!</h1>","smashingboxes":"<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <h1 class = \"float-left\"> Smashing Boxes Website </h1>\n      <a class = \"float-left-low\" href=\"https://github.com/elizabethshealy/smashingboxes\">View Site |</a>\n      <a class = \"float-left-low\" href=\"https://github.com/elizabethshealy/smashingboxes\">Repo</a>\n    </div>\n  </div>\n  <!-- <div class = \"row\">\n    <div class = \"col-md-2\"></div>\n    <div class = \"col-md-8\">\n      <p> The appointments app was created as an assignment for my Front End Engineering class at The Iron Yard. <p>\n    </div>\n    <div class = \"col-md-2\"></div>\n  </div> -->\n\n  <div class = \"row\">\n    <div class = \"col-md-7\">\n      <div id=\"image-sboxes2\"></div>\n    </div>\n    <div class = \"col-md-1\"></div>\n    <div class = \"col-md-4 text-style\">\n      <p class = \"appt-text\"> A remake of the Academy at Smashing Boxes website. This was the first project that I completed for the Iron Yard. <p>\n      <br>\n      <ul class = \"text-style\">Languages:\n        <li>HTML</li>\n        <li>CSS</li>\n        <li>jQuery</li>\n      </ul>\n      <br>\n      <ul class = \"text-style\">Other Technologies:\n        <li>Gulp</li>\n      </ul>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <!-- <a class = \"float-right\" href=\"https://github.com/elizabethshealy/smashingboxes\">View Site |</a>\n      <a class = \"float-right\" href=\"https://github.com/elizabethshealy/smashingboxes\">Repo</a> -->\n    </div>\n  </div>\n\n  <div class = \"row space-row\">\n  </div>\n\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <a class = \"nav-back\" href=\"# \">Back to Portfolio</a>\n    </div>\n  </div>\n\n\n\n</div>\n"};
if (typeof module !== "undefined" && module.exports) { module.exports = views; }
},{}]},{},[]);