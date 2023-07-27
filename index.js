

var z

function Pone(){
var randomNumber1=(Math.floor(Math.random()*6)+1)
 z=randomNumber1
var a="images/dice"+randomNumber1+".png"
var image=document.querySelector(" .img1 ")
image.setAttribute("src",a) 
}



function Ptwo(){
var randomNumber2=Math.floor(Math.random()*6)+1;
var b= "images/dice"+randomNumber2+'.png';
var image=document.querySelector(".img2")
image.setAttribute("src",b)

var win = document.querySelector('h1')
    if(z>randomNumber2)
    {win.innerHTML="🚩 Player 1 won!"}
    else if(z<randomNumber2)
    {win.innerHTML="🚩 Player 2 won!"}
    else
    {win.innerHTML="Draw!"}

}

    



