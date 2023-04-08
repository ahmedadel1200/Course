How,Where i can use set accssor lonely?



let teacher = {
  name: "Jhon",
	subject: "Math"
}

Object.defineProperty(teacher,"subChanger",{
  set: function(subName){
    this.subject = subName;
  }
})

teacher.subChanger = "English"

console.log(teacher.subject)