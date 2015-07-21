import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
    configureRouter(config, router){
        config.title = 'Aurelia';
        config.map([
            { route: ['','home'], name: 'Home',  moduleId: './home/home', nav: true, title:'Home' },
            { route: ['tournaments'], name: 'Tournaments',  moduleId: './tournaments/tournaments', nav: true, title:'Tournaments' } 
        ]);

        this.router = router; 
    }
}