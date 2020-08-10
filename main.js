let firtName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let email = document.querySelector('#email')
let telephone = document.querySelector('#telephone')
let date = document.querySelector('#date')
let hour = document.querySelector('#hour')
let form = document.querySelector('form')

//let url = 'http://localhost:8000/posts'
let url = 'https://api-de-test.herokuapp.com/posts'



form.addEventListener('submit', function(e){
    e.preventDefault()  
    
    let name = firtName.value + ' ' + lastName.value
    
    let body = {
        //"id": 3,
        "name": name,
        "email": email.value,
        "telephone": telephone.value,
        "date": date.value,
        "hour": hour.value
    }
    
    
    fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'    },
    body: JSON.stringify(body),
    })
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log('Success: ', JSON.stringify(response))

        alert(
        `Agendamento Realizado: 
        Nome ${name}
        Email: ${email.value} 
        Telefone: ${telephone.value} 
        Data: ${date.value} 
        Hora: ${hour.value}
        `
        )
        if (window.confirm("Deseja Consultar o registro realizado?")) { 
            //window.open('http://localhost:8000/posts', "Obrigado por agendar conosco!");
            window.open('https://api-de-test.herokuapp.com/posts', "Obrigado por agendar conosco!");
        }
    })
    .catch(error => console.error('Error:', error))

})



/*
let body = {
    //"id": 3,
    "name": 'a',
    "email": 'a',
    "telephone": 'a',
    "date": 'a',
    "hour": 'a'
}


fetch(url, {
method: 'POST',
headers: {'Content-Type': 'application/json'    },
body: JSON.stringify(body),
})
.then(function(response){
    return response.json();
})
.then(function(response){
    console.log('Success: ', JSON.stringify(response))
})
.catch(error => console.error('Error:', error))

*/
