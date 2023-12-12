export default class AlertProps {
    visible: boolean = false;
    message = '';
    constructor(visible = false, message = '') {
        this.message = message;
        this.visible = visible;
    }
}