
const form = document.getElementById('form');
const cardNumberView = document.querySelector('.card-number-view');
const cardNameView = document.querySelector('.card-name-view');
const cvcView = document.querySelector('.card-cvc-view');
const botao = document.querySelector('.botao');
const selectView = document.querySelector('.card-date00-view');

//cartao valido 4539148803436467

botao.innerHTML = 'Register your card';

botao.addEventListener('click', function(e) {
    e.preventDefault(); 
    const cardnumberValid = document.querySelector('.card-number').value;
    
    

    
        const monthNumber = document.getElementById('MM').value;
    const yearNumber = document.getElementById('YY').value;
    selectView.innerHTML = monthNumber + '/' + yearNumber;

    botao.innerHTML = 'Creating your card...';
    setInterval(function() {
        botao.innerHTML = 'Card created!';
    }, 2000);
    }

    
    
    
);

function listenType() {

    form.addEventListener('keyup', function() {

    
    
    const cardnumber = document.querySelector('.card-number').value;
    const cardname = document.querySelector('.card-name').value;
    const cvc = document.querySelector('.cvcInput');

    
    
    //number replace 
    const cardNumberViewReplace = cardnumber.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');

    
    
    
    cardNameView.innerHTML = cardname;

    cardNumberView.innerHTML = cardNumberViewReplace;

    cvcView.innerHTML = cvc.value;
  

   
    

    

    
})
}

listenType()


//validacao de cartao 


