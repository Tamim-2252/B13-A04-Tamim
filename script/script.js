const total = document.getElementById('total');
const available = document.getElementById('available');
const totalInterview = document.getElementById('total-interview');
const totalRejected = document.getElementById('total-rejected')

const tabActive = ["bg-[#3B82F6]", "text-white", "font-semibold"]
const tabInactive = ["bg-white", "border", "border-[#F1F2F4]", "text-[gray]", "font-medium",]

const allContainer = document.getElementById('all-container');
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('rejected-container');
const noJob = document.getElementById("no-job");
// let nameC = allContainer;

// button function

function switchTab(tab) {
    const tabs = ["all", "interview", "rejected"]
    // nameC = tab;
    for (const t of tabs) {
        const tabName = document.getElementById(t);
        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }

        const containerName = document.getElementById(t + "-container")
        if (t === tab) {
            containerName.classList.remove("hidden");
            if (containerName.children.length < 1) {
                noJob.classList.remove("hidden");
            }
            else {
                noJob.classList.add("hidden");
            }
        }
        else {
            containerName.classList.add("hidden");
        }
    }countingJobs()
}

// count function
function countingJobs() {

    total.innerText = allContainer.children.length;
    totalInterview.innerText = interviewContainer.children.length;
    totalRejected.innerText = rejectedContainer.children.length;
    available.innerText = allContainer.children.length;

    if (total.innerText < 1) {
        noJob.classList.remove("hidden");
    } 
    else if (totalInterview.innerText < 1) {
        noJob.classList.remove("hidden");
    }
    else if (totalRejected.innerText < 1) {
        noJob.classList.remove("hidden");
    } 
    else {
        noJob.classList.add("hidden");
    }
} countingJobs()

// card function

document.getElementById("jobs-container").addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const states = card.querySelector(".states");
    const parent = card.parentNode;

    if (clickedElement.classList.contains("interview")) {
        interviewContainer.appendChild(card);
        states.innerText = "INTERVIEW";
        states.classList.add("text-[#10B981]");
        countingJobs();
    }
    if (clickedElement.classList.contains("rejected")) {
        rejectedContainer.appendChild(card);
        states.innerText = "REJECTED";
        states.classList.add("text-[red]");
        countingJobs();
    }
    if (clickedElement.classList.contains("delete")) {
        parent.removeChild(card);
        countingJobs();
    }
})