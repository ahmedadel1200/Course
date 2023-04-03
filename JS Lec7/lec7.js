/*
  Algorithm
  1- Create A variable And Assign the Value
  2- Create a Function With One  Parameter that will take the value to do work on it
  3- Create a const variable and assign the invalid characters to it
  4- Create a Variable that will storage the new value of the parameter after replace the invalid characters 
  5- create a condition that will prove the new value after replace the invalid characters is a valid url 
  If Not a Valid URL the function will callback itself again.
*/



'use strict';

let link = 'https://www.!google!.com/search?q=javascript+<script></script>call+stack&client=firefox-<Error>b-d&sxsrf=!!AJOqlzWfGkxZ1eRCAYIlibIdMN387lSQXw:1676044481612&$$source=$$lnms&tbm=isch&sa=(444)X&ved=2ahUKEwj70dCfqIv9AhUxTKQEHe_0AVIQ_AUoAXoECA_|E|_QAw&biw=1920&bih=966&dpr=1#imgrc=ttQhggGNsUomkM';

function IsValid (target){
    const invaildchars = /[!<script></script><Error>|()]/g;
      let newlink = target.replace(invaildchars,"");
      try { 
        return Boolean(new URL(newlink)); 
    }
    catch(e){ 
        return IsValid(newlink); 
    }
  }
/*
  Function description
  1- The Function Will take the Parameter
  2- Will Replace The invalid characters  then the value will be assigned to the new variable
  3- then it will check that  if the url is valid will return true, if not will return a function callback
*/



