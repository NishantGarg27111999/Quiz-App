let option1=document.getElementById("option1");
    let option2=document.getElementById("option2");
    let option3=document.getElementById("option3");
    let option4=document.getElementById("option4");


    let option1_content=document.getElementById("option1_content");
    let option2_content=document.getElementById("option2_content");
    let option3_content=document.getElementById("option3_content");
    let option4_content=document.getElementById("option4_content");

    let timer=document.querySelector(".timer");

let next_btn = document.getElementById('next');
let curr_quesNO=document.getElementById("curr_quesNO");
// console.log(next_btn);

// let call=next_btn.addEventListener('click',()=>{
//     return new Promise((resolve)=>{
//         console.log('hello');
//         resolve(true);
//     });
// });


//did not understand that eventlintner does not return values returned by its call back function.
function waitNextBtnClick() {
    return new Promise((resolve) => {
        next_btn.addEventListener('click', () => {
            resolve(true);
        },{once:true})

    });
}



function movetoresult(){
    
    document.getElementById("next_page").href="result.html";

    
}


function result(){
    timer.textContent="00:30";
    return new Promise((resolve)=>{
        let timer=document.querySelector(".timer");
        let global_container=document.querySelector(".global_container");

        global_container.style.backgroundColor='#70a86ba8';
        timer.style.backgroundColor='#35BD3A';
        

        
        
        let time_left=30;
        let intervalId=setInterval(()=>{
            time_left--;
            time_left=String(time_left).padStart(2,'0');
            time_left=Number(time_left);
            
            timer.textContent=`00:${time_left}`;

            if(time_left==0){
                clearInterval(intervalId);
            }

            if(time_left>15){
                global_container.style.backgroundColor='#70a86ba8';
                timer.style.backgroundColor='#35BD3A';
            }

            if(time_left<=15){
                global_container.style.backgroundColor='#D4D69F';
                timer.style.backgroundColor='#C5B100';
            }
            if(time_left<=5){
                global_container.style.backgroundColor='#DBADAD';
                timer.style.backgroundColor='#C50C00';
            }
            if(time_left==0){
                resolve(-1);
            }
        },1000);

        option1.addEventListener('click',()=>{
            
            resolve(1);
            clearInterval(intervalId);
        },{once:true})

        option2.addEventListener('click',()=>{
            
            resolve(2);
            clearInterval(intervalId);
        },{once:true})

        option3.addEventListener('click',()=>{
            resolve(3);
            clearInterval(intervalId);
        },{once:true})

        option4.addEventListener('click',()=>{
            resolve(4);
            clearInterval(intervalId);
        },{once:true})
    })

    
}



async function displayQuestions() {

    let total_questions=await fetch('https://quiz-app-t0ba.onrender.com/total_questions').then((response)=>{
        return response.text();
    }).then((data)=>{
        return data;
    })
   

    let ques=document.querySelector(".ques");
    let correct_answers=0;
    

    for(let i=0;i<total_questions;i++){

        curr_quesNO.textContent=`${i+1}/${total_questions}`;

        let res=await fetch(`https://quiz-app-t0ba.onrender.com/question/${i}`);
        let quesData=await res.json();


        ques.innerHTML=quesData.question;
        option1_content.textContent=quesData.options[0];
        option1_content.nextElementSibling.textContent="";
        option1.classList.remove("wrong_border","correct_border");

        option2_content.textContent=quesData.options[1];
        option2_content.nextElementSibling.textContent="";
        option2.classList.remove("wrong_border","correct_border");

        option3_content.textContent=quesData.options[2];
        option3_content.nextElementSibling.textContent="";
        option3.classList.remove("wrong_border","correct_border");

        option4_content.textContent=quesData.options[3];
        option4_content.nextElementSibling.textContent="";
        option4.classList.remove("wrong_border","correct_border");
        
       
        let optionSelected=await result();
        
        
       
        if(optionSelected!=-1){
            
             
            
            let optionDiv=document.getElementById(`selected_option${optionSelected}`);
            
            if(optionSelected!=quesData.answer){
                optionDiv.innerHTML="<span> You Chose</span> <img src='./images/wrong.png'/>";
                document.getElementById(`option${optionSelected}`).classList.add("wrong_border");
            }
            if(optionSelected==quesData.answer){
                correct_answers++;
            }
            // document.getElementById(`selected_option${quesData.answer}`).innerHTML="<img src='./images/correct.png'/>";
            // document.getElementById(`option${quesData.answer}`).classList.add("correct_border");
        } 
        document.getElementById(`selected_option${quesData.answer}`).innerHTML="<img src='./images/correct.png'/>";
        document.getElementById(`option${quesData.answer}`).classList.add("correct_border");  
        await waitNextBtnClick();
    }



    movetoresult();


    localStorage.setItem("correct",correct_answers);
    localStorage.setItem("total_questions",total_questions);
  

    
}




displayQuestions();






