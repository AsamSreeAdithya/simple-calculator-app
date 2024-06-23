function clearDisplay(){
    document.getElementById('display').innerHTML = '0';
}

function appendToDisplay(value){

    const display = document.getElementById('display');
    if (display.innerHTML === '0'){
        display.innerHTML = value;
    }else{
        display.innerHTML += value;
    }

}


function cal(){
    const display = document.getElementById('display');
    try{
        display.innerHTML = eval(display.innerHTML)

    }catch(error){
        display.innerHTML = 'error'
    }

    
}