const blogData = [
    {
        image: "images/blog-2.avif",
        title: "Demystifying Data Structures and Algorithms with STL: A Programmer's Guide to Effective Problem-Solving",
        link: "https://sagniks-code-chronicles.hashnode.dev/demystifying-data-structures-and-algorithms-with-stl-a-programmers-guide-to-effective-problem-solving",
        description: "From Novice to Ninja: My Enthralling Adventure with the Standard Template Library (STL), Data Structures, and Algorithms in Programming"
    },
    {
        image: "images/blog-1.avif",
        title: "Coding Chronicles: An Odyssey of Learning, Inspiration, and the Joy of Sharing as a Software Developer",
        link: "https://sagniks-code-chronicles.hashnode.dev/coding-chronicles-an-odyssey-of-learning-inspiration-and-the-joy-of-sharing-as-a-software-developer",
        description: "A Dev's Journey into the Enchanting Realms of Code, Motivation, and Knowledge Exchange"
    }
];

function createBlogItem(blog) {
    const blogItem = document.createElement('div');
    blogItem.classList.add('blog');

    const blogImage = document.createElement('img');
    blogImage.src = blog.image;
    blogImage.alt = blog.title;

    const blogText = document.createElement('div');
    blogText.classList.add('blog-text');

    const blogLink = document.createElement('a');
    blogLink.href = blog.link;
    blogLink.target = "_blank";

    const blogTitle = document.createElement('h4');
    blogTitle.textContent = blog.title;

    const blogDescription = document.createElement('p');
    blogDescription.textContent = blog.description;

    blogLink.appendChild(blogTitle);
    blogText.appendChild(blogLink);
    blogText.appendChild(blogDescription);

    blogItem.appendChild(blogImage);
    blogItem.appendChild(blogText);

    return blogItem;
}

document.addEventListener('DOMContentLoaded', () => {
    const blogsContainer = document.querySelector('.blogs-container');

    blogData.forEach(blog => {
        const blogItem = createBlogItem(blog);
        blogsContainer.appendChild(blogItem);
    });
});