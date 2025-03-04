var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){
     gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.8,
        // ease:"power1.inOut",
        filter: "drop-shadow(0px 0px 10px yellow)"
     })
})


// +++++++++++++++++++++++for cursor++++++++++++++++++++++++++

image.addEventListener("mouseenter", function(dets){
   cursor.innerHTML="view more"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff8a",
        filter: "drop-shadow(0px 0px 10px blue)"
     })
})
image.addEventListener("mouseleave", function(dets){
    cursor.innerHTML= ""
     gsap.to(cursor,{
         scale:1,
         backgroundColor:"#fff",
         filter: "drop-shadow(0px 0px 10px yellow)"
      })
 })



//  +++++++++++++++++++++++++for image++++++++++++++++++++++++++

 image.addEventListener("mouseenter", function(dets){
    cursor.innerHTML="view more"
     gsap.to(image,{
         scale:2,
         backgroundColor:"#ffffff8a",
         filter: "drop-shadow(0px 0px 10px orange)"
      })
 })
 image.addEventListener("mouseleave", function(dets){
     cursor.innerHTML= ""
      gsap.to(image,{
          scale:1,
          backgroundColor:"#fff",
          filter: "drop-shadow(0px 0px 10px yellow)"
       })
  })