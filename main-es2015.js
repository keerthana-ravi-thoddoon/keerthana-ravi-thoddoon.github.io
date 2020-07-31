(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"about\">\n    <div class=\"container\">\n      <div class=\"card\" data-aos=\"fade-up\" data-aos-offset=\"10\">\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"card-body\">\n              <div class=\"h4 mt-0 title\">About</div>\n              <p>                  \n                Hi! I'm <strong>Keerthana Thoddoon Ravi</strong> , passionate and experienced web developer currently pursuing my Master's at Northeastern University, Boston majoring Information Systems. I'm experienced as a Project Engineer with a history of working in the Information Technology and Services industry for 3 years; have developed software using multiple frameworks; knowledge of software development, cloud computing, networking, database management and design, incident and problem management; Interested in furthering my experience by developing customer focused applications.\n                \n              </p> \n                \n          \n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"card-body\">\n              <div class=\"h4 mt-0 title\">Basic Information</div>\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Email:</strong>\n                </div>\n                <div class=\"col-sm-8\">keerthanaravislm@gmail.com</div>\n              </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Place Of Living</strong>\n                </div>\n                <div class=\"col-sm-8\">Boston\n                </div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Language:</strong>\n                </div>\n                <div class=\"col-sm-8\">English, Hindi, Tamil, Saurashtra</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"contact\">\n        <div class=\"cc-contact-information\" style=\"background-image: url('assets/images/contact.png');\n        background-size: cover;background-position: center center;\">\n\n          <div class=\"container\">\n            <div class=\"cc-contact\">\n              <div class=\"row\">\n                <div class=\"col-md-9\">\n                  <div class=\"card mb-0\" data-aos=\"zoom-in\">\n                    <div class=\"h4 text-center title\"> Contact </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"card-body\">\n                          <form name=\"form\" (ngSubmit)=\"f.form.valid ; contact(); f.resetForm()\" #f=\"ngForm\" novalidate>\n                            <div class=\"p pb-3\">\n                              <strong>Feedbacks Appreciated !! </strong>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-user-circle\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name\"\n                                    [(ngModel)]=\"model.name\" #name=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-file-text\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"subject\" placeholder=\"Subject\"\n                                    [(ngModel)]=\"model.subject\" #subject=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && subject.invalid }\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-envelope\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"E-mail\"\n                                    [(ngModel)]=\"model.email\" #email=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\n                                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"form-group\">\n                                  <textarea class=\"form-control\" name=\"message\" placeholder=\"Your Message\"\n                                    [(ngModel)]=\"model.message\" #message=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && message.invalid }\" required></textarea>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Send</button>\n                              </div>\n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"card-body\">\n                          <img class=\"card-img-top\" src=\"assets/images/a4c1348d-fbef-4395-a4b1-bea8835f4512.jpeg\" alt=\"Card image\" >\n                          \n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <ng-snotify class=\"material\"></ng-snotify>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"education\">\n    <div class=\"container cc-education\">\n      <div class=\"h4 text-center mb-4 title\">Education</div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2019 - 2021</p>\n              <div class=\"h5\">Master's Degree</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Master Of Science</div>\n               <h4 class=\"category\">Northeastern University, Boston, United States Of America\n               </h4>\n               <ul>\n                <li>\n                  Course Work : Application Engineering and Development, Concepts of Object-Oriented Design - JAVA, Web Development Tools and Methods, Web Design and User Experience, Network Structures and Cloud Computing\n                </li>\n             </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2009 - 2012</p>\n              <div class=\"h5\">Bachelor's Degree</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Bachelor of Science</div>\n               <h4 class=\"category\">Bharathiyar University - Dr. G. R. Damodaran College Of Science, Coimbatore, India\n               </h4>\n               <ul>\n                <li>Course Work : C Programming, Object Oriented Programming with C++, Data Structures and Algorithms, Java Programming, Relational Database Management System, Visual Basic, Web Technology, Computer Networks, Operating Systems, Principles of Software Engineering, Wireless Application Protocol </li>\n                 \n             </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      \n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"experience\">\n        <div class=\"container cc-education\">\n            <div class=\"h4 text-center mb-4 title\">Work Experience</div>\n    <div class=\"colorlib-narrow-content\">\n       \n        <div class=\"row\">\n            <div class=\"col-md-12\">\n             <div class=\"timeline-centered\">\n                 <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n                    <div class=\"timeline-entry-inner\">\n\n                       <div class=\"timeline-icon color-1\">\n                          <i class=\"icon-pen2\"></i>\n                       </div>\n\n                       <div class=\"timeline-label\">\n                        <h2>Project Engineer <span> - Feb, 2013- July, 2015</span></h2>\n                         <h4>Wipro Technologies, India</h4>\n                          <ul>\n                           <li>Involved in multiple releases as part of development team by fixing client bugs in a stipulated time and\n                           developed new enhancements</li>\n                           <li>Developed a java swing application to automate the process of migrating database between versions</li>\n                           <li> Developed a process monitoring application using javascript, node.js, CSS, HTML</li>\n                           <li> Initiated and developed an in-house web application using angular and node.js to track employees work\n                           activities and report a mail to team leads</li>\n                           <li>Received Spot award twice for effective contribution during product release and solved critical client\n                           bugs</li>\n                          </ul>\n                           </div>\n                    </div>\n                 </article>\n                 \n</div>\n                \n                \n              </div>\n           </div>\n       </div>\n    </div>\n   </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container text-center\">\n      <a class=\"cc-facebook btn btn-link\" href=\"https://www.facebook.com/keerthana.sree.3\" target=\"_blank\">\n        <i class=\"fa fa-facebook fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      \n      <a class=\"cc-github btn btn-link \" href=\"https://github.com/keerthana-ravi-thoddoon?tab=repositories\" target=\"_blank\">\n        <i class=\"fa fa-github fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      </div>\n    <div class=\"text-center text-muted\">\n      <p>&copy; All rights reserved.\n      </p>\n    </div>\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"profile-page sidebar-collapse\">\n      <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent bg-primary\" color-on-scroll=\"400\">\n        <div class=\"container\">\n          <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" href=\"#\" rel=\"tooltip\">Welcome to Keerthana's Portfolio</a>\n            <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\n              aria-controls=\"navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n          </div>\n          <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#about\">About</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link smooth-scroll\" href=\"#experience\">Experience</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a class=\"nav-link smooth-scroll\" href=\"#projects\">Projects</a>\n                  </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#skill\">Skills</a>\n              </li>\n             \n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#education\">Education</a>\n              </li>\n\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#contact\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-page\">\n    <div class=\"wrapper\">\n      <div class=\"page-header page-header-small\" filter-color=\"green\">\n        <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('assets/images/intro.jpg');\">\n        </div>\n        <div class=\"container\">\n          <div class=\"content-center\">\n            <div class=\"cc-profile-image\">\n              <a href=\"#\">\n                <img src=\"assets/images/a4c1348d-fbef-4395-a4b1-bea8835f4512.jpeg\" alt=\"Image\" />\n              </a>\n            </div>\n            <div class=\"h2 title\">Keerthana Thoddoon Ravi</div>\n            <p class=\"category text-white\">Web Developer</p>\n            <a class=\"btn btn-primary smooth-scroll mr-2\" href=\"#contact\" data-aos=\"zoom-in\"\n              data-aos-anchor=\"data-aos-anchor\">Contact</a>\n            <a class=\"btn btn-primary\"\n              href=\"https://drive.google.com/file/d/1gwqKN0Yg99S3nAliAp0coSQ1X1ZqRj10/view?usp=sharing\" target=\"_blank\"\n              data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Download CV</a>\n          </div>\n        </div>\n        <div class=\"section\">\n          <div class=\"container\">\n            <div class=\"button-container\">\n              <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.facebook.com/keerthana.sree.3\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Facebook\">\n                <i class=\"fa fa-facebook\"></i>\n              </a>\n             <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.linkedin.com/in/keerthana-thoddoon-ravi/\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Linkedin\">\n                <i class=\"fa fa-linkedin\"></i>\n              </a>\n              <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://github.com/keerthana-ravi-thoddoon?tab=repositories\"\n                target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Github\">\n                <i class=\"fa fa-github\"></i>\n              </a>\n            \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"page-content\">\n    <app-intro></app-intro>\n    <app-about></app-about>\n    <app-experience></app-experience>\n    <app-projects></app-projects>\n    <app-skills></app-skills>\n    <app-education></app-education>\n    \n    \n    <app-contact></app-contact>\n</div>\n<app-footer></app-footer>\n<ngx-spinner bdColor=\"rgba(255,255,255,1)\" size=\"medium\" color=\"#033d5b\" type=\"ball-spin-clockwise\"></ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"projects\">\n    <div class=\"container cc-education\">\n        <div class=\"h4 text-center mb-4 title\">Projects</div>\n            \n     <div class=\"row\">\n    \n    \n       <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n      <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"assets/images/legalaid1.jpg\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Legal Aid System Using Java</h4>\n          <h5 class=\"card-text\">\n            <ul> \n            <li>Legal Aid System (Java, Java Swing, Junit, JFreeChart, JavaMail)</li>\t\t\t\t\t\t\t\t \n            <li> Developed a java swing application to assist law firms manage customer requests and track pending complaints</li>\n            <li>Used JFreeChart to analyze the accounts and manage finance of the firm</li>\n          </ul>\n          </h5>\n          <a href=\"https://github.com/keerthana-ravi-thoddoon/legalaidsystem\" target=\"_blank\" class=\"btn btn-primary stretched-link\">Explore</a>\n        \n        </div>\n      </div>\n    </div>\n    </div>\n\n    \n    \n    <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\"><br><br>\n       <div class=\"card\" >\n        <img class=\"card-img-top\"src=\"assets/images/wally.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\"> Budget Tracker Using Angular, Bootstrap3, NodeJs</h4>\n          <h5 class=\"card-text\">\n            <ul> \n  \t\t\t\t\t\t\t\t \n            <li> Designed and developed a UI rich web application to manage expenses and help in set monthly budgeting</li>\n            <li> Custom budget limits can be set to alert the user while limit is exceeded</li>\n            <li>Integrated the application with Google API for secure login with google account</li>\n          </ul>\n          </h5>\n      \n           <a href=\"https://github.com/neu-mis-info6150-fall-2019/assignment-8-thoddoonravik/tree/master/api\" target=\"_blank\" class=\"btn btn-primary stretched-link\">Explore</a>\n        </div>\n    </div>\n    </div>\n      </div>\n\n     \n    \n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\"><br><br><br><br>\n       <div class=\"card\" >\n        <img class=\"card-img-top\"src=\"assets/images/todo.png\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">TODO application using Nodejs, Express & MongoDB</h4>\n          <h5 class=\"card-text\">\n            <ul> \n            <li>HTML, CSS, Angular, Bootstrap3, NodeJs</li>\t\t\t\t\t\t\t\t \n            <li> Developed simple UI application to track TODO list</li>\n            <li> Keep track of Todo items and create a checklist</li>\n            <li> Delete the items and tasks completed</li><br>\n          </ul>\n          </h5>\n      \n           <a href=\"https://github.com/neu-mis-info6150-fall-2019/assignment-8-thoddoonravik\" target=\"_blank\" class=\"btn btn-primary stretched-link\">Explore</a>\n        </div>\n    </div>\n    </div>\n      </div>\n    \n      \n    \n    </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"projects\">\n  <div class=\"container cc-education\">\n      <div class=\"h4 text-center mb-4 title\">Skills</div>\n      <div class=\"row\">\n      <mat-card class=\"skillcard\">\n    <table class=\"skillsTable\">\n          <tr>\n              <th>\n                  LANGUAGES\n              </th>\n              <th>\n                  <button mat-button>Java</button>\n                  <button mat-button >JavaScript(ES6)</button>\n                  <button mat-button >NodeJS</button>\n                  <button mat-button >SQL</button>\n                  \n              </th>\n          </tr>\n          <tr>\n              <th>\n                  WEB TECHNOLOGIES\n              </th>\n              <th>\n                  <button mat-button >Spring MVC</button>\n                  <button mat-button >Angular</button>\n                  <button mat-button >HTML5</button>\n                  <button mat-button >CSS3</button>\n                  <button mat-button >Sass</button>\n                  <button mat-button >Node.js</button>\n                  <button mat-button >Hibernate</button>\n                  <button mat-button >Rest API</button>\n              </th>\n          </tr>\n          <tr>\n              <th>\n                  DATABASES\n              </th>\n              <th>\n                  <button mat-button class=\"skillsButton\">MySQL</button>\n                  <button mat-button class=\"skillsButton\">MongoDB</button>\n                  <button mat-button class=\"skillsButton\">Sequlize</button>\n              </th>\n          </tr>\n          <tr>\n              <th>\n                  CLOUD TECHNOLOGIES\n              </th>\n              <th>\n                  <button mat-button class=\"skillsButton\">AWS</button>\n                  <button mat-button class=\"skillsButton\">EC2</button>\n                  <button mat-button class=\"skillsButton\">AMI</button>\n                   <button mat-button class=\"skillsButton\">VPC</button>\n                  <button mat-button class=\"skillsButton\">RDS</button>\n                  <button mat-button class=\"skillsButton\">S3</button>\n                  <button mat-button class=\"skillsButton\">Dynamo DB</button>\n                  <button mat-button class=\"skillsButton\">SNS</button>\n                  <button mat-button class=\"skillsButton\">ROUTE 53</button>\n                  <button mat-button class=\"skillsButton\">SES</button>\n                  <button mat-button class=\"skillsButton\">LAMBDA</button>\n              </th>\n          </tr>\n          <tr>\n              <th>\n                  TOOLS & OTHERS\n              </th>\n              <th>\n                  <button mat-button class=\"skillsButton\">CircleCI</button>\n                  <button mat-button class=\"skillsButton\">Packer</button>\n                  <button mat-button class=\"skillsButton\">Terraform</button>\n                   <button mat-button class=\"skillsButton\">JMeter</button>\n                  <button mat-button class=\"skillsButton\">ITIL</button>\n                  <button mat-button class=\"skillsButton\">Putty</button>\n                  <button mat-button class=\"skillsButton\">Maven</button>\n                  <button mat-button class=\"skillsButton\">Postman</button>\n              </th>\n          </tr>\n          <tr>\n              <th>\n                  OPERATING SYSTEMS\n              </th>\n              <th>\n                  <button mat-button class=\"skillsButton\">Linux</button>\n                  <button mat-button class=\"skillsButton\">Windows</button>\n              </th>                    \n          </tr>\n      </table>\n    </mat-card>  \n    </div>   \n</div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








const routes = [
    {
        path: '',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }
];
const config = {
    useHash: true,
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, config),
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/profile/about/about.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row p {\n  font-weight: 700px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3BvcnRmb2xpby9zcmMvYXBwL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIFxufSIsIi5yb3cgcCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDBweDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/profile/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/profile/contact/contact.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile/contact/contact.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/contact/contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/contact/contact.component.ts ***!
  \******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../assets/js/smtp.js */ "./src/assets/js/smtp.js");
/* harmony import */ var _assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_4__);





