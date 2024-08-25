// POST method
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify(data),
    });
    return response.json(); 
}




// Send button event Page 1
sendBtn.addEventListener("click", async() => {

    // Fething Question from msgbox
    msgboxinput = document.getElementById("msgboxinput").value;
    document.getElementById("msgboxinput").value = "";

    // Changing chat gpt window
    document.querySelector(".right2").style.display = "block"
    document.querySelector(".right1").style.display = "none"

    // Getting Question to next page
    question.innerHTML = msgboxinput;

    // Getting the solution to answer
    let result = await postData("/api",{"question":msgboxinput})
    solution.innerHTML = result.answer  
})

// Send button event Page 2
sendBtn2.addEventListener("click", async() => {

    // Fething Question from msgbox
    msgboxinput2 = document.getElementById("msgboxinput2").value;
    document.getElementById("msgboxinput2").value = "";

    // Replacing present question with new question
    question.innerHTML = msgboxinput2;

    // Getting the solution to answer
    solution.innerHTML = "Loading..."
    let result = await postData("/api",{"question":msgboxinput2})
    solution.innerHTML = result.answer

})

// Prebuilt questions on first page
preq1.addEventListener("click", () => {

    document.getElementById("msgboxinput").value =  "Explain quantum computing in simple terms" ;
})
preq2.addEventListener("click", () => {

    document.getElementById("msgboxinput").value ="Got any creative ideas for a 10 year old’s birthday?";
})
preq3.addEventListener("click", () => {

    document.getElementById("msgboxinput").value = "How do I make an HTTP request in Javascript?";
})


// Getting chat history
let buttons = document.querySelectorAll('.chatbtn');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click',async(e)=>{

    // Changing chat gpt window
    document.querySelector(".right2").style.display = "block"
    document.querySelector(".right1").style.display = "none"
    
    // Fething Question from msgbox
    chatinput = e.target.innerHTML;

    // Replacing question
    question.innerHTML = chatinput;

    // Getting the solution to answer
    solution.innerHTML = "Loading..."
    let result = await postData("/api",{"question":chatinput})
    solution.innerHTML = result.answer

    })
})

// New chat button event
newchatbtn.addEventListener("click", () => {

   location.reload()
  
})


// For enter key event
var input = document.getElementById("msgboxinput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("sendBtn").click();
  }
});

// For enter key event
var input = document.getElementById("msgboxinput2");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("sendBtn2").click();
  }
});