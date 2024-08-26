class App{
    constructor(){
        this.serverName = 'Local Host';

        document.querySelector('button')
        .addEventListener('click',this.getServerName.bind(this));

    }

    getServerName(){
        console.log(this.serverName);
        // console.log('In Get User Method');
    }
}




const app = new App();

