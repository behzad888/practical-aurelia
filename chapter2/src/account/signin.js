import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Auth} from 'resources/index';

@inject(Auth, Router)
export class SignIn {
  email = null;
  password = null;
  message = null;

  constructor(authManager, router) {
    this.authManager = authManager;
    this.router = router;
  }

  signIn() {
    this.message = null;
    this.authManager.signIn(this.email, this.password)
      .then(() => {
        this.router.navigateToRoute('accountIndex');
      })
      .catch((e) => {
        this.message = e.message;
      });
  }
}
