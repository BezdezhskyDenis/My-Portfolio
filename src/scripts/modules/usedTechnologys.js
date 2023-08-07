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


            
            //     <div class=" col-md-auto tech-container">

            //         <img src="Media/html-5-svgrepo-com.svg" width="50px" height="50px" alt="HTML logo" class="m-2">
            //         <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">HTML</p>
            //     </div>
            //     <div class=" col-md-auto  tech-container">

            //         <img src="Media/bootstrap-svgrepo-com.svg" width="50px" height="50px" alt="Bootstrap LOGO" class="m-2">
            //         <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">Bootstrap</p>
            //     </div>
            //     <div class=" col-md-auto  tech-container">

            //         <img src="Media/css-3-svgrepo-com.svg" width="50px" height="50px" alt="CSS Logo" class="m-2">
            //         <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">CSS</p>
            //     </div>
            //     <div class=" col-md-auto  tech-container">

            //         <img src="Media/git-svgrepo-com.svg" width="50px" height="50px" alt="GIT Logo" class="m-2">
            //         <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">GIT</p>
            //     </div>
            // </div><div class="row ">
            //     <div class=" col-md-auto tech-container">

            //         <img src="Media/github-142-svgrepo-com.svg" width="50px" height="50px" alt="GitHub logo" class="m-2">
            //         <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">GitHub</p>
            //     </div>
            //     <div class=" col-md-auto  tech-container">

            //         <img src="Media/javascript-svgrepo-com.svg" width="50px" height="50px" alt="JavaScript LOGO" class="m-2">
            //         <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">JavaScript</p>
            //     </div>
            //     <div class=" col-md-auto  tech-container">

            //         <img src="Media/node-js-svgrepo-com.svg" width="50px" height="50px" alt="Node.Js Logo" class="m-2">
            //         <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">Node.Js</p>
            //     </div>
            //     <div class=" col-md-auto  tech-container">

            //         <img src="Media/react-svgrepo-com.svg" width="50px" height="50px" alt="React Logo" class="m-2">
            //         <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">React</p>
            //     </div>
            // </div><div class="row ">
            //     <div class=" col-md-auto tech-container">

            //         <img src="Media/sass-svgrepo-com.svg" width="50px" height="50px" alt="Sass logo" class="m-2">
            //         <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">Sass</p>
            //     </div>
            //     <div class=" col-md-auto  tech-container">

            //         <img src="Media/sql-database-generic-svgrepo-com.svg" width="50px" height="50px" alt="MySQL LOGO" class="m-2">
            //         <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">MySQL</p>
            //     </div>
            //     <div class=" col-md-auto  tech-container">

            //         <img src="Media/typescript-svgrepo-com.svg" width="50px" height="50px" alt="TypeScipt Logo" class="m-2">
            //         <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">TypeScipt</p>
            //     </div>
            //     <div class=" col-md-auto  tech-container">

            //         <img src="Media/vscode-svgrepo-com.svg" width="50px" height="50px" alt="VsCode Logo" class="m-2">
            //         <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">VsCode</p>
            //     </div>
