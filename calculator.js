
const display=document.getElementById("display");
const buttons=document.querySelectorAll('button');

buttons.forEach((item)=>{
    item.addEventListener('click',()=>{
      let str=display.innerText.toString();
      if(item.id=='c'){
        display.innerText='';
      }
      else if(item.id=='D'){
        let string=display.innerText.toString();
        display.innerText=string.substring(0,string.length-1);
      }
     
      else if(( (str[str.length-1]=='+')|| (str[str.length-1]=='-')|| (str[str.length-1]=='*')|| (str[str.length-1]=='/') )&&((item.id=='plus')||(item.id=='minus')||(item.id=='slesh')||(item.id=='multi'))){
        /*display.innerText="Wrong!";
        setTimeout(()=>(display.innerText=""),2000);*/
        display.innerText=str.substring(0,str.length);
      }
      else if(display.innerText!='' && item.id=="equal"){
        display.innerText=eval(display.innerText);
      }
      else if(display.innerText=='' && item.id=="equal"){
        display.innerText="Empty!";
        setTimeout(()=>(display.innerText=""),2000);
      }
      
      else{
        display.innerText+=item.innerText;
      
      }
    });
});

