const c = console.log.bind(document);

// form Validation
document.forms["form1"].addEventListener("input", validate);
validate();
function validate(e) {
  let result = true; // Validition statue
  let form = document.forms["form1"]; // name of the form
  let usernameValue = form["username"].value.trim();
  usernameValue = escapeHtml(usernameValue);
  form["username"].value = usernameValue;
  let usernamePar = form["username"].parentElement;

  // [issue] nums with space like ("122 12") dealed as string
  // [Suggested Solve] use parseInt() or Number() methods

  let password = form["password"].value;
  let passwordPar = form["password"].parentElement;

  let password2 = form["password2"].value;
  let passwordPar2 = form["password2"].parentElement;

  // if (usernameValue.length < 4 || !isNaN(usernameValue) || !/[!@#$%^&*\(\[\]\)]/ig.test(usernameValue)) {
  // }

  if (usernameValue.length < 4 || !isNaN(usernameValue)) {
    if (usernamePar.querySelector(".error")) {
      // setTimeout(() => {
      usernamePar.querySelector(".error").classList.remove("error");
      // }, 1); // 1 millisecond
    }
    // return false;
    result = false;
  } else {
    // setTimeout(() => {
    usernamePar.querySelector("output").classList.add("error");
    // }, 1);
  }

  if (password.length <= 6) {
    if (passwordPar.querySelector(".error")) {
      // setTimeout(() => {
      passwordPar.querySelector(".error").classList.remove("error");
      // }, 1); // 1 millisecond
    }
    // return false;
    result = false;
  } else {
    // setTimeout(() => {
    passwordPar.querySelector("output").classList.add("error");
    // }, 1);
  }

  if (password !== password2) {
    if (passwordPar2.querySelector(".error")) {
      // setTimeout(() => {
      passwordPar2.querySelector(".error").classList.remove("error");
      // }, 1); // 1 millisecond
    }
    // return false;
    result = false;
  } else {
    // setTimeout(() => {
    passwordPar2.querySelector("output").classList.add("error");
    // }, 1);
  }
  // result ? null : e.preventDefault();
  return result;
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&039;")
}

// same as above | better performance

// function escapeHtml(text) {
//   // return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&039;")
//   let map = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&039;",
//   }
//   return text.replace(/[&<>"']/g, function (m) { return map[m]; });
// }

