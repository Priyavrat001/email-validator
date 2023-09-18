let resultCont = document.getElementById("resultCont");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', async(e)=>{
  e.preventDefault()
  let key = "enter your validation key"
  let email = document.getElementById("email").value
  resultCont.innerHTML = `<img widh="223" src="loader/Spinner-1s-200px.svg" alt="Spinner">`
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url);
  let result = await res.json()
  let str = ``
  for(key of Object.keys(result)){
    if(result[key] !== "" && result[key] !== " ")
    str = str + `<div>${key}: ${result[key]}</div>`
  }
  resultCont.innerHTML = str
})

