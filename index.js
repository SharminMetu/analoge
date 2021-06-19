
let hour=document.querySelector('[clock-hour]')
let minute=document.querySelector('[clock-minute]')
let second=document.querySelector('[clock-second]')
setInterval(setclock)

    function setclock(){
    
        const nowDate= new Date();
        const seconds=nowDate.getSeconds()/60;
        const minutes =(sR+nowDate.getMinutes())/60;
        const  hours=(mR+nowDate.getHours())/12
    
        setRotation(hour,hours);
        setRotation(minute,minutes);
        setRotation(second,seconds);
    
    }
1000;



function setRotation(element,rR){
   element.style.setProperty('--r',rR*360)
}