let ContactComponent = class ContactComponent {
    constructor(snotify, profile) {
        this.snotify = snotify;
        this.profile = profile;
        this.model = {};
    }
    contact() {
        console.log("insde cntact");
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "vigneshc994@gmail.com",
            Password: "1D7492915BDD5722F9BB5410A4185091D4D3",
            To: "keerthanaravislm@gmail.com",
            From: `vigneshc994@gmail.com`,
            Subject: this.model.subject,
            Body: `
      <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.model.name} <br /> <b>Email: </b>${this.model.email}<br /> <b>Subject: </b>${this.model.subject}<br /> <b>Message:</b> <br /> ${this.model.message} <br><br> <b>End of Message.</b> `
        }).then(message => {
            if (message == 'OK') {
                alert("Thanks for your mail. Will get back to you soon !");
            }
            else {
                alert(message);
            }
        });
    }
    ngOnInit() {
    }
};
ContactComponent.ctorParameters = () => [
    { type: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"] },
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/profile/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/profile/education/education.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/education/education.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  color: #4a4843;\n  font-size: 20px;\n  margin-bottom: 10px;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3BvcnRmb2xpby9zcmMvYXBwL3Byb2ZpbGUvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0csY0FBQTtFQUNKLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBoNHtcbiAgICBjb2xvcjojNGE0ODQzO1xuZm9udC1zaXplOiAyMHB4O1xubWFyZ2luLWJvdHRvbTogMTBweDtcbm1hcmdpbi10b3A6MnB4O1xufSIsImg0IHtcbiAgY29sb3I6ICM0YTQ4NDM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/education/education.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/education/education.component.ts ***!
  \**********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EducationComponent = class EducationComponent {
    constructor() { }
    ngOnInit() {
    }
};
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.scss */ "./src/app/profile/education/education.component.scss")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/profile/experience/experience.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".colorlib-experience {\n  padding-top: 4em;\n  padding-bottom: 9em;\n  clear: both;\n  width: 100%;\n  display: block;\n}\n\n@media screen and (max-width: 768px) {\n  .colorlib-experience {\n    padding-top: 5em;\n    padding-bottom: 8em;\n  }\n}\n\n.timeline-centered {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 4px;\n  background: #f2f3f7;\n  top: 20px;\n  bottom: 20px;\n  margin-left: 29px;\n}\n\n.timeline-centered .timeline-entry {\n  position: relative;\n  margin-top: 5px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner {\n  position: relative;\n  margin-left: -20px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: #2c98f0;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 0 0 5px #f2f3f7;\n  line-height: 40px;\n  float: left;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-2 {\n  background: #ec5453;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-3 {\n  background: #f9bf3f;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-4 {\n  background: #a84cb8;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-5 {\n  background: #2fa499;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-none {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\n  position: relative;\n  background: #f2f3f7;\n  padding: 1.5em;\n  margin-left: 60px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 9px 9px 0;\n  border-color: transparent #f2f3f7 transparent transparent;\n  left: 0;\n  top: 10px;\n  margin-left: -9px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {\n  margin-top: 15px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\n  font-size: 20px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  font-weight: 500;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\n  color: #000;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\n  -webkit-opacity: 0.4;\n  -moz-opacity: 0.4;\n  opacity: 0.4;\n  -ms-filter: alpha(opacity=40);\n  filter: alpha(opacity=40);\n  font-size: 16px;\n}\n\n.timeline-label h4 {\n  margin-top: -15px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  color: #545755;\n  font-weight: 500;\n}\n\n.timeline-label span {\n  color: #000;\n  font-weight: 600;\n}\n\n.timeline-label p {\n  font-size: 1.3em;\n  font-weight: 500;\n}\n\n.timeline-label ul {\n  font-size: 1.3em;\n  font-weight: 500;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3BvcnRmb2xpby9zcmMvYXBwL3Byb2ZpbGUvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNESjs7QURHSTtFQUVJO0lBRUksZ0JBQUE7SUFDQSxtQkFBQTtFQ0ZWO0FBQ0Y7O0FETUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDSlI7O0FETU07RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0hSOztBREtNO0VBQ0UsV0FBQTtBQ0ZSOztBRElNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNEUjs7QURHTTtFQUNFLFdBQUE7QUNBUjs7QURFTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQ007RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0VSOztBREFNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0dSOztBRERNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFJQSxrQkFBQTtFQUNBLGtCQUFBO0VBR0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNJUjs7QURIUTtFQUNFLFdBQUE7QUNNVjs7QURMUTtFQUNFLG1CQUFBO0FDUVY7O0FEUFE7RUFDRSxtQkFBQTtBQ1VWOztBRFRRO0VBQ0UsbUJBQUE7QUNZVjs7QURYUTtFQUNFLG1CQUFBO0FDY1Y7O0FEYlE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNnQlY7O0FEZE07RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDaUJSOztBRGZNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlEQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ2tCUjs7QURoQk07RUFDRSxnQkFBQTtBQ21CUjs7QURqQk07RUFDRSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQ29CUjs7QURsQk07RUFDRSxXQUFBO0FDcUJSOztBRG5CTTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNzQlI7O0FEbEJNO0VBRUUsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7RUFBZSxnQkFBQTtBQ3FCdkI7O0FEakJNO0VBRUMsV0FBQTtFQUFZLGdCQUFBO0FDb0JuQjs7QURqQk07RUFFRSxnQkFBQTtFQUFpQixnQkFBQTtBQ29CekI7O0FEbEJNO0VBQ0UsZ0JBQUE7RUFBaUIsZ0JBQUE7RUFBaUIsMkNBQUE7QUN1QjFDIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3JsaWItZXhwZXJpZW5jZVxue1xuICAgIHBhZGRpbmctdG9wOiA0ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDllbTtcbiAgXG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7IFxufVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KVxuICAgIHtcbiAgICAgICAgLmNvbG9ybGliLWV4cGVyaWVuY2VcbiAgICAgICAge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4ZW07XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC50aW1lbGluZS1jZW50ZXJlZCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgZGlzcGxheTogdGFibGU7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgICAgICAgY2xlYXI6IGJvdGg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlOyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gICAgICAgIGNsZWFyOiBib3RoOyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOXB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGNsZWFyOiBib3RoOyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzJjOThmMDtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmbG9hdDogbGVmdDsgfVxuICAgICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiBpIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci0yIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWM1NDUzOyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTMge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWJmM2Y7IH1cbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItNCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2E4NGNiODsgfVxuICAgICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci01IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmZhNDk5OyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLW5vbmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgICAgICAgcGFkZGluZzogMS41ZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItd2lkdGg6IDlweCA5cHggOXB4IDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2YyZjNmNyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTlweDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgcCArIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNTAwOyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiBhIHtcbiAgICAgICAgY29sb3I6ICMwMDA7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHNwYW4ge1xuICAgICAgICAtd2Via2l0LW9wYWNpdHk6IC40O1xuICAgICAgICAtbW96LW9wYWNpdHk6IC40O1xuICAgICAgICBvcGFjaXR5OiAuNDtcbiAgICAgICAgLW1zLWZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDsgXG4gICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWxhYmVsIGg0e1xuICAgICAgIFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogIzU0NTc1NTtmb250LXdlaWdodDo1MDA7XG4gICAgICBcbiAgICAgIFxuICAgICAgfVxuICAgICAgLnRpbWVsaW5lLWxhYmVsIHNwYW57XG4gICAgICBcbiAgICAgICBjb2xvcjogIzAwMDtmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtbGFiZWwgcHtcbiAgICAgIFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO2ZvbnQtd2VpZ2h0OjUwMDtcbiAgICAgIH1cbiAgICAgIC50aW1lbGluZS1sYWJlbCB1bHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtmb250LXdlaWdodDo1MDA7IGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIH0iLCIuY29sb3JsaWItZXhwZXJpZW5jZSB7XG4gIHBhZGRpbmctdG9wOiA0ZW07XG4gIHBhZGRpbmctYm90dG9tOiA5ZW07XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb2xvcmxpYi1leHBlcmllbmNlIHtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA4ZW07XG4gIH1cbn1cbi50aW1lbGluZS1jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIHRvcDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjlweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMyYzk4ZjA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMiB7XG4gIGJhY2tncm91bmQ6ICNlYzU0NTM7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTMge1xuICBiYWNrZ3JvdW5kOiAjZjliZjNmO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci00IHtcbiAgYmFja2dyb3VuZDogI2E4NGNiODtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItNSB7XG4gIGJhY2tncm91bmQ6ICMyZmE0OTk7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLW5vbmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogOXB4IDlweCA5cHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjJmM2Y3IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBsZWZ0OiAwO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgcCArIHAge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIGEge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHNwYW4ge1xuICAtd2Via2l0LW9wYWNpdHk6IDAuNDtcbiAgLW1vei1vcGFjaXR5OiAwLjQ7XG4gIG9wYWNpdHk6IDAuNDtcbiAgLW1zLWZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIGg0IHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1NDU3NTU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aW1lbGluZS1sYWJlbCBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50aW1lbGluZS1sYWJlbCBwIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIHVsIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/experience/experience.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.ts ***!
  \************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExperienceComponent = class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.component.scss */ "./src/app/profile/experience/experience.component.scss")).default]
    })
], ExperienceComponent);



