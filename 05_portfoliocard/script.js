const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("generateBtn");
function createProfileCard() {
  const profileCard = document.createElement("div");
  // console.log(profileCard);
  profileCard.className = "profile-card";

  const profileImage = document.createElement("img");
  profileImage.src =
    "https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg";

  const profileName = document.createElement("h3");
  profileName.textContent = "John Doe";

  const profileDescription = document.createElement("p");
  profileDescription.textContent =
    "A passionate web developer with experience of Javascript and ReactJs.";

  profileCard.appendChild(profileImage);
  profileCard.appendChild(profileName);
  profileCard.appendChild(profileDescription);
  appContainer.appendChild(profileCard);
  console.log(appContainer);
}
generateBtn.addEventListener("click", createProfileCard);
