let inputs = document.querySelectorAll('.inputSignup')
let submit = document.querySelector('#submit')
let placeholders = [['firstName', 'First Name'], ['lastName', 'Last Name'], ['email', 'Email Address'], ['password', 'Password']]

let validationForms = function(){
    for(let i = 0; i < inputs.length; i++)
    {
        if(!inputs[i].classList.contains('error') && inputs[i].value === '')
        {
            inputs[i].classList.add('error');

            if(inputs[i].id == 'email'){
                inputs[i].placeholder = 'email@example/com'
            }
            else{
                inputs[i].placeholder = '';
            }
        }
    }
}

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('mouseout', function()
    {
        for(let p = 0; p < placeholders.length; p++)
        {
            if(inputs[i].id === placeholders[p][0] && !inputs[i].classList.contains('error'))
            {
                inputs[i].placeholder = placeholders[p][1]
            }
        }
    })

    inputs[i].addEventListener('keydown', function()
    {
        if(inputs[i].classList.contains('error'))
        {
            inputs[i].classList.remove('error')
        }
    })
}

submit.addEventListener('click', validationForms)