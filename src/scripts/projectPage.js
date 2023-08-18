import {} from "./modules/aboutMe.js";
import { div, aHyperLink, img } from "./modules/componentCreators.js";
import { projectList } from "../data/projectsList.js";
import { technologiesBlocks } from "./modules/usedTechnologys.js";

const urlId = document.location.hash.substring(1);
const project = [];
for (let key of projectList) {
  if (key.id === urlId) {
    project.push(key);
  }
}

const main = document.getElementById("main");

const projectCard = new div(
  null,
  "container text-center mx-auto col-10 pt-2 p-description"
);
const projectTitle = new div(null, "fs-1", project[0].title);
const projectDescription = new div(null, "fs-5 mt-2", project[0].description);
const projectButtons = new div(null, "row mx-auto justify-content-center m-5");
const cardProjectButton = aHyperLink(
  project[0].projectLink,
  "btn btn-secondary col-lg-2 col-sm-4 col-6 m-2 rounded-pill",
  "_blank",
  "Try Me"
);
const cardGitHubButton = aHyperLink(
  project[0].GitHubLink,
  "btn btn-secondary col-lg-2 col-sm-4 m-2 col-6 rounded-pill",
  "_blank",
  "GitHub Repo"
);
const cardDownloadButton = aHyperLink(
  project[0].downloadLink,
  "btn btn-secondary col-lg-2 col-sm-4 m-2 col-6 rounded-pill",
  "_blank",
  "Download App"
);
const cardImg = img(project[0].src, "card-img-top p-4", project[0].alt);
const usedTechnologyTitle = new div(null, "fs-2 my-4", "Used Technology");
const usedTechnology = new div("usedTechnology");

projectButtons.appendChild(cardProjectButton);
projectButtons.appendChild(cardGitHubButton);
projectButtons.appendChild(cardDownloadButton);
projectCard.append(projectTitle);
projectCard.appendChild(projectDescription);
projectCard.appendChild(projectButtons);
projectCard.appendChild(usedTechnologyTitle);
projectCard.appendChild(usedTechnology);
projectCard.appendChild(cardImg);
main.append(projectCard);

technologiesBlocks(project[0].usedTechnology);
