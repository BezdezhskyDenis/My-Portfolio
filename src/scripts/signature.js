//function create new Div
function div(id, classList, innerText, name) {
    const newDiv = document.createElement("div");
    classList ? (newDiv.classList = classList) : "";
    id ? (newDiv.id = id) : null;
    innerText ? (newDiv.innerText = innerText) : "";
    name ? (newDiv.name = name) : null;
  
    return newDiv;
  }

  const root = document.getElementsByTagName("Html")
  const signature = new div("signature", "", "Created by Denis Bezdzehsky")
//   signature.setAttribute("style",`text-align: center!important`);
  signature.style =`text-align: center!important; font-size: 1.25rem!important; padding-top: 1rem!important;
  padding-bottom: 1rem!important; background-color: rgb(73, 73, 73); color: white`;
  root[0].appendChild(signature)
  console.log(root)