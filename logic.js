
let cursor = document.getElementById('screen').focus();  //for cursor

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons){
    item.addEventListener('click' ,(e)=>{
        buttonText = e.target.innerText;
        console.log("Button text is", + buttonText);
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if(buttonText == 'AC'){
            screenValue = " ";
            screen.value = screenValue;
        }

        else if( buttonText == 'BC'){
            screenValue = screenValue.substring(0,screenValue.length - 1);
            screen.value = screenValue;
        }

        else if (buttonText == '='){
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }

        else{
            
            screenValue += buttonText ;
            screen.value = screenValue;
        }
    })
}

