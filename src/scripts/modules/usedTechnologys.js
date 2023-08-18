import { div, img, paragraph } from "./componentCreators.js";
import { techList } from "../../data/techList.js";

export function technologiesBlocks(props = []) {
  const usedTechnology = document.getElementById("usedTechnology");
  const technologyPattern = div(null, "row");
  let newTechList = techList;
  if (props.length > 0) {
    newTechList = [];
    for (let key of props) {
      const tech = techList.filter((tech) => tech.title === key);
      newTechList.push(tech[0]);
    }
  }
  for (let key of newTechList) {
    const technologyBlock = div(null, "col-md-auto tech-container text-center");
    const technologyImg = img(key.src, "m-2 tech-img", key.title);
    const technologyTitle = paragraph(key.title, "tech-p");
    technologyBlock.appendChild(technologyImg);
    technologyBlock.appendChild(technologyTitle);
    technologyPattern.appendChild(technologyBlock);
  }
  usedTechnology.appendChild(technologyPattern);
}
