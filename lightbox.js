const imagenes = document.querySelectorAll(`.img-galeria`)

const imagenesLight = document.querySelector(`.agregar-imagen`)

const contenedorLight = document.querySelector(`.imagen-light`)

const hamburguesa1 = document.querySelector(`.hamburguesa`)

console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorLight)

imagenes.forEach( imagen => {
    imagen.addEventListener(`click`, ()=> {
        aparecerImagenes(imagen.getAttribute(`src`))
    })
})

contenedorLight.addEventListener(`click`, (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle(`show`)
        imagenesLight.classList.toggle(`showImage`)
        hamburguesa1.style.opacity = `1`;
    }
})

const aparecerImagenes = (imagen) => {
    imagenesLight.src = imagen
    contenedorLight.classList.toggle(`show`)
    imagenesLight.classList.toggle(`showImage`)
    hamburguesa1.style.opacity = `0`;
}