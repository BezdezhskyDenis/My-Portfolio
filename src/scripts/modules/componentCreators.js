//function create new Div
export function div(id, classList, innerText, name) {
    const newDiv = document.createElement("div");
    classList ? (newDiv.classList = classList) : "";
    id ? (newDiv.id = id) : null;
    innerText ? (newDiv.innerText = innerText) : "";
    name ? (newDiv.name = name) : null;
  
    return newDiv;
  }

//function create new Span
export  function span(id, classList, innerText) {
    const newSpan = document.createElement("span");
    newSpan.innerText = innerText;
    classList ? (newSpan.classList = classList) : "";
    id ? (newSpan.id = id) : null;
  
    return newSpan;
  }

 //function create new img 
export  function img(src, classList, alt) {
    const img = document.createElement("img");
    img.src = src;
    classList ? (img.classList = classList) : "";
    alt ? (img.alt = alt) : "";
  
    return img;
  }

 //function create new paragraph
export  function paragraph(text, classList) {
    const paragraph = document.createElement("p");
    classList ? (paragraph.classList = classList) : "";
    text ? (paragraph.innerText = text) : "";
  
    return paragraph;
  }
   //function create new a tag
export  function aHyperLink(href, classList, target, text) {
    const aHyperLink = document.createElement("a");
    classList ? (aHyperLink.classList = classList) : "";
    href ? (aHyperLink.href = href) : null;
    target ? (aHyperLink.target = target) : "";
    text ? (aHyperLink.innerText = text) : "";
  
    return aHyperLink;
  }

  export function insert(classList){
    const insert = document.createElement("i")
    insert.classList = classList

    return insert
  }