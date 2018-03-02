// app.js
import {inject} from 'aurelia-framework';
import InstagramService from './instagram-service';
@inject(InstagramService)
export class App {
    constructor(instagramService) {
        //Here we set some default values:
        this.layout = 'grid';
        this.pics = [];
        this.instagramService = instagramService;
    }

    activate() {
        let that = this;
        this.instagramService.fetchPopular(function (data) {
            // Assigning the pics array will cause the view
            // to be automatically redrawn by Aurelia.
            that.pics = data;
        })
    }
}