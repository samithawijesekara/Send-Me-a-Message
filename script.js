const scriptURL = 'https://script.google.com/macros/s/AKfycby_T62R86bx-FXYZVr6Iu1Z2eZ8vaG6jgEpaktLR7UWL6ik-6bVzTto/exec' //add here google sheets deploying web app url
const form = document.forms['google-sheet']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert("Thanks for Contacting me..! I Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})