'use strict';

function postPreview() {
    const posts = document.getElementsByClassName("home-post-content");
    for (let i = 0; i < posts.length; i++) { // for every post entry on the homepage
        let postContent = posts[i].textContent;
        let preview = postContent.slice(0, 110) + " ..."; // limit the number of characters in the post content preview to 110
        posts[i].textContent = preview;
    }
} postPreview();


const navbar = document.querySelector('.navigation');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');


const openNav = () => { // sets the width of 
    navbar.style.width = '55vw';
};

const closeNav = () => {
        navbar.style.width = 0;
};


openIcon.addEventListener('click',
    function () {
        openNav();
    }
);

closeIcon.addEventListener('click',
    function () {
        closeNav();
    }
);
