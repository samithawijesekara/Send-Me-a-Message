const scriptURL = 'https://script.google.com/macros/s/AKfycby_T62R86bx-FXYZVr6Iu1Z2eZ8vaG6jgEpaktLR7UWL6ik-6bVzTto/exec' //add here google sheets deploying web app url
const form = document.forms['google-sheet']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => window.location.replace("send.html"))
        .catch(error => window.location.replace("error.html"))
})