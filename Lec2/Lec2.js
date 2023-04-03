// ///lec 2 tasks
let name = "John";
let admin = name;
alert(admin);
//______________________________________
let ourPlanet;
let currentVisitor;
const BIRTHDAY = '18.04.1982';
const age = 'somecode';

//lec 3 tasks
let a = 4;
let b = 4;
if (b == 0) {

    alert(a);
}
else if (a > b) {
    a -=b ;
    if (b == 0) {
        alert(a);
    }

}
else if (a == b || a < b) {
    b -= a;
    if (b == 0) {
        alert(a);
    }
}
//-----------------------------------------------------------------
//task 1 => Literals Template 
// 1- Multilines string
//سهولة عمل break line بين الكلمات بدلا من استخدام ال /n
// 2-tagged templates
//parameter حيث يمكن اعطاء ال 
//function الي ال () دون الحاجة الي 
//3- nested templates
//

//part 2 of task 1 => ${}
//1-escaping placeholder
//تسهيل عملية ال escaping لاكثر من شي داخل ال الاقواس عن طريق اضافة باك اسلاش
//2- can use it for (Variables,opreators,function call)
// تسهيل عملية استخدام المتغيرات و العمليات الحسابيةو استخدام الفانكشن
//3-implicit to string conversion
// يتم تحويل الكلمة او الرقم او الحرف الموجود داخل الاقواس الي string 



//task 2
//what happend if (number+string) 
//النتيجة هتكون طباعة الرقم و الكلمة بسبب ان علامة الجمع ممكن استخدمها للربط بين ارقام و كلمات

//task 3
//what happend if (string+number)
//النتيجة هتكون طباعة  الكلمة و الرقم بسبب ان علامة الجمع ممكن استخدمها للربط بين  كلمات و ارقام

//task 4
//what happend if (- number /string)
// Nan الاجابة هتكون 
// بسبب ان هناك خطأ في العملية الحسابية
//Nan  و تاتي هنا وظيفة ال 
//لحفظ الكود من العمليات الغير منطقية
