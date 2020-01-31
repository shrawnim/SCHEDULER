//scheduler

var ca=[true,true,true,false,false,false,true,false,false,true,true,false,true,true,false,false,true,true,false,false,true,true,true,true,true,true,false,false,false,true,false,false,true,true,false,true,true,false,false,true,true,false,false,true,true,true,false,false];

let tt=2;
let count=0;
var T1='GMT +05:30';
var T2='GMT -06:00';

T1=timez(T1);
T2=timez(T2);

let time1=0100;
let time2 = timeconver(time1);

let n=num(time2);

function timez(str){
    if(str[4]=='-'){
        var matches = Number(str.match(/(\d+)/));
        matches=-1*matches;
    }
    else{
        var matches = Number(str.match(/(\d+)/));
    }
}

function num(nu){ 
    let ind=num;
    let three=ind%100
     let rem=ind/100;
     if(three==30){
        index= (rem*2)+1;
    }
    else{
      index = rem*2;
    }
    return index;
}

function rnum(index){
    if(index%2!=0){
        time=(index/2);
        time=(time*100)+30;
            }
    else{
        time=index/2;
        time=(time*100);
    }
    return time;
}

function timeconver(time){
 let time2= time+T2-T1;
 return time2;
}

for(let i=n;i<=48;i++){
    if(ca[i]===true){
        count++;
        if(count==tt &&  i<=43 && i>=9){
            fre=i;
            console.log("Student free at:")
            console.log(rnum(fre));
        
        }
    }
}
//if(count < tt){
   // console.log("no comman slot found negotiate");
//}



