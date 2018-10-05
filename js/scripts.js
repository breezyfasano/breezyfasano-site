let posts = document.getElementsByClassName("home-post-content");


    for (i = 0; i < posts.length; i++) {
        let postContent = posts[i].textContent;
        let preview = postContent.slice(0, 110) + " ...";
        posts[i].textContent = preview;
    }