const portfolioData = [
    {
        title: "Popcorn Portal",
        description: "Popcorn Portal is a ReactJS project that serves as a movie and TV series browsing application. It provides users with a platform to explore trending, top-rated, and most viewed movies and TV shows. The homepage showcases these listings, giving users a quick glimpse into the hottest entertainment options.",
        image: "images/popcorn-portal.png",
        github: "https://github.com/bipsig/popcorn-portal-dev-project",
        live: "https://popcorn-portal.netlify.app/"
    },
    {
        title: "Social Spark",
        description: "Social Spark is a MERN project that brings social media to life. With user registration, login, and seamless post creation via image uploads, it's a hub for sharing moments. Users can engage by liking, commenting, and forming connections through friend requests. Join us in building a dynamic online community where every click sparks a new connection.",
        image: "images/social-spark.png",
        github: "https://github.com/bipsig/social-spark-dev",
        live: "https://socialspark.vercel.app/"
    },
    {
        title: "One Stop Haven",
        description: "One Stop Haven, where all your favorite products come together in one convenient place. This project is built using Next.js, fetching backend data from the open-source API, FakeStoreAPI. With Tailwind CSS for design and fetch API calls for network requests, this is an e-commerce website offering a seamless shopping experience.",
        image: "images/one-stop-haven.png",
        github: "https://github.com/bipsig/one-stop-haven-dev",
        live: "https://one-stop-haven.netlify.app/"
    },
    {
        title: "Bite Buddy",
        description: "BiteBuddy is an online food delivery system designed using HTML, CSS, and JavaScript. This project was initially built as a personal learning project to gain proficiency in basic web development technologies. BiteBuddy provides users with a convenient platform to order food from various restaurants.",
        image: "images/bite-buddy.png",
        github: "https://github.com/bipsig/bite-buddy-dev",
        live: "https://bitebuddy.vercel.app/"
    },
    {
        title: "Photo Gallery App",
        description: "This React-based photo gallery app showcases a dynamic and engaging way to display a collection of photos. Built with a focus on interactive user experience, the app allows you to seamlessly explore multiple images while offering a detailed view of each photo through an intuitive modal.",
        image: "images/photo-gallery-app.png",
        github: "https://github.com/bipsig/photo-gallery-app",
        live: "https://photo-gallery-sagnik.netlify.app/"
    },
    {
        title: "Kanban App",
        description: "A Kanban board app built using React, where you can manage tasks across different lists. Perform Create, Read, Update, and Delete (CRUD) operations on the cards, and enjoy the flexibility of draggable components powered by React Draggable. Tasks can be easily organized by dragging them from one list to another.",
        image: "images/kanban-app.png",
        github: "https://github.com/bipsig/kanban-app",
        live: "https://sagnik-kanban-app.vercel.app/"
    },
    {
        title: "Text Utilities",
        description: "This project was created as an introduction to ReactJS, utilizing Bootstrap components for various UI elements. The application features React routing and implements both light and dark modes for a better user experience. With this app, users can format their text in different ways, generate lorem ipsum, copy text, clear text, and even import text from external files.",
        image: "images/text-utilities-light.png",
        github: "https://github.com/bipsig/text-utilities",
        live: "https://text-utilities.netlify.app/"
    },
    {
        title: "Tindog - Tinder for Dogs",
        description: "Tindog was created as a fun project to learn and practice basic HTML and CSS concepts. It serves as a conceptual Tinder-like platform but for dogs. The website uses Bootstrap for responsive design and Font Awesome for icons. It also incorporates Google Fonts to enhance the typography.",
        image: "images/tindog.png",
        github: "https://github.com/bipsig/tindog-bipsig",
        live: "https://bipsig.github.io/tindog-bipsig/"
    }
];

function createPortfolioItem(portfolio) {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');

    const portfolioImage = document.createElement('div');
    portfolioImage.classList.add('portfolio-image');

    const img = document.createElement('div');
    img.classList.add('img');
    const image = document.createElement('img');
    image.src = portfolio.image;
    image.alt = portfolio.title;
    img.appendChild(image);

    const hoverItems = document.createElement('div');
    hoverItems.classList.add('hover-items');
    const hoverTitle = document.createElement('h3');
    hoverTitle.textContent = "Project Source";
    const icons = document.createElement('div');
    icons.classList.add('icons');

    const githubLink = document.createElement('a');
    githubLink.href = portfolio.github;
    githubLink.classList.add('icon');
    githubLink.target = "_blank";
    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fa-brands', 'fa-github');
    githubLink.appendChild(githubIcon);

    const liveLink = document.createElement('a');
    liveLink.href = portfolio.live;
    liveLink.classList.add('icon');
    liveLink.target = "_blank";
    const liveIcon = document.createElement('i');
    liveIcon.classList.add('fa-solid', 'fa-globe');
    liveLink.appendChild(liveIcon);

    icons.appendChild(githubLink);
    icons.appendChild(liveLink);
    hoverItems.appendChild(hoverTitle);
    hoverItems.appendChild(icons);

    portfolioImage.appendChild(img);
    portfolioImage.appendChild(hoverItems);

    const portfolioItemText = document.createElement('div');
    portfolioItemText.classList.add('portfolio-item-text');
    const title = document.createElement('h4');
    title.textContent = portfolio.title;
    const description = document.createElement('p');
    description.textContent = portfolio.description;

    portfolioItemText.appendChild(title);
    portfolioItemText.appendChild(description);

    portfolioItem.appendChild(portfolioImage);
    portfolioItem.appendChild(portfolioItemText);

    return portfolioItem;
}

document.addEventListener('DOMContentLoaded', () => {
    const portfoliosContainer = document.querySelector('.portfolios');

    portfolioData.forEach(portfolio => {
        const portfolioItem = createPortfolioItem(portfolio);
        portfoliosContainer.appendChild(portfolioItem);
    });
});