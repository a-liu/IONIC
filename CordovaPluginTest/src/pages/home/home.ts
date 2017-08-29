import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Platform } from 'ionic-angular';
declare var window: any;
// interface Window {
//   sqlitePlugin: any;
//   secret: any;
// }
// declare var window: Window;
declare var cordova: any;
declare var window: any;
// declare var cordova: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  submitted: boolean = false;
  beforeText: string;
  constructor(public navCtrl: NavController, public platForm: Platform) {
    // platForm.ready().then(() => {
    //   if (cordova && cordova.InAppBrowser) {
    //     window.open = cordova.InAppBrowser.open;
    //   }
    // });
  }
  // getIpAddress() {
  //   alert('getIpAddress');
  //   if ('undefined' != typeof networkinterface) {
  //     networkinterface.getIPAddress(function (ip) {
  //       alert(ip);
  //     });
  //   }
  // }
  submit(form: NgForm) {
    this.submitted = true;
    // var db = (<any>window).sqlitePlugin.openDatabase({name: "my.db"});
    if (form.valid) {
      // this.getIpAddress();
      // alert(this.beforeText)
      this.beforeText = '';
      this.submitted = false;
      // this.platForm.ready().then(
      //   function doSomeThing() {
      //     (<any>window).secret.coolMethod('hello');
      //   }
      // );
      // this.platForm.ready().then(
      //   () => {
      //     console.log("MyApp::constructor platform.ready");
      //     cordova.plugins.backgroundMode.setDefaults({
      //       title: 'My App Name',
      //       text: 'Active in background...'});
      //     cordova.plugins.backgroundMode.enable();
      //   }
      // );
      // cordova.plugins.
      // if (this.platForm){
      //   alert(this.platForm.version());
      // }
      // for(var i=0;i<window.plugins.count;i++) {
      //   alert(window.plugins[i].name);
      // }
      // if (!window.networkinterface) {
      //   alert('networkinterface is not avialable');
      // }
      window.plugins.secret.coolMethod('hello');
      // if (!window.BleSecret) {
      //   alert('ble_secret is not avialable');
      // }

      // if (!(<any>window).ble_secret) {
      //   alert('ble_secret is not avialable');
      // }
      // ble_secret.coolMethod('hello');
    }
  }
}
