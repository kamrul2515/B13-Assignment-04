let jobs = [
    { id: 1, title: "Senior Frontend Developer", location: "Banani, Dhaka (Hybrid)", type: "Full-time", salary: "৳80,000 - ৳1,10,000", desc: "React.js ebong Next.js e oviggota thakte hobe.", status: "not-applied" },
    { id: 2, title: "Graphics Designer", location: "Chittagong (On-site)", type: "Full-time", salary: "৳35,000 - ৳45,000", desc: "Adobe Suite e dokkhota thakte hobe.", status: "not-applied" },
    { id: 3, title: "QA Automation Engineer", location: "Remote", type: "Contract", salary: "$1,200 - $1,800", desc: "Selenium ebong Python e oviggota dorkar.", status: "not-applied" },
    { id: 4, title: "Digital Marketing Executive", location: "Uttara, Dhaka", type: "Full-time", salary: "৳30,000 - ৳40,000", desc: "SEO ebong Facebook Ads niye kaj korte hobe.", status: "not-applied" },
    { id: 5, title: "Backend Developer (Node.js)", location: "Gulshan, Dhaka", type: "Full-time", salary: "৳90,000 - ৳1,30,000", desc: "Scalable API design e paroshi hote hobe.", status: "not-applied" },
    { id: 6, title: "Project Coordinator", location: "Sylhet", type: "Full-time", salary: "৳50,000 - ৳60,000", desc: "Field level activity monitoring korte hobe.", status: "not-applied" },
    { id: 7, title: "Content Writer (English)", location: "Remote", type: "Part-time", salary: "৳20,000 - ৳30,000", desc: "Storytelling e valo dokkhota thakte hobe.", status: "not-applied" },
    { id: 8, title: "Operations Manager", location: "Gazipur", type: "Full-time", salary: "৳70,000 - ৳85,000", desc: "Supply chain team lead korar khomota thakte hobe.", status: "not-applied" }
];

let currentTab = "all";

const cardContanier = document.querySelector(".jobs-cards");
const interviewSection = document.getElementById("interview");
const rejectedSection = document.getElementById("rejected");

function renderJobs() {
    cardContanier.innerHTML = "";

    let filteredJobs = jobs;
    if(currentTab !== "all") {
        filteredJobs = jobs.filter(function(job){
            return job.status === currentTab;
        })
    }
    
    updateCounts(filteredJobs);

    if(filteredJobs.length === 0 && currentTab !== "all") {
        cardContanier.classList.add("hidden");

        if(currentTab === "interview") {
            interviewSection.classList.remove("hidden");
            rejectedSection.classList.add("hidden");
        }

        if(currentTab === "rejected") {
            interviewSection.classList.add("hidden");
            interviewSection.classList.remove("hidden");
        }
        return;
    }

    cardContanier.classList.remove("hidden");
    interviewSection.classList.add("hidden");
    rejectedSection.classList.add("hidden");

    for(let i = 0; i < filteredJobs.length; i++){
        let job = filteredJobs[i];

        let card = document.createElement("div");
        card.className = "job-card bg-white p-6 rounded-xl relative";

        let badge = "";

        if (job.status === "interview"){
            badge = `<span class="badge badge-success mt-2 mb-1">INTERVIEW</span>`;
        }

        if(job.status === "rejected") {
            badge = `<span class="badge badge-success mt-2 mb-1">INTERVIEW</span>`;
        }

        card.innerHTML = `
        <div onclick="deleteJob(${job.id})"
            class="absolute right-5 top-5 cursor-pointer">
            <i class="fa-regular fa-trash-can"></i>
        </div>

        <h2 class="text-[#002C5C] font-bold text-[20px]">${job.title}</h2>
        <p class="text-[#64748B]">${job.location}</p>
        <p class="text-[#64748B]">${job.type} • ${job.salary}</p>

        ${badge}

        <p class="text-[#64748B] mt-2">${job.desc}</p>

        <div class="mt-4 flex gap-2">
            <button onclick="setInterview(${job.id})"
                class="btn btn-outline btn-success btn-sm">
                Interview
            </button>

            <button onclick="setRejected(${job.id})"
                class="btn btn-outline btn-error btn-sm">
                Rejected
            </button>
        </div>
        `;

        cardContanier.appendChild(card);
    }
}

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

function showOnly(tab){
    currentTab = tab;

    let buttons = document.querySelectorAll(".btn-set");

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("active");
    }

    document.getElementById(tab + "-btn").classList.add("active")

    renderJobs();
}

window.onload = function(){
    renderJobs();
}