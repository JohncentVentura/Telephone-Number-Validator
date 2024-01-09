const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

checkBtn.addEventListener("click", event => {
    event.preventDefault();

    if (!userInput.value) {
        alert("Please provide a phone number");
    } else {
        let regex = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

        if (regex.test(userInput.value)) {
            resultsDiv.innerText = `Valid US number: ${userInput.value}`;
        } else {
            resultsDiv.innerText = `Invalid US number: ${userInput.value}`;
        }
    }
});

clearBtn.addEventListener("click", event => {
    event.preventDefault();
    userInput.innerText = "";
    userInput.value = "";
    resultsDiv.innerText = "";
});

