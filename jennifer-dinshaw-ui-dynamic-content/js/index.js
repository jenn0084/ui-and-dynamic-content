// Save the reference to text-field into a variable. | <input type="text">
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
// Save the reference to paragraph for feedback | <p class="feedback"></p>

// Start function addItem.
    // Create list-item and store output in a variable.
    // Check if user entered the value in input text-field.
    // If so:
       // Use textContent property on created list-item
       // and assign it with the value of the text written in the text-field
       // Append list item to unordered list.
       // Clear a feedback-message.
       // Clear the text-field.
       // Put the cursor back to text-field  
    // End if. 
    // Otherwise:
       // Print the message nothing entered in the paragraph "feedback"
    // End otherwise.
// End function addItem.
// Register your function addItem for click event on button.
//References to active elements 

const userInput= document.getElementById("user-input");
const btn = document.getElementById("trigger-click");
const displayData = document.getElementById("display-data");
const err = document.querySelector(".error");

//Event Handler
function addItem() {
    //Default value of error paragraph
    err.textContent = null;
    //Removing Whitespace
    userInput.value = userInput.value.trim();
    //If user input is not empty
    if (userInput.value !== ""){ 
        //Create a list item
        let listItem = document.createElement("li");
        //Assigning the value of text-field to the list item
        listItem.textContent = "> " + userInput.value;
        //Appending the new element to DOM
        let hr = document.createElement("hr");
        displayData.appendChild(listItem).appendChild(hr);
    } else {
        err.textContent = "nothing entered in the paragraph.";
    }
    
}

//Registering button for "click" event
btn.addEventListener("click", addItem);