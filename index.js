function createPost() {
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let comments = _.template(document.getElementById("comments-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let main = document.getElementsByTagName('main')[0];
  main.innerHTML += pageTemplate;
  let title = document.getElementById('postTitle').value;
  let author = document.getElementById('postAuthor').value;
  let content = document.getElementById('postContent').value;
  let postSection = document.getElementById('post');
  postSection.innerHTML = postTemplate( {'title': title, 'body': content, 'author': author} );
  postSection.innerHTML += comments;
}
function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let commenter = document.getElementById('commenterName').value;
  let comments = document.getElementById("comments");
  let comment = document.getElementById('commentText').value;
  comments.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': comment });
}