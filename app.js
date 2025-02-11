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
    const emailBody = `Message: ${message}\n\nName: ${name}\nEmail: ${email}`;

    // URL encode the email body and subject
    const encodedEmailBody = encodeURIComponent(emailBody);
    const encodedSubject = encodeURIComponent(subject);

    // Compose the mailto link with the recipient email, encoded subject, and encoded email body
    const mailtoLink = `mailto:sagnik.rik.das@gmail.com?subject=${encodedSubject}&body=${encodedEmailBody}`;

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


const skillsData = [
    { title: "javascript", progress: 95, className: "js" },
    { title: "C++ Programming Language", progress: 90, className: "cpp" },
    { title: "Java Programming Language", progress: 75, className: "java" },
    { title: "Data Structures and Algorithms (DSA)", progress: 95, className: "dsa" },
    { title: "SQL", progress: 90, className: "sql" },
    { title: "html & css", progress: 90, className: "html" },
    { title: "ReactJS", progress: 80, className: "react" },
    { title: "NodeJS", progress: 80, className: "node" },
    { title: "ExpressJS", progress: 95, className: "express" },
    { title: "MongoDB", progress: 85, className: "mongo" },
    { title: "NextJS", progress: 55, className: "next" },
    { title: "CSS Frameworks: Tailwind and Bootstrap", progress: 80, className: "framework" },
    { title: "C Programming Language", progress: 95, className: "c" },
    { title: "Python", progress: 50, className: "python" }
];

function createSkillElement(skill) {
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');

    const progTitle = document.createElement('p');
    progTitle.classList.add('prog-title');
    progTitle.textContent = skill.title;

    const progressCon = document.createElement('div');
    progressCon.classList.add('progress-con');

    const progText = document.createElement('p');
    progText.classList.add('prog-text');
    progText.textContent = `${skill.progress}%`;

    const progress = document.createElement('div');
    progress.classList.add('progress');

    const span = document.createElement('span');
    span.classList.add(skill.className);
    span.style.width = `${skill.progress}%`;

    progress.appendChild(span);
    progressCon.appendChild(progText);
    progressCon.appendChild(progress);
    progressBar.appendChild(progTitle);
    progressBar.appendChild(progressCon);

    return progressBar;
}

document.addEventListener('DOMContentLoaded', () => {
    const progressBarsContainer = document.querySelector('.progress-bars');

    skillsData.forEach(skill => {
        const skillElement = createSkillElement(skill);
        progressBarsContainer.appendChild(skillElement);
    });
});