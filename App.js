import Contact from './assets/modules/Contact.js';

const App =  () => {
    return `
    ${Contact()}
    
    `
}

document.getElementById('root').innerHTML = App();