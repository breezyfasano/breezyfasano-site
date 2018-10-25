function postPreview() {
    const posts = document.getElementsByClassName("home-post-content");
    for (i = 0; i < posts.length; i++) { // for every post entry on the homepage
        let postContent = posts[i].textContent;
        let preview = postContent.slice(0, 110) + " ..."; // limit the number of characters in the post content preview to 110
        posts[i].textContent = preview;
    }
} postPreview();