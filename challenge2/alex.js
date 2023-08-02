// alex.js

const firstname = "Alex" // private
const  surname = "Naidoo" // private
export const  role = "Head of Marketing" // public

// const  display= firstname + " " + surname + " (" + role + ")" // private
const display=role
document.querySelector('#alex').innerText = display