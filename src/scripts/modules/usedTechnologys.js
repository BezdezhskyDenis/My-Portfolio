import {div, span, img, paragraph} from "./componentCreators.js"
import { techList } from "../../data/techList.js"
const usedTechnology = document.getElementById("usedTechnology")

function technologiesBlocks(){
    const technologyPattern = div(null, "row")
    for (let key of techList){
        const technologyBlock = div(null, "col-md-auto tech-container")
        const technologyImg = img(key.src, "m-2 tech-img","HTML logo")
        const technologyTitle = paragraph(key.title, "tech-p")
        technologyBlock.appendChild(technologyImg)
        technologyBlock.appendChild(technologyTitle)
        technologyPattern.appendChild(technologyBlock)
    }
    usedTechnology.appendChild(technologyPattern)
}

technologiesBlocks()


            

