import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Platform } from 'ionic-angular';
declare var ble_secret: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  submitted: boolean = false;
  beforeText: string;
  afterText: string;




  constructor(public navCtrl: NavController, public platForm: Platform) {
  }

  submit(form: NgForm) {
    var temp = this;
    this.submitted = true;
    if (form.valid) {
      if (this.beforeText == '' && this.afterText == '') {
        return;
      }
      if (this.beforeText != '')
      {
        ble_secret.encode(this.beforeText,  function(success) {
          temp.afterText = success;
        }, function (error) {
          alert(error);
        });
        this.beforeText = '';
      } else if (this.afterText != '')
      {
        ble_secret.secret.decode(this.afterText, function (success) {
          temp.beforeText = success;
        }, function (error) {
          alert(error);
        });
        this.afterText = '';
      }
      this.submitted = false;
    }
  }
}
