// johannes.js

const firstname = "Johannes" // private
const surname = "Potgieter" // private
export const role = "Intern" // public

// const display= firstname + " " + surname + " (" + role + ")" // private
const display=role
document.querySelector('#johannes').innerText = display