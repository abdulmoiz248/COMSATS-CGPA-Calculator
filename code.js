const progressBar = document.querySelector('.progress-bar');
const progressPercentage = document.querySelector('.progress-percentage');

function updateProgress(cgpa) {
  progressPercentage.textContent = `${cgpa.toFixed(2)}`;
  let percent=(cgpa/4.00)*100;
  const circumference = 283; 
  const offset = (100 - percent) / 100 * circumference;
  progressBar.style.strokeDashoffset = offset;
  
}


function assign_gpa(percent){
  if(percent>=85){
    return updateProgress(4.00);
  }else if(percent<85 && percent>=80){
    return updateProgress(3.66);
  }else if(percent<80 && percent>=75){
    return updateProgress(3.33);
  }else if(percent<75 && percent>=71){
    return updateProgress(3);
  }else if(percent<71 && percent>=68){
    return updateProgress(2.66);
  }else if(percent<68 && percent>=64){
    return updateProgress(2.33);
  }else if(percent<64 && percent>=61){
    return updateProgress(2);
  }else if(percent<61 && percent>=58){
    return updateProgress(1.66);
  }else if(percent<58 && percent>=54){
    return updateProgress(1.30);
  }else if(percent<54 && percent>=50){
    return updateProgress(1);
  }else{
    return updateProgress(0.00);
  }
}


let r1 = document.querySelector('#r1');
let div1 = document.querySelector('.c1');
document.querySelector('.c1').style.display='block';
let r2 = document.querySelector('#r2');
let div2 = document.querySelector('.c2');

let r3 = document.querySelector('#r3');
let div3 = document.querySelector('.c3');

r1.addEventListener('click', () => {
  try{
    setTimeout(()=>{
       updateProgress(4.00);
       setTimeout(()=>{
        updateProgress(0.00);
     },500);

    },500);
    document.querySelector('.c2').style.display='none';
    document.querySelector('.c3').style.display='none';
  }catch(e){
   
  }
  document.querySelector('.c1').style.display='block';
 
  
});

r2.addEventListener('click', () => {
  try{
    setTimeout(()=>{
      updateProgress(4.00);
      setTimeout(()=>{
       updateProgress(0.00);
    },500);

   },500);
    document.querySelector('.c1').style.display='none';
    document.querySelector('.c3').style.display='none';
  }catch(e){
   
  }
  document.querySelector('.c2').style.display='block';
  });

r3.addEventListener('click', () => {
    
  try{
    setTimeout(()=>{
      updateProgress(4.00);
      setTimeout(()=>{
       updateProgress(0.00);
    },500);

   },500);
    document.querySelector('.c1').style.display='none';
    document.querySelector('.c2').style.display='none';
  }catch(e){
   
  }
  document.querySelector('.c3').style.display='block';
  });





    
let semester_count=1;
let inputcount=1;
let input_credt=1;
let button1=document.querySelector('#addsemester');

button1.addEventListener('click',(e)=>{
    e.preventDefault();

    if(semester_count>11){
      alert('Can not add more Semesters!!');
      return;
    }
    let semester=document.createElement('div');
    semester.classList.add('semester');
    let h4= document.createElement('h4');
    h4.innerText=`Semester ${++semester_count}`;
    semester.append(h4);
    let newdiv1=document.createElement('div');
    newdiv1.classList.add('wrap-input-5');
    let input1=document.createElement('input');
    input1.className='input';
    input1.id=`cgpa-${++inputcount}`;
    input1.placeholder='Cgpa';
    input1.type='number';
    let span1=document.createElement('span');
    span1.className='focus-border';
    newdiv1.append(input1);
    newdiv1.append(span1); 
    semester.append(newdiv1);

    let newdiv2=document.createElement('div');
    newdiv2.classList.add('wrap-input-5');
    let input2=document.createElement('input');
    input2.className='input';
    input2.placeholder='Credit Hours';
    input2.type='number';
    input2.setAttribute('required', true);
    input1.setAttribute('required', true);
    let span2=document.createElement('span');
    span2.className='focus-border';
    newdiv2.append(input2);
    newdiv2.append(span2); 
    semester.append(newdiv2);
    let form=document.querySelector('#form-cgpa');
     
    form.insertBefore(semester,button1);
  

})

