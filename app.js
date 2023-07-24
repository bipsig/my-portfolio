const sections = document.querySelectorAll(".section");
const sectionButtons = document.querySelectorAll(".controls");
const sectionButton = document.querySelectorAll(".control");
const wholeSection = document.querySelector(".main-content");

function PageTransitions() {

    for (let i = 0; i < sectionButton.length; i++) {

        sectionButton[i].addEventListener("click", function () {
            let currentButton = document.querySelectorAll(".active-btn");

            currentButton[0].classList = currentButton[0].className.replace("active-btn", "");

            this.className += " active-btn";
        })
    }

    //When one of the buttons is clicked in the control buttons, active class is shifted to that button to give it a different styling. Also active class is shifted to the associated section to render that section and hide the rest of the section.

    wholeSection.addEventListener("click", (e) => {
        const id = e.target.dataset.id;

        if (id) {

            sectionButtons.forEach((button) => {
                button.classList.remove("active");
            })

            e.target.classList.add("active");

            sections.forEach((section) => {
                section.classList.remove("active");
            })

            const element = document.getElementById(id);

            element.classList.add("active");
        }
    })

    //Toggle Light and Dark Mode
    const themeButton = document.querySelector(".theme-button");
    themeButton.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode");
    });
}

PageTransitions();

//Tackling the Send Message Button which is actually a anchor tag to apply required styling. Initially we are obtaining that tag using this function anf then adding an eventListener and checking if it is clicked or not. Once called we call the function sendFormData which opens mail application to send the email and clearFormFields() function to reset the form once submitted.
const sendMessageLink = document.getElementById('sendMessageLink');
sendMessageLink.addEventListener('click', function (event) {
    event.preventDefault();
    sendFormData();
    clearFormFields();
});

function sendFormData() {

    event.preventDefault();
    // Get form data
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Construct the email body with form data
    const emailBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    // URL encode the email body
    const encodedEmailBody = encodeURIComponent(emailBody);

    // Compose the mailto link with the recipient email and encoded email body
    const mailtoLink = `mailto:sagnik.rik.das@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodedEmailBody}`;

    // Open the user's default email client with the pre-filled form data
    window.location.href = mailtoLink;
}

function clearFormFields() {
    // Get form elements and reset their values
    document.querySelector('input[name="name"]').value = '';
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('input[name="subject"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
}