/***/ }),

/***/ "./src/app/profile/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/footer/footer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/profile/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/profile/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/header/header.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/profile/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/profile/intro/intro.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/intro/intro.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/intro/intro.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/intro/intro.component.ts ***!
  \**************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntroComponent = class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intro.component.scss */ "./src/app/profile/intro/intro.component.scss")).default]
    })
], IntroComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");



let ProfileComponent = class ProfileComponent {
    constructor(spinner) {
        this.spinner = spinner;
    }
    ngOnInit() {
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 2000);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/profile/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/profile/footer/footer.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/profile/intro/intro.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/profile/about/about.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/profile/skills/skills.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/profile/experience/experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./education/education.component */ "./src/app/profile/education/education.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/profile/contact/contact.component.ts");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/profile/projects/projects.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");



















let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyModule"],
            _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"]
        ],
        declarations: [
            _profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
            _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceComponent"],
            _education_education_component__WEBPACK_IMPORTED_MODULE_12__["EducationComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"]
        ],
        providers: [
            { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_4__["ToastDefaults"] },
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"],
        ]
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProfileService = class ProfileService {
    //baseUrl = environment.baseUrl;
    constructor(http) {
        this.http = http;
        this.skillsData = [
            {
                'id': '1',
                'skill': 'ANGULAR 6',
                'progress': '85%'
            },
            {
                'id': '2',
                'skill': 'PHP\/CODEIGNITER',
                'progress': '80%'
            },
            {
                'id': '3',
                'skill': 'C++',
                'progress': '80%'
            },
            {
                'id': '4',
                'skill': 'PYTHON',
                'progress': '75%'
            },
            {
                'id': '5',
                'skill': 'ADOBE ILLUSTRATOR',
                'progress': '75%'
            },
            {
                'id': '6',
                'skill': 'DATA STRUCTURE',
                'progress': '70%'
            }
        ];
        this.educationData = [
            {
                'id': '1',
                'from_to_year': '2016 - 2020',
                'education': 'Bachelor\'s Degree',
                'stream': 'Bachelor of Engineering',
                'institution': 'MADHAV INSTITUTE OF TECHNOLOGY AND SCIENCE, GWALIOR'
            },
            {
                'id': '2',
                'from_to_year': '2014 - 2015',
                'education': 'Higher Secondary',
                'stream': 'Science and Mathematics',
                'institution': 'GOVT. BOYS H.S. SCHOOL, DHAMNOD, DHAR'
            },
            {
                'id': '3',
                'from_to_year': '2012 - 2013',
                'education': 'High School',
                'stream': 'Science and Mathematics',
                'institution': 'SARSWATI SHISHU VIDHYA MANDIR, DHAMNOD, DHAR'
            }
        ];
        this.exprienceData = [
            {
                'id': '1',
                'from_to_month_year': 'JUNE 2018 - AUGUST 2018',
                'organization': 'WITTYFEED',
                'designation': 'Full Stack Developer',
                'details': `Created fully functional projects for <strong>WittyFeed<\/strong>,
      A publisher Dashboard was created using <strong>Angular 6, CodeIgniter 3 , Rest API and JWT (Json Web Token).
      <\/strong> It involves multiple modules like Analytics, Stories, RSS Links, Payments.
      Another project was Influencer admin Dashboard which has features like app approval,
      app rejection in OneFeed(WittyFeed\u2019s personalised feed SDK) integrations.
      Lastly the admin dashboard for managing publishers for OneFeed.`
            },
            {
                'id': '2',
                'from_to_month_year': 'OCTOBER 2017 - NOVEMBER 2017',
                'organization': 'MITS, GWALIOR',
                'designation': 'Web Developer',
                'details': 'Designed the Official Website of the <strong>INDUSTRY CONCLAVE<\/strong>.'
            },
            {
                'id': '3',
                'from_to_month_year': 'AUGUST 2017 - SEPTEMBER 2017',
                'organization': 'QUERENCIA CLUB (MITS)',
                'designation': 'Web Developer',
                'details': 'Developed the Official Website of the <strong>MITSVAH Literary Fest<\/strong>\r\nUnder <strong>Querencia CLUB<\/strong>.'
            }
        ];
    }
    // contactus(data: any): Observable<any> {
    //   return this.http.post(this.baseUrl + 'contact', data);
    // }
    skills() {
        // return this.http.get(this.baseUrl + 'skills');
        return this.skillsData;
    }
    education() {
        // return this.http.get(this.baseUrl + 'education');
        return this.educationData;
    }
    exprience() {
        // return this.http.get(this.baseUrl + 'exprience');
        return this.exprienceData;
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ "./src/app/profile/projects/projects.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blog-entry {\n  width: 100%;\n  float: left;\n  background: #fff;\n  margin-bottom: 3em;\n}\n\n@media screen and (max-width: 768px) {\n  .blog-entry {\n    margin-bottom: 3em;\n  }\n}\n\n.blog-entry .blog-img {\n  width: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  margin-bottom: 25px;\n}\n\n.blog-entry .blog-img img {\n  position: relative;\n  max-width: 100%;\n  transform: scale(1);\n  transition: 0.3s;\n}\n\n.blog-entry .desc h3 {\n  font-size: 16px;\n  margin-bottom: 25px;\n  line-height: auto;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n\n.blog-entry .desc h3 a {\n  color: #000;\n  text-decoration: none;\n}\n\n.blog-entry .desc span {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.4) !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n}\n\n.blog-entry .desc span small i {\n  color: #999999;\n}\n\n.blog-entry .desc .lead {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #000;\n}\n\n.blog-entry:hover .blog-img img {\n  transform: scale(1.1);\n}\n\n.blog-entry h4 {\n  font-weight: 560;\n  margin-top: 6px;\n  font-size: 20px;\n}\n\n.blog-entry h5 {\n  line-height: normal;\n  font-weight: 500;\n  font-size: 1.3em;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3BvcnRmb2xpby9zcmMvYXBwL3Byb2ZpbGUvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURBSTtFQUNFO0lBQ0Usa0JBQUE7RUNHTjtBQUNGOztBREhJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDS047O0FESk07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFLQSxtQkFBQTtFQUdBLGdCQUFBO0FDT1I7O0FETkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FDU047O0FEUk07RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNXUjs7QURWSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2FOOztBRFpNO0VBQ0UsY0FBQTtBQ2VSOztBRGRJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDaUJOOztBRGhCSTtFQUtFLHFCQUFBO0FDbUJOOztBRGpCTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNvQlI7O0FEakJRO0VBQ0ssbUJBQUE7RUFDRCxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ29CWiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1lbnRyeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLmJsb2ctZW50cnkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzZW07IH0gfVxuICAgIC5ibG9nLWVudHJ5IC5ibG9nLWltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG4gICAgICAuYmxvZy1lbnRyeSAuYmxvZy1pbWcgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzOyB9XG4gICAgLmJsb2ctZW50cnkgLmRlc2MgaDMge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiBhdXRvO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XG4gICAgICAuYmxvZy1lbnRyeSAuZGVzYyBoMyBhIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgIC5ibG9nLWVudHJ5IC5kZXNjIHNwYW4ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KSAhaW1wb3J0YW50O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwOyB9XG4gICAgICAuYmxvZy1lbnRyeSAuZGVzYyBzcGFuIHNtYWxsIGkge1xuICAgICAgICBjb2xvcjogIzk5OTk5OTsgfVxuICAgIC5ibG9nLWVudHJ5IC5kZXNjIC5sZWFkIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgY29sb3I6ICMwMDA7IH1cbiAgICAuYmxvZy1lbnRyeTpob3ZlciAuYmxvZy1pbWcgaW1nIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XG4gIFxuICAgICAgLmJsb2ctZW50cnkgaDR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OjU2MDtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gIFxuICAgICAgICAuYmxvZy1lbnRyeSBoNXtcbiAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOjEuM2VtO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICAgICAgIFxuICAgICAgICB9IiwiLmJsb2ctZW50cnkge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJsb2ctZW50cnkge1xuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgfVxufVxuLmJsb2ctZW50cnkgLmJsb2ctaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5ibG9nLWVudHJ5IC5ibG9nLWltZyBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBsaW5lLWhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBoMyBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiBzbWFsbCBpIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIC5sZWFkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmJsb2ctZW50cnk6aG92ZXIgLmJsb2ctaW1nIGltZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5ibG9nLWVudHJ5IGg0IHtcbiAgZm9udC13ZWlnaHQ6IDU2MDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5ibG9nLWVudHJ5IGg1IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/profile/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/profile/skills/skills.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/skills/skills.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".skillsbg {\n  margin-top: 12%;\n  background-color: cyan;\n  width: 100%;\n  height: 700px;\n}\n\n.skillcard {\n  margin-top: 2%;\n  width: 100%;\n  height: 500px;\n  box-shadow: 0 1px 3px rgba(105, 110, 163, 0.12), 0 1px 2px rgba(148, 224, 199, 0.24);\n}\n\n.skillcard:hover {\n  box-shadow: 28px 28px 28px rgba(0, 0, 0, 0.22), 20px 20px 20px rgba(0, 0, 0, 0.22);\n  transition: all 0.3s cubic-bezier(1, 1, 1, 1);\n}\n\n.skillTitle {\n  padding-top: 2%;\n  text-align: center;\n  letter-spacing: 0.05em;\n  font-family: Verdana;\n  font-size: 25px;\n}\n\n.skillsTable {\n  margin-top: 3%;\n}\n\n.mat-button {\n  cursor: pointer;\n  border-radius: 20px;\n  border-color: white;\n  border: 2px solid rgba(255, 255, 255, 0.486);\n}\n\n.mat-button:hover {\n  color: rgba(255, 255, 255, 0.486);\n}\n\nth, td {\n  padding: 10px;\n  border: none;\n}\n\nth {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3BvcnRmb2xpby9zcmMvYXBwL3Byb2ZpbGUvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFHQSxXQUFBO0VBQ0EsYUFBQTtFQUdBLG9GQUFBO0FDSEo7O0FES0E7RUFDSSxrRkFBQTtFQUNBLDZDQUFBO0FDSEo7O0FEUUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFFBO0VBRUksY0FBQTtBQ05KOztBRFVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQ1BKOztBRFFBO0VBQ0ksaUNBQUE7QUNOSjs7QURVQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDUEo7O0FEVUU7RUFDRSxnQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxsc2Jne1xuICAgIG1hcmdpbi10b3A6IDEyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDo3MDBweDtcbn1cblxuLnNraWxsY2FyZHtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAvLyBtYXJnaW4tbGVmdDogMiU7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMTA1LCAxMTAsIDE2MywgMC4xMiksIDAgMXB4IDJweCByZ2JhKDE0OCwgMjI0LCAxOTksIDAuMjQpO1xuICAgIFxuJjpob3ZlcntcbiAgICBib3gtc2hhZG93OiAyOHB4IDI4cHggMjhweCByZ2JhKDAuMjIsMC4yMiwwLjIyLDAuMjIpLCAyMHB4IDIwcHggMjBweCByZ2JhKDAuMjIsMC4yMiwwLjIyLDAuMjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigxLDEsMSwxKTtcblxufVxufVxuXG4uc2tpbGxUaXRsZXtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uc2tpbGxzVGFibGV7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcblxufVxuXG4ubWF0LWJ1dHRvbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40ODYpO1xuJjpob3ZlcntcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4Nik7XG5cbn1cbn1cbnRoLCB0ZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICB0aCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfSIsIi5za2lsbHNiZyB7XG4gIG1hcmdpbi10b3A6IDEyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzAwcHg7XG59XG5cbi5za2lsbGNhcmQge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDEwNSwgMTEwLCAxNjMsIDAuMTIpLCAwIDFweCAycHggcmdiYSgxNDgsIDIyNCwgMTk5LCAwLjI0KTtcbn1cbi5za2lsbGNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAyOHB4IDI4cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjIpLCAyMHB4IDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMSwgMSwgMSwgMSk7XG59XG5cbi5za2lsbFRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDIlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5za2lsbHNUYWJsZSB7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4ubWF0LWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4Nik7XG59XG4ubWF0LWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDg2KTtcbn1cblxudGgsIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG50aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/skills/skills.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/skills/skills.component.ts ***!
  \****************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsComponent = class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.scss */ "./src/app/profile/skills/skills.component.scss")).default]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/assets/js/smtp.js":
/*!*******************************!*\
  !*** ./src/assets/js/smtp.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

﻿/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
    //baseUrl : `http://localhost:4200/`,
    snotifyConfig: {
        showProgressBar: true,
        position: ng_snotify__WEBPACK_IMPORTED_MODULE_1__["SnotifyPosition"].rightTop,
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map