const timelineData = [
    {
        icon: "fa-solid fa-briefcase",
        duration: "Sept, 2024 - Current",
        title: "Associate Software Engineer",
        subtitle: "Tech Mahindra",
        description: "Started my career in software development with extensive training in industry tools and best practices. Gained hands-on experience working on real-world projects and collaborating in a dynamic tech environment."
    },
    {
        icon: "fa-solid fa-briefcase",
        duration: "May, 2023 - July, 2023",
        title: "SDET Intern",
        subtitle: "Piramal Capital and Housing Finance Limited",
        description: "My enriching experience as an SDET intern at Piramal Finance introduced me to the realms of work ethics and the professional environment. Alongside, I dived into the world of software development, collaborating on diverse UI projects that added a valuable touch to my journey."
    },
    {
        icon: "fa-solid fa-briefcase",
        duration: "2020 - 2024",
        title: "Nurturing the Engineer Within",
        subtitle: "National Institute of Technology, Patna",
        description: "Embarking on my B.Tech. journey, these years have been filled with a relentless pursuit of engineering excellence. I am enthusiastically honing my skills and knowledge to make a mark in the world of technology."
    },
    {
        icon: "fa-solid fa-briefcase",
        duration: "2018 - 2020",
        title: "Advancing into Higher Education",
        subtitle: "DAV Model School, CFRI",
        description: "During these critical years, I focused on my +2 study. I attained noteworthy academic achievement with effort and perseverance, obtaining 96% in the CBSE Examinations."
    },
    {
        icon: "fa-solid fa-briefcase",
        duration: "2007 - 2018",
        title: "Formative Years",
        subtitle: "De Nobili School, CFRI",
        description: "During this period, I pursued my academic education up to Class 10, achieving remarkable success in my studies and securing a percentage of 92.2% in the 10th board examinations."
    }
];


function createTimelineItem(item) {
    const timelineItem = document.createElement('div');
    timelineItem.classList.add('timeline-item');

    const timelineIcon = document.createElement('div');
    timelineIcon.classList.add('timeline-icon');
    const icon = document.createElement('i');
    icon.className = item.icon;
    timelineIcon.appendChild(icon);

    const timelineDuration = document.createElement('p');
    timelineDuration.classList.add('timeline-duration');
    timelineDuration.textContent = item.duration;

    const timelineTitle = document.createElement('h5');
    timelineTitle.textContent = item.title;
    const subtitle = document.createElement('span');
    subtitle.textContent = ` - ${item.subtitle}`;
    timelineTitle.appendChild(subtitle);

    const timelineDescription = document.createElement('p');
    timelineDescription.textContent = item.description;

    timelineItem.appendChild(timelineIcon);
    timelineItem.appendChild(timelineDuration);
    timelineItem.appendChild(timelineTitle);
    timelineItem.appendChild(timelineDescription);

    return timelineItem;
}

document.addEventListener('DOMContentLoaded', () => {
    const timelineItemsContainer = document.querySelector('.timeline-items');

    timelineData.forEach(item => {
        const timelineItem = createTimelineItem(item);
        timelineItemsContainer.appendChild(timelineItem);
    });
});