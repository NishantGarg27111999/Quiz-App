    console.log("result page");

    let correct=document.getElementById("correct");
    let wrong=document.getElementById("wrong");
    let questions_correct=document.getElementById("questions_correct");

    let correct_answers=localStorage.getItem("correct");
    let total_questions=localStorage.getItem("total_questions");
    correct.textContent=`${((correct_answers/total_questions).toFixed(2))*100}%`;
    let wrong_answers=total_questions-correct_answers;
    wrong.textContent=`${((wrong_answers/total_questions).toFixed(2))*100}%`;
    questions_correct.textContent=`${correct_answers}/${total_questions}`;

    let graph_value=document.querySelector(".graph_value");
   
    graph_value.style.width=correct.textContent;

    let improvement="There’s scope for improvement, you can do better!";
    let below50="You need to put more efforts!"
    let above70="Keep learning, you have a good score!"

    let result_comment=document.getElementById("result_comment");
    if((correct_answers/total_questions)>=0.70){
        result_comment.textContent=above70;
        
    }
    else if((correct_answers/total_questions)>=0.50){
        result_comment.textContent=improvement;
    }
    else{
        result_comment.textContent=below50;
    }