import { inject } from 'aurelia-framework';
import { Endpoint } from 'aurelia-api';
import { Router } from 'aurelia-router';

@inject(Endpoint.of('api'), Router)
export class AddOrdit {
    domain = {
        firstName: '',
        lastName: ''
    }
    id = '';

    constructor(apiEndpoint, router) {
        this.apiEndpoint = apiEndpoint;
        this.router = router;
    }

    activate(params) {
        if (params.id != '') {
            this.id = params.id;
            this.apiEndpoint.findOne('customers', this.id)
                .then(customer => {
                    this.domain = customer
                });
        }
    }

    submit() {
        this.apiEndpoint.update('customers', this.id, this.domain)
            .then((res) => {
                this.router.navigate('list');
                console.log('Successful!')
            })
            .catch((err) => {
                console.log('An error occured!')
            });
    }
}