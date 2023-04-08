Why i Can Use Get Without Set But i Can't Use Set Lonely.?

Useage Of Get Or Set Depends on The Statement that we Use Get and Set on.
We Can Use each of them lonely, Example of Using Get alone.


let  teachers = {
	teacherName: "Jhon",
	whatTeacherTeach: "Math",
	get: function() {
    return `My Name Is ${this.teacherName} And Im Teaching  ${this.whatTeacherTeach}`;
  }
}