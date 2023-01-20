'use strict';

//Inputs
const inputs = document.querySelectorAll('.input'); //nodeList, not an array, less methods available

function handleChange(){
    //dataset is an object with all data- attributes specified in our HTML
    const suffix = this.dataset.sizing || '';
    //Select the entire document, use the input names
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    if(this.name === 'color' && this.value === "#000000"){
        document.documentElement.style.setProperty('--text', '#ffffff');
    }
}

//Add event listener to each input
inputs.forEach(input => input.addEventListener('change', handleChange))
inputs.forEach(input => input.addEventListener('mousemove', handleChange))