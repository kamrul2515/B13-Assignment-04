//2. update total jobs, interview count, rejected count and visible job number
function updateCounts(filteredJobs){
    document.getElementById("total-count").innerText = jobs.length;

    let interviewCount = 0;
    let rejectedCount = 0;

    for(let i = 0; i < jobs.length; i++){
        if(jobs[i].status === "interview"){
            interviewCount++;
        }

        if(jobs[i].status === "rejected"){
            rejectedCount++;
        }
    }

    document.getElementById("interview-count").innerText = interviewCount;
    document.getElementById("rejected-count").innerText = rejectedCount;

    document.getElementById("job-number").innerText = filteredJobs.length + " jobs";
}


// 3. jokhon id te click kora hobe tkhn job cards er moddhe interview and rejected show korbe
function setInterview(id) {
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === id) {
            if (jobs[i].status === "interview") {
                jobs[i].status = "not-applied";
            } else {
                jobs[i].status = "interview";
            }
        }
    }

    renderJobs();
}

function setRejected(id) {
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === id) {
            if (jobs[i].status === "rejected") {
                jobs[i].status = "not-applied";
            } else {
                jobs[i].status = "rejected";
            }
        }
    }

    renderJobs();
}