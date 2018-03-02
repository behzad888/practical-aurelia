import {inject} from 'aurelia-framework';
import {Auth} from 'resources/index';

@inject(Auth)
export class Account {

  newEmail = null;
  newPassword =  null;
  password = null;

  constructor(authManager) {
    this.authManager = authManager;
  }

  update() {

  }
}
