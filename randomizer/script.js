function addOptions(num){
    for (let x = 0; x < num; x++) {
        var input = document.createElement('input');
        input.setAttribute('input[x]')
    }
};


var formfield = document.getElementById('formfield');

function add(){
  const newField = document.createElement('input');
  newField.setAttribute('type','text');
  
  newField.setAttribute('class','options');
  
  newField.setAttribute('placeholder','Some other option');
  formfield.appendChild(newField);
};

function remove(){
  var input_tags = formfield.getElementsByTagName('input');
  if(input_tags.length > 2) {
    formfield.removeChild(input_tags[(input_tags.length) - 1]);
  }
};


/*  Functional vars  */

// Get user inputs
var userInput = document.getElementsByClassName('options');
var itr = document.getElementsByName('itr')[0];

  // array of options
var arrayOptions = [];
var arrayCount = [];



function createArray(){

  for(x=0;x<userInput.length;x++){
  console.log(x);
  arrayOptions[x] = (String((userInput[x].value)));
  
  }
};

function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}


function createOuput(text,num,cl){
  let div = document.createElement('div');
  let textNode = document.createTextNode(text);
  div.appendChild(textNode);
  output.appendChild(div);

  if (cl == 1){
    div.classList.toggle('flash')
  }
  
  if (num == 1) {
      let br = document.createElement('BR');
      output.appendChild(br)
  }

}




function getResults(){
    createArray();
    var arrayCount = [];
    console.log(arrayCount);
    for (x=0;x<userInput.length;x++) {
      arrayCount[x] = 0
    };

    let myNode=document.getElementsByClassName('output');
    myNode.output.textContent = ''

    console.log(arrayCount);

    for (x=0;x<itr.value;x++) {

          arrayCount[Math.floor(Math.random() * userInput.length)]+=1;
          console.log(arrayCount);
      }
      var winner = indexOfMax(arrayCount);
      console.log(winner);

      let question = document.getElementsByName('question');

      output = document.getElementById('output');
      output.removeAttribute('hidden');

      let quest = 'Question: '+question[0].value+'\n\n\n';
      let textWin = 'The Winner is: '+arrayOptions[winner];
      let tempNode2 = 'With the below results:';

      createOuput(quest,1,0);
      createOuput(textWin,1,1);
      createOuput(tempNode2,1,0)

      

      
      for (x=0;x<userInput.length;x++){
        let arrayWin = userInput[x].value+': '+arrayCount[x]
        createOuput(arrayWin,0);     
      }
      


}