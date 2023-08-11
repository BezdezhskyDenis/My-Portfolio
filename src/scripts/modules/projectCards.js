import {div, paragraph, aHyperLink, img} from "./componentCreators.js"
import { projectList } from "../../data/projectsList.js"


const cardTemplate = document.getElementsByClassName("cardTemplate") 

function cardCreator(){
    const cardsContainer = div(null,"row mx-2")

    for(let key of projectList){
        const cardItem = div(null, "col-lg-4 col-md-6 col-sm-8 col-10 mt-4 p-5 mx-auto text-center")
        const card = div(null, "card h-100")
        const cardImg = img(key.src, "card-img-top p-4", key.alt)
        const cardBody = div(null, "card-body")
        const cardTitle = `<h5 class="card-title">${key.title}</h5>`
        const cardDescription = paragraph(key.description, "card-text")
        const cardProjectButton = aHyperLink(key.projectLink, "btn btn-secondary w-50 m-2 rounded-pill", "_blank", "Try Me")
        const cardGitHubButton = aHyperLink(key.GitHubLink, "btn btn-secondary w-50 m-2 rounded-pill", "_blank", "GitHub Repo")
        cardBody.innerHTML = cardTitle
        cardBody.appendChild(cardDescription)
        cardBody.appendChild(cardProjectButton)
        cardBody.appendChild(cardGitHubButton)
        card.appendChild(cardImg)
        card.appendChild(cardBody)
        cardItem.appendChild(card)
        cardsContainer.appendChild(cardItem)
    }
    cardTemplate[0].append(cardsContainer)
}cardCreator()
