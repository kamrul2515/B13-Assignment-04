//4. delete job from job list
function deleteJob(id){
    let newJobs = [];

    for(let i = 0; i < jobs.length; i++){
        if(jobs[i].id !==id){
            newJobs.push(jobs[i]);
        }
    }

    jobs = newJobs;
    renderJobs();
}


//5. show btn tabs (all / interview / rejected)
function showOnly(tab){
    currentTab = tab;

    let buttons = document.querySelectorAll(".btn-set");

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("active");
    }

    document.getElementById(tab + "-btn").classList.add("active")

    renderJobs();
}

//6. page load hoile renderjobs show korbe
window.onload = function(){
    renderJobs();
}