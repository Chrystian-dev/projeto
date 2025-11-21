function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

//pegar a teg img
const img =document.querySelector("#profile img")

//sibstituir a imagem
  if(html.classList.contains('light')){
    //se tiver light mode, adiciona a imagem light
    img.setAttribute("src", "./assets/chrystian-light.png")
  } else {
    //set tier sem light mode, mater a imagem  normal
    img.setAttribute("src", "./assets/chrystian.png")
  }
}
