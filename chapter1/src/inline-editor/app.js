export class App {
    constructor() {
        //Here we set some default values:
        this.showtooltip = false;
        this.title = 'Edit me.';
    }

    hideTooltip() {
        // In this case it will hide the tooltip.
        this.showtooltip = false;
    }

    toggleTooltip(e) {
        e.stopPropagation();
        this.showtooltip = !this.showtooltip;
    }
}