function showPage(page){

    document
    .querySelectorAll(".page")
    .forEach(section=>{
        section.classList.remove("active");
    });

    const selectedPage =
    document.getElementById(page);

    if(selectedPage){
        selectedPage.classList.add("active");
    }
}

function practice(answer){

    const result =
    document.getElementById("practiceResult");

    if(!result) return;

    if(answer==="correct"){
        result.innerHTML =
        "🎉 Correct! Great job!";
    }
    else{
        result.innerHTML =
        "❌ Try Again";
    }
}

function quiz(correct){

    const result =
    document.getElementById("quizResult");

    if(!result) return;

    if(correct){
        result.innerHTML =
        "🏆 Excellent!";
    }
    else{
        result.innerHTML =
        "❌ Wrong Answer";
    }
}
