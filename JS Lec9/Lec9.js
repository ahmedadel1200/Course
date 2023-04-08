let mainFeatuers = {
      color : "Green",
      background : "Blue",
      shape : "Square",
      usage : "Storage",
      positionX : "20%",
      positionY : "20%",
      padding : 5,
      margin : 5,
       CalcBoxSize:  function(){
        return  `Box Size Diminsion Is ` (this.padding + this.margin) * this.width * this.height ;
      }
}
let button = Object.create(mainFeatuers,{
  width:{value:10},
  height:{value:10},
  title:{value:"Send"},
})

let navbar = Object.create(button)

let sidebar = Object.create(button)