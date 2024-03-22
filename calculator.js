const dispaly = document.getElementById('display');

function plusdisplay (x){
    dispaly.value += x;

}

function calculate() {
    try{
    dispaly.value = eval(dispaly.value);
    }
    catch(error){
        dispaly.value = "Error";
    }
}

function cleardispaly(){
    dispaly.value = "";
}