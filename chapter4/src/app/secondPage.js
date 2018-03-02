import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class SecondPage{
    constructor(router){
        this.router = router;
    }

    activate() {
        let that = this;
        function OnBackPress(e) {
            that.router.navigateBack();
        }
        document.addEventListener("backbutton", OnBackPress, false);
    }

    attached(params, routeConfig) {
        let that = this;
        function onBatteryStatus(status) {
            that.status = status.level;
            that.isPlugged = status.isPlugged;
        }
        document.addEventListener("batterystatus", onBatteryStatus, false);

        function onBatteryLow(status) {
            that.batteryLow = true;
        }
        document.addEventListener("batterylow", onBatteryStatus, false);
    }
}