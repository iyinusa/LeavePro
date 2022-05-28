/*
 *  Document   : base_forms_validation.js
 *  Author     : TBDigital
 */
var BaseFormValidation=function(){var e=function(){jQuery(".js-validation-bootstrap").validate({ignore:[],errorClass:"help-block animated fadeInDown",errorElement:"div",errorPlacement:function(e,r){jQuery(r).parents(".form-group > div").append(e)},highlight:function(e){var r=jQuery(e);r.closest(".form-group").removeClass("has-error").addClass("has-error"),r.closest(".help-block").remove()},success:function(e){var r=jQuery(e);r.closest(".form-group").removeClass("has-error"),r.closest(".help-block").remove()},rules:{"val-username":{required:!0,minlength:3},"val-email":{required:!0,email:!0},"val-password":{required:!0,minlength:5},"val-confirm-password":{required:!0,equalTo:"#val-password"},"val-select2":{required:!0},"val-select2-multiple":{required:!0,minlength:2},"val-suggestions":{required:!0,minlength:5},"val-skill":{required:!0},"val-currency":{required:!0,currency:["$",!0]},"val-website":{required:!0,url:!0},"val-phoneus":{required:!0,phoneUS:!0},"val-digits":{required:!0,digits:!0},"val-number":{required:!0,number:!0},"val-range":{required:!0,range:[1,5]},"val-terms":{required:!0}},messages:{"val-username":{required:"Please enter a username",minlength:"Your username must consist of at least 3 characters"},"val-email":"Please enter a valid email address","val-password":{required:"Please provide a password",minlength:"Your password must be at least 5 characters long"},"val-confirm-password":{required:"Please provide a password",minlength:"Your password must be at least 5 characters long",equalTo:"Please enter the same password as above"},"val-select2":"Please select a value!","val-select2-multiple":"Please select at least 2 values!","val-suggestions":"What can we do to become better?","val-skill":"Please select a skill!","val-currency":"Please enter a price!","val-website":"Please enter your website!","val-phoneus":"Please enter a US phone!","val-digits":"Please enter only digits!","val-number":"Please enter a number!","val-range":"Please enter a number between 1 and 5!","val-terms":"You must agree to the service terms!"}})},r=function(){jQuery(".js-validation-material").validate({ignore:[],errorClass:"help-block text-right animated fadeInDown",errorElement:"div",errorPlacement:function(e,r){jQuery(r).parents(".form-group > div").append(e)},highlight:function(e){var r=jQuery(e);r.closest(".form-group").removeClass("has-error").addClass("has-error"),r.closest(".help-block").remove()},success:function(e){var r=jQuery(e);r.closest(".form-group").removeClass("has-error"),r.closest(".help-block").remove()},rules:{"val-username2":{required:!0,minlength:3},"val-email2":{required:!0,email:!0},"val-password2":{required:!0,minlength:5},"val-confirm-password2":{required:!0,equalTo:"#val-password2"},"val-select22":{required:!0},"val-select2-multiple2":{required:!0,minlength:2},"val-suggestions2":{required:!0,minlength:5},"val-skill2":{required:!0},"val-currency2":{required:!0,currency:["$",!0]},"val-website2":{required:!0,url:!0},"val-phoneus2":{required:!0,phoneUS:!0},"val-digits2":{required:!0,digits:!0},"val-number2":{required:!0,number:!0},"val-range2":{required:!0,range:[1,5]},"val-terms2":{required:!0}},messages:{"val-username2":{required:"Please enter a username",minlength:"Your username must consist of at least 3 characters"},"val-email2":"Please enter a valid email address","val-password2":{required:"Please provide a password",minlength:"Your password must be at least 5 characters long"},"val-confirm-password2":{required:"Please provide a password",minlength:"Your password must be at least 5 characters long",equalTo:"Please enter the same password as above"},"val-select22":"Please select a value!","val-select2-multiple2":"Please select at least 2 values!","val-suggestions2":"What can we do to become better?","val-skill2":"Please select a skill!","val-currency2":"Please enter a price!","val-website2":"Please enter your website!","val-phoneus2":"Please enter a US phone!","val-digits2":"Please enter only digits!","val-number2":"Please enter a number!","val-range2":"Please enter a number between 1 and 5!","val-terms2":"You must agree to the service terms!"}})};return{init:function(){e(),r(),jQuery(".js-select2").on("change",function(){jQuery(this).valid()})}}}();jQuery(function(){BaseFormValidation.init()});