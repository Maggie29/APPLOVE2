var products = ["Tayman", "Kerala", "The Brass Coq", "Sungenre", "Mitragyna Speciosa",
 "Foam King", "Volition", "Ink", "Gilkon", "Owls & Apples", "Sherwood", "Platinum"]
 //var listPicture = document.getElementsById("picture");

 function print(event){
   var listPicture = document.getElementById("picture");
   for(var i = 0; i<products.length; i++){
var divGrid = document.createElement("div");
divGrid.setAttribute("class","grid");
var anchor = document.createElement("a");
var figure = document.createElement("figure");
var img = document.createElement("img");
img.setAttribute("class", "image-box")
img.src= "assets/img/fotos/img-"+ (i+1)+ ".jpg";
img.alt = products[i];
var figcaption = document.createElement("figcaption");
figcaption.setAttribute("class", "center");
var titulo = document.createElement("h4");
titulo.setAttribute("class", "name")
titulo.innerHTML = products[i];
figcaption.appendChild(titulo);
figure.appendChild(img);
figure.appendChild(figcaption);
anchor.appendChild(figure);
divGrid.appendChild(anchor);
listPicture.appendChild(divGrid);
//console.log(divGrid);

}
}

//modal

window.addEventListener("load",function(){;
var grid-modal = document.getElementById("grid-modal");
var image-box = document.getElementsByClassName("image-box");
var foto = document.getElementById("foto");

for(var i = 0; i<image-box.length; i++){
  image-box[i].addEventListener("click", function(event){
    grid-modal.style.display = "block";
    foto.src = event.target.src;
    foto.style.borderRadius = "2px";
  });
}
}
document.getElementById("modal").addEventListener("click", function(){
  grid-modal.style.display = "none";
});
});
