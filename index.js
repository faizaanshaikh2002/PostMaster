console.log("hi");

// Utility Functions
// 1. Utility Function to get DOM element from String
function getElementFromString(string){
    let div = document.createElement('div')
    div.innerHTML = string
    return div.firstElementChild
}

// Initialize no of parameters
let addedParamscount = 0;

// Hiding the parameters Box initially
let parametersBox = document.getElementById("parametersBox")
parametersBox.style.display = "none"

// Hide the Json Box if parametrs type is selected in content type
let paramsRadio = document.getElementById("paramsRadio")
paramsRadio.addEventListener('click', () => {
    document.getElementById("requestJsonBox").style.display = 'none'
    document.getElementById("parametersBox").style.display = 'block'
})

// Hide the parameters Box if json type is selected in content type
let jsonRadio = document.getElementById("jsonRadio")
jsonRadio.addEventListener('click', () => {
    document.getElementById("parametersBox").style.display = 'none'
    document.getElementById("requestJsonBox").style.display = 'block'
})

// If user clicks on add button, add parameter box
let addParam = document.getElementById("addParam")
addParam.addEventListener('click', () => {
    let params = document.getElementById("params");
    let string = `<div class="form-row my-2">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamscount + 2}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${addedParamscount + 2}" placeholder="Enter Parameter ${addedParamscount + 2} Key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${addedParamscount + 2}" placeholder="Enter Parameter ${addedParamscount + 2} Value">
                    </div>
                    <button class="btn btn-primary deleteParam"> - </button>
                </div>`
    // Converting String to DOM Element Node
    let paramElement = getElementFromString(string)
    params.appendChild(paramElement)
    let deleteParam = document.getElementsByClassName("deleteParam");
        for(items of deleteParam){
            items.addEventListener('click', (e)=>{
                e.target.parentElement.remove()
            })
        }
    addedParamscount++;
})

// If te users Clicks on Submit button
let submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', ()=>{
    // Show fetching in response box to 
    document.getElementById('responseJsonText').value = "Please wait.. Fetching response.."

    // Fetch all the values User has entered
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name = 'requestType']:checked").value;
    let contentType = document.querySelector("input[name = 'contentType']:checked").value;
    console.log(url)
    console.log(requestType)
    console.log(contentType)
})