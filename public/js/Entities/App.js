class App {

    constructor() {
        this.spinner = document.querySelector('.loader');
        return this;
    }
    
    get loading() {
        return !this.spinner.getAttribute('hidden');
    }
    
    set loading(bool) {
        if (!bool)
            this.spinner.setAttribute('hidden', true);
        else
            this.spinner.removeAttribute('hidden');
    }
    
};