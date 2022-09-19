function signIn(element) {
    let state = element.textContent;

    if(state === "Login") {
        element.textContent = "Log Out";
    } else {
        element.textContent = "Login"
    }
}

function removeButton(element) {
    element.remove();
}

function alertUser() {
    alert("Ninja was Liked!");
}