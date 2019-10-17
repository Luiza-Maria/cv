import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 

  constructor() { }

  ngOnInit() {
  }

}
$(document).ready(function(){
  $('form').submit(function () {
      var textarea = $(this).find('#textarea');
      var email = $(this).find('#email');
      var password = $(this).find('#pwd');
      $('*').removeClass('error');
      var error = 0;
      var regex = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i;
      if(textarea.val().length < 20 || textarea.val().length > 100) {
          textarea.addClass('error');
          error = 1;
      }
      if (!regex.test(email.val())) {
          email.addClass('error');
          error = 1;
      }
      if (password.val().length < 10) {
          password.addClass('error');
      }
      if (error == 0) {
          $(this).submit();
      } else {
          alert('Completati toate campurile care au bordura rosie');
          return false;
      }
  });
});
