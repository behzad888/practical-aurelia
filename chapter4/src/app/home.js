import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class Home{
    constructor(router){
        this.router = router;
    }

    activate(params, routeConfig) {
        let that = this;
        function OnBackPress(e) {
            if(routeConfig.name !== 'home')
                that.router.navigateBack();
            else
                navigator.app.exitApp();
        }
        document.addEventListener("backbutton", OnBackPress, false);
    }

    attached() {
        //Note that this callback will be fired everytime a new token is generated, including the first time.
        FCMPlugin.onTokenRefresh(function(token){
            console.log(token);
        });
    }
}
