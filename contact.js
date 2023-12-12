
const form = document.querySelector('message');
form.addEventListener('submit', (event)=> {
    event.preventDefault();

    const data = new FormData(form);

    const emaildata = data.get('email');
    const subjectdata = data.get('subject');
    const messagedata = data.get('messagetxt');

});

