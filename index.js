const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let passwordLength = 15
let password = ""
let passOneEl = document.getElementById("passOne-El")
let passTwoEl = document.getElementById("passTwo-El")


function generate(){
    passOneEl.textContent = genPassword()
    passTwoEl.textContent = genPassword()
}
function genPassword(){
    password = ""
    console.log(passwordLength)
    for(let i=0; i<passwordLength;i++){
        password += characters[Math.floor(Math.random()*characters.length)]
    }
    return password
}
//call the copy from an eventlistener click rather that an onclick
// look at fruit sorter scrim for code
passOneEl.addEventListener("click", function() {
    const selection = this.textContent;
    navigator.clipboard.writeText(selection).then(
        function(){
            alert("Password copied successfully"); // success 
        })
      .catch(
         function() {
            alert("Error"); // error
      });
        })

passTwoEl.addEventListener("click", function() {
    const selection = this.textContent;
    navigator.clipboard.writeText(selection).then(
        function(){
            alert("Password copied successfully"); // success 
        })
      .catch(
         function() {
            alert("Error with copying"); // error
      });
    })