let calculate=document.querySelector('#calculate');
calculate.addEventListener('click',(e)=>{
  e.preventDefault();
  let cgpa=document.querySelectorAll('#form-cgpa .semester input[placeholder="Cgpa"]');
  let ch=document.querySelectorAll('#form-cgpa .semester input[placeholder="Credit Hours"]');



  for(let v of cgpa){
    if(v.value== '')
      {
      alert('Please Enter CGPA');
      return;
    }else{
      if(v.value>4){
        alert('Please Enter Correct CGPA');
        return;
      }
    }
  }



for(let v of ch){

  if(v.value== '')
    {
      alert('Please Enter Credit Hours');
      return;

    }

}



let total=0;
for(let i=0;i<cgpa.length;i++){
  
   total+=cgpa[i].value*ch[i].value;
}

let ch_total=0;

for(let i=0;i<ch.length;i++){
  ch_total+=Number(ch[i].value);
}

updateProgress(total/ch_total); 

 
});

updateProgress(0.00); 

let course_add=document.querySelector('#addcourse');
let course=1;
let input3=1;
course_add.addEventListener('click',(e)=>{
     e.preventDefault();
   
    let semester=document.createElement('div');
    semester.classList.add('semester');
    let h4= document.createElement('h4');
    h4.innerText=`Course ${++course}`;
    semester.append(h4);
    let newdiv1=document.createElement('div');
    newdiv1.classList.add('wrap-input-5');
    let input1=document.createElement('input');
    input1.className='input';
    input1.id=`cgpa-${++input3}`;
    input1.placeholder='Cgpa';
    input1.type='number';
    let span1=document.createElement('span');
    span1.className='focus-border';
    newdiv1.append(input1);
    newdiv1.append(span1); 
    semester.append(newdiv1);

    let newdiv2=document.createElement('div');
    newdiv2.classList.add('wrap-input-5');
    let input2=document.createElement('input');
    input2.className='input';
    input2.placeholder='Credit Hours';
    input2.type='number';
    input2.setAttribute('required', true);
    input1.setAttribute('required', true);
    let span2=document.createElement('span');
    span2.className='focus-border';
    newdiv2.append(input2);
    newdiv2.append(span2); 
    semester.append(newdiv2);
    let form=document.querySelector('#form-cgpa3');
     
    form.insertBefore(semester,course_add);
});


let calculate3=document.querySelector('#calculate3');
calculate3.addEventListener('click',(e)=>{
  e.preventDefault();
  
  let cgpa=document.querySelectorAll('#form-cgpa3 .semester input[placeholder="Cgpa"]');
  let ch=document.querySelectorAll('#form-cgpa3 .semester input[placeholder="Credit Hours"]');

  for(let v of cgpa){
    if(v.value== '')
      {
      alert('Please Enter CGPA');
      return;
    }else{
      if(v.value>4){
        alert('Please Enter Correct CGPA');
        return;
      }
    }
  }



for(let v of ch){

  if(v.value== '')
    {
      alert('Please Enter Credit Hours');
      return;

    }

}



let total=0;
for(let i=0;i<cgpa.length;i++){
  
   total+=cgpa[i].value*ch[i].value;
}

let ch_total=0;

for(let i=0;i<ch.length;i++){
  ch_total+=Number(ch[i].value);
}

updateProgress(total/ch_total);
});

function cal_sum(node){
 return Array.from(node).reduce((prev,next)=>{
    return prev + parseFloat(next.value || 0);
   },0);
}

let calculate2=document.querySelector('#calculate2');

calculate2.addEventListener('click',(e)=>{
   e.preventDefault();

   let quiz=document.querySelectorAll('#marksq');

   for(let v of quiz){

    if(v.value== '')
      {
        alert('Please Enter Quiz Marks');
        return;
  
      }
  
  }
   let ass=document.querySelectorAll('#marksa');

   for(let v of ass){

    if(v.value== '')
      {
        alert('Please Enter Assignment Numbers');
        return;
  
      }
  
  }

   let mid_no=document.querySelector('#marksm');
   if(mid_no.value== '')
    {
      alert('Please Enter Mids Number');
      return;

    }

   let mid_t=document.querySelector('#marksmt');
   if(mid_t.value== '')
    {
      alert('Please Enter Mids Total Number');
      return;

    }

   let final_no=document.querySelector('#marksf');
   if(final_no.value== '')
    {
      alert('Please Enter Finals Number');
      return;

    }

   let final_t=document.querySelector('#marksft');
   if(final_t.value== '')
    {
      alert('Please Enter Final Total Number');
      return;

    }

   let total=  (cal_sum(quiz)/40)*15+(cal_sum(ass)/40)*10+(mid_no.value/mid_t.value)*25+(final_no.value/final_t.value)*50;

   assign_gpa(total);
});
