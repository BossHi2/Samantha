const presentCheckbox = document.getElementById("present");
const imperfectCheckbox = document.getElementById("imperfect");

word = {};
tenses = {};

dictionary = {}


start()





function start(){
    fetch('./verbs.json')
    .then(res => res.json())
    .then(data =>{
        dictionary = data
        
    })
    window.addEventListener("click", e =>{
        addButton()
    })
    const parent = document.getElementsByClassName("dropdownMenu")[0];
    

    setTimeout(function(){
        const keys = Object.keys(dictionary)
        for(i = 0; i<keys.length; i++){
            var ul = document.createElement("ul")
            var text = document.createTextNode(keys[i])
            ul.appendChild(text)
            ul.classList.add("verbSelect")

            var onclickString = "selectVerb(document.getElementsByClassName('verbSelect')[" + i + "].innerText);"
            ul.setAttribute("onclick", onclickString)
            parent.appendChild(ul)
        }
    }, 125)

}

function addButton(){

    if((presentCheckbox.checked || imperfectCheckbox.checked) && (Object.keys(word).length != 0)){
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
    tenses = {
        "present":presentCheckbox.checked, 
        "imperfect": imperfectCheckbox.checked,
    }    
}
function selectVerb(verb){
    if(verb in word == false){
        word[verb] = dictionary[verb]

        const parent = document.getElementsByClassName("selectedVerbsWrapper")[0];
    
        var ul = document.createElement("ul")
        var text = document.createTextNode(verb)
        ul.appendChild(text)
        ul.classList.add("selectedVerbs")
        var onclickString = "removeVerb(\"" + verb + "\");"
        ul.setAttribute("onclick", onclickString)
    
        parent.appendChild(ul)
    }
}
function removeVerb(verb){
    delete word[verb]
    var ul = document.getElementsByClassName("selectedVerbs");
    for(i = 0; i<ul.length; i++){
        if(ul[i].innerText == verb){
            ul[i].remove();
            break;
        }
            
    }
}


function filter(){
    const input = document.getElementsByClassName("quizInput")[0]
    const filter = input.value.toUpperCase();
    const div = document.getElementsByClassName("dropdownMenu")[0]
    const ul = div.getElementsByTagName("ul");
    for (let i = 0; i < ul.length; i++) {
        txtValue = ul[i].textContent || ul[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) == 0) {
            ul[i].style.display = "";
        } else {
            ul[i].style.display = "none";
        }
    }
}