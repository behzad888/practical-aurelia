//instagram-service.js
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import 'fetch';
@inject(HttpClient)
export default class InstagramService {
    constructor(httpClient) {
        let clientId = '3872137809.b91ba91.11de5ddc30274a349dd7d09141677115';
        this.http = httpClient;
        this.url = 'https://api.instagram.com/v1/tags/puppy/media/recent?code=19b6dee5c5f24950b026a8cd591a99bb&access_token=' + clientId + '&callback=JSON_CALLBACK'
    }

    fetchPopular(callback) {
        return this.http.jsonp(this.url, 'callback').then(response => {
            callback(response.content.data);
        });
    }
}