let inputs = document.querySelectorAll('.inputSignup')

let validationForms = function(){
    for(let i = 0; i < inputs.length; i++)
    {
        if(!inputs[i].classList.contains('error') && inputs[i].value == '')
        {
            inputs[i].classList.add('error')   
            inputs[i].placeholder = ''
            inputs[i].style.border = '2px solid var(--Red400)'
        }
        else if(inputs[i].classList.contains('error') && inputs[i].value != '')
        {
            inputs[i].classList.remove('error')
        }
    }
}

let submit = document.querySelector('#submit')
submit.addEventListener('click', validationForms)

let placeholders = [['firstName', 'First Name'], ['lastName', 'Last Name'], ['email', 'Email Address'], ['password', 'Password']]

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('mouseout', function(){
        for(let p = 0; p < placeholders.length; p++){
            if(inputs[i].id == placeholders[p][0])
            inputs[i].placeholder = placeholders[p][1]
            inputs[i].style.textAlign = 'center' 
        }
    })
}