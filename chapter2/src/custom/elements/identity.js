import { inject, customElement } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Auth, User } from 'resources/index';

@customElement('identity')
@inject(Auth, Router)
export class Identity {

  constructor(authManager, router: Router) {
    this.authManager = authManager;
    /*eslint no-unused-vars:0*/
    this.user = authManager.currentUser;
    this.router = router;
  }

  signOut() {
    this.authManager.signOut().then(() => {
      this.router.navigateToRoute('home');
    });
  }
}
