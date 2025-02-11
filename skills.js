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