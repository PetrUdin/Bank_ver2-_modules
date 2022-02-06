import './styles/main.scss';
// import { config } from './modules/app';
// import Footer from './modules/footer'
// import './modules/header'
// const sayHello = () => console.log('hello');
// sayHello();
// console.log(config.key);
// const footer = new Footer('Hi from footer');
// footer.log()

import Calc from './modules/calc/calc';

import Application from './modules/application/application';
document.addEventListener('DOMContentLoaded', () => {
    let calc = new Calc();
    calc.render();
       let application = new Application();
    application.render();
})