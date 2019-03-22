function createPost() {
    let postAuthor = document.getElementById('postAuthor').value;
    let postTitle = document.getElementById('postTitle').value;
    let postBody = document.getElementById('postBody').value;
    let postTemplate = document.getElementById('post-template').innerHTML;
    let postTemplateFn = _.template(postTemplate);
    let postTemplateHTML = postTemplateFn({ postAuthor: postAuthor, postTitle: postTitle, postBody: postBody })

};

function postComment(post) {
let pageTemplate = document.getElementById('page-template').innerHTML;
let pageTemplateFn = _.template(pageTemplate);
let main = document.querySelector('main');
let pageTemplateHTML = pageTemplateFn({ newPost: post });
main.innerHTML += pageTemplateHTML;
};
