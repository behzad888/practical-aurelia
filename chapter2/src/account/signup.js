import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Auth} from 'resources/index';
@inject(Auth, Router)
export class SignUp {
  email = null;
  password = null;
  message = null;

  constructor(authManager, router) {
    // this.auth = auth;
    this.aureliaFirebase = authManager;
    this.router = router;
  }

  signUp() {
    this.aureliaFirebase.createUserAndSignIn(this.email, this.password)
      .then(() => {
        this.router.navigateToRoute('accountIndex');
      })
      .catch((e) => {
        this.message = e.message;
      });
  }
}
