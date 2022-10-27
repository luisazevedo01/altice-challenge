import "./style.css";
import Letter from "./Letter";

const params = new URL(document.location).searchParams;
const id = params.get("id");

document
  .getElementById("getUsers")
  .addEventListener("click", () => populateUsers());
document
  .getElementById("getPosts")
  .addEventListener("click", () => populatePosts());

if (id) document.getElementById("getUsers").remove();

const populateUsers = async () => {
  const users = await Letter.get("/users");

  if (users) $("#json_users").remove();
  if (users) $("#user_list").remove();

  $("#users").append(
    '<div id="json_users">' + JSON.stringify(users) + "</div>"
  );

  $("#users").append('<ul id="user_list"></ul>');

  for (var i = 0; i < users.length; i++) {
    $("#users" + "> ul").append(
      '<li> <strong><a href="user?id=' +
        users[i].id +
        '">' +
        users[i].name +
        "</a></strong>" +
        '<span style="float: right">' +
        users[i].email +
        "</span></li>"
    );
  }
};

const populatePosts = async () => {
  const posts = await Letter.get("/posts");

  let filteredPosts = posts;

  if (id) filteredPosts = posts.filter((x) => x.userId === Number(id));

  if (posts) $("#json_posts").remove();
  if (posts) $("#posts_list").remove();

  $("#posts").append('<ul id="posts_list"></ul>');

  for (var i = 0; i < filteredPosts.length; i++) {
    $("#posts" + "> ul").append(
      "<li> <strong>" +
        filteredPosts[i].title +
        "</strong>" +
        '<span style="float: right">' +
        filteredPosts[i].body +
        "</span></li>"
    );
  }
};
