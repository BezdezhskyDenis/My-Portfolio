import {div, paragraph, aHyperLink, insert} from "./componentCreators.js"
import { myInfo } from "../../data/myInfo.js"
const footer = document.getElementsByClassName("footer")

function aboutMe(){
    const footerContainer = div(null,"container justify-content-center text-center d-flex row mx-auto")

    for(let key of myInfo){
                const infoPattern = div(null, "col m-5")
                const infoBlock = div(null, " p-2 card text-center bg-transparent border-0")
                const infoBody = div(null,"card-title")
                const infoPic = aHyperLink("","btn ", ""+" logo")
                const infoText = paragraph(key.title, "card-text fs-5")
                const icon = insert(key.icon)
                infoPic.append(icon)
                infoBody.appendChild(infoPic)
                infoBody.appendChild(infoText)
                infoBlock.appendChild(infoBody)
                infoPattern.appendChild(infoBlock)
                footerContainer.appendChild(infoPattern)
    }
    
    footer[0].append(footerContainer)
}

aboutMe()