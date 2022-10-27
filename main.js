import "./style.css";
import Letter from "./Letter";

document
  .getElementById("getUsers")
  .addEventListener("click", () => populateUsers());
document
  .getElementById("getPosts")
  .addEventListener("click", () => populatePosts());

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

  if (posts) $("#posts").remove();

  $("#posts").append(
    '<div id="json_posts">' + JSON.stringify(posts) + "</div>"
  );
};
