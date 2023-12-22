   
let cal;
let result;
if(localStorage.getItem('cal')!==null)
{
    console.log(localStorage.getItem('cal'));
    if(localStorage.getItem('result')!=0)
        console.log('result :'+localStorage.getItem('result'));
};
function enternumber( inputNo)
{   
    if(localStorage.getItem('cal')===null)
       {
        localStorage.setItem('cal','');
        localStorage.setItem('result',0);
        cal='';
        result=0;
        cal=localStorage.getItem('cal');
        cal+=inputNo;
        localStorage.setItem('cal' ,cal);
        console.log(cal);
       }
    else
    {
    cal=localStorage.getItem('cal');
    cal+=inputNo;
    localStorage.setItem('cal' ,cal);
    console.log(cal);
    }
};
function clickOperator(operator)
{
    if(localStorage.getItem('cal'===null))
    {

    }
    else
    {
    cal=localStorage.getItem('cal');
    cal+=operator;
    localStorage.setItem('cal' ,cal);
    console.log(cal);   
    }
};

      
function equals(){
    
    if(localStorage.getItem('cal')!==null)
    {
    result = eval(localStorage.getItem('cal'));
    localStorage.setItem('result',result);
    console.log(localStorage.getItem('result'));
    localStorage.removeItem('cal');
    }
    else
    {
    console.log(localStorage.getItem('result'));
    }
    

}

function clearthe()
{
    localStorage.removeItem('cal');
    localStorage.removeItem('result');
    result=0;
    cal='';
    console.log('cleared');
};
function Delete(){
    let len = (localStorage.getItem('cal')).length;
    if(len===0)
     console.log('empty');
    else
      {
        if(localStorage.getItem('cal').charAt(len-1)===' ')
           localStorage.setItem('cal' , localStorage.getItem('cal').slice(0,-3) );
        else
        localStorage.setItem('cal' , localStorage.getItem('cal').slice(0,-1) );

      }
      console.log(localStorage.getItem('cal'));


};


console.log = function(message) {
    const consoleDiv = document.getElementById('consoleMessages');
    consoleDiv.innerHTML = `<span>${message}</span>`;
    
};