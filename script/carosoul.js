let logoDiv = document.body.querySelector('.clickable-image')
let imagLink = [['html.svg','https://www.w3schools.com/html/default.asp'],['js.svg','https://www.w3schools.com/js/default.asp'],['css.svg','https://www.w3schools.com/css/default.asp']]

let counter = 0
setInterval(()=>{
    if (counter>2){
        counter=0
    }
   console.log(counter)
    logoDiv.querySelector('a').href = imagLink[counter][1]
    logoDiv.querySelector('.carosuole-image').src = `img/${imagLink[counter][0]}`
    counter ++;

},5000)