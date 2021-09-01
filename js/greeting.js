const loginForm = document.querySelector("#login-form");
const loginFormInput = loginForm.querySelector("input");
const h1Greeting = document.querySelector("#greeting");

HIDDEN_CLASSNAME = "hidden";
USERNAME = "username"

function handleSubmit(event) {
    event.preventDefault();
    const username = loginFormInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    h1Greeting.classList.remove(HIDDEN_CLASSNAME);
    h1Greeting.innerText = `Hello, ${username}`;

    // Localstorage에 username 저장
    localStorage.setItem(USERNAME, username);
}

// 브라우저 새로고침시
function handleOnload() {
    if (localStorage.getItem(USERNAME) != null) {
        // username 저장되어 있음.
        const username = localStorage.getItem(USERNAME);
        loginForm.classList.add(HIDDEN_CLASSNAME);
        h1Greeting.classList.remove(HIDDEN_CLASSNAME);
        h1Greeting.innerText = `Hello, ${username}`;
    }
}

loginForm.addEventListener("submit", handleSubmit);

handleOnload();