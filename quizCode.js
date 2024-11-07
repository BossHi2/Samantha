const quizInput = document.getElementsByClassName("quizInput")[0];
const presentCheckbox = document.getElementById("present");
const imperfectCheckbox = document.getElementById("imperfect");

word = [];
tenses = {};

window.addEventListener("click", e =>{
    addButton()
})

window.addEventListener("keyup", e =>{
    addButton()
})

function addButton(){
    let inputValue = quizInput.value;
    inputValue = inputValue.replace(/\s/g, "");
    inputValue = inputValue.replace("\n", "");

    if((presentCheckbox.checked || imperfectCheckbox.checked) && (inputValue != "")){
        if(document.getElementsByClassName("generateQuiz").length == 0){
            const quizInputWrapper = document.getElementsByClassName("buttonWrapper")[0];
            var button = document.createElement("a");
            var text = document.createTextNode("Generate!")
            button.appendChild(text)
            button.classList.add("generateQuiz")
            button.href = "quizzingPage.html"
            quizInputWrapper.appendChild(button)
        }
    } else{
        if(document.getElementsByClassName("generateQuiz").length != 0){
            document.getElementsByClassName("generateQuiz")[0].remove();
        }
    }
}

function generate(){
    temp = quizInput.value;
    word = temp.split("\n");
    for(i = 0; i<word.length; i++){
        word[i] = word[i].trim();
        if(word[i] == ""){
            word.splice(i, 1)
            i--
        }
    }

    tenses = {
        "present":presentCheckbox.checked, 
        "imperfect": imperfectCheckbox.checked,
    }
    console.log(word)
    
}

//<button class="generateQuiz" onclick="generate()">Generate!</button>