let firtName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let email = document.querySelector('#email')

let name = firtName.value + ' ' + lastName

email.addEventListener('click', function(){
    console.log(name)

})
