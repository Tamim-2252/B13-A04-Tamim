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
const cards = document.getElementsByClassName("card");
let currentTab = "all";

// button function

function switchTab(tab) {
    const tabs = ["all", "interview", "rejected"]
    currentTab = tab;
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
            if (containerName.children.length < 1) {
                noJob.classList.remove("hidden");
            }
            else {
                noJob.classList.add("hidden");
            }
        }
    } countingJobs()
}

// count function

function countingJobs() {

    total.innerText = allContainer.children.length;
    totalInterview.innerText = countStatus("interview");
    totalRejected.innerText = countStatus("rejected");
    if (currentTab !== "all") {
          available.innerText = countStatus(currentTab);
    }else{
        available.innerText = allContainer.children.length;
    }
  

    function countStatus(bar) {
        let count = 0;
        for (let c = 0; c < cards.length; c++) {

            if (cards[c].getAttribute("data-status") === bar) {
                count++;
            }
        }
        return count;
    }

    if (available.innerText < 1) {
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

        states.innerText = "INTERVIEW";
        states.classList.remove("text-[red]");
        states.classList.add("text-[#10B981]");

        if (card.getAttribute("data-status") === "rejected" && currentTab !== "all") {
            card.style.display = ("none")
        }
        card.setAttribute("data-status", "interview");
    }
    if (clickedElement.classList.contains("rejected")) {

        states.innerText = "REJECTED";
        // states.classList.remove("text-[#10B981]");
        states.classList.add("text-[red]");

        if (card.getAttribute("data-status") === "interview" && currentTab !== "all") {
            card.style.display = ("none")
        }
        card.setAttribute("data-status", "rejected");
    }

    if (clickedElement.classList.contains("delete")) {
        parent.removeChild(card);
    }
    countingJobs();

})


// filter function

function filter(tab) {

    for (let c = 0; c < allContainer.children.length; c++) {
        if (tab === "all") {
            cards[c].style.display = "block";
        }
        else if (cards[c].getAttribute("data-status") === tab) {
            cards[c].style.display = "block";
        }
        else {
            cards[c].style.display = "none";
        }
    }
}







// const total = document.getElementById('total');
// const available = document.getElementById('available');
// const totalInterview = document.getElementById('total-interview');
// const totalRejected = document.getElementById('total-rejected')

// const tabActive = ["bg-[#3B82F6]", "text-white", "font-semibold"]
// const tabInactive = ["bg-white", "border", "border-[#F1F2F4]", "text-[gray]", "font-medium",]

// const allContainer = document.getElementById('all-container');
// const interviewContainer = document.getElementById('interview-container');
// const rejectedContainer = document.getElementById('rejected-container');
// const noJob = document.getElementById("no-job");
// let currentTab = "all";

// // button function

// function switchTab(tab) {
//     const tabs = ["all", "interview", "rejected"]
//     currentTab = tab;
//     for (const t of tabs) {
//         const tabName = document.getElementById(t);
//         if (t === tab) {
//             tabName.classList.remove(...tabInactive);
//             tabName.classList.add(...tabActive);
//         }
//         else {
//             tabName.classList.remove(...tabActive);
//             tabName.classList.add(...tabInactive);
//         }

//         const containerName = document.getElementById(t + "-container")
//         if (t === tab) {
//             // containerName.classList.remove("hidden");
//             if (containerName.children.length < 1) {
//                 noJob.classList.remove("hidden");
//             }
//             else {
//                 noJob.classList.add("hidden");
//             }
//         }
//         else {
//             // containerName.classList.add("hidden");
//         }
//     } countingJobs()
// }

// // count function
// function countingJobs() {

//     const counts = {
//         all: allContainer.children.length,
//         interview: interviewContainer.children.length,
//         rejected: rejectedContainer.children.length,
//     }

//     total.innerText = counts.all;
//     totalInterview.innerText = counts.interview;
//     totalRejected.innerText = counts.rejected;
//     available.innerText = counts[currentTab];

//     if (counts[currentTab] < 1) {
//         noJob.classList.remove("hidden");
//     }
//     else {
//         noJob.classList.add("hidden");
//     }

// } countingJobs()

// card function

// document.getElementById("jobs-container").addEventListener("click", function (event) {
//     const clickedElement = event.target;
//     const card = clickedElement.closest(".card");
//     const states = card.querySelector(".states");
//     const parent = card.parentNode;

//     if (parent === interviewContainer) {
//         interviewContainer.removeChild(card);
//     }
//     else if (parent === rejectedContainer) {
//         rejectedContainer.removeChild(card);
//     }



//     if (parent === allContainer) {
//         if (clickedElement.classList.contains("interview")) {
//             states.innerText = "INTERVIEW";
//             states.classList.remove("text-[red]");
//             states.classList.add("text-[#10B981]");

//             if (card.classList.contains("apply")) {
//                 const copy = card.cloneNode(true)
//                 interviewContainer.appendChild(copy);
//                 // rejectedContainer.removeChild(copy);
//                 card.classList.remove("apply")
//                 card.classList.add("applied")
//             }
//         }
//         if (clickedElement.classList.contains("rejected")) {
//             states.innerText = "REJECTED";
//             states.classList.remove("text-[#10B981]");
//             states.classList.add("text-[red]");

//             if (card.classList.contains("apply")) {
//                 const copy = card.cloneNode(true)
//                 rejectedContainer.appendChild(copy);
//                 // interviewContainer.removeChild(copy);
//                 card.classList.remove("applied")
//                 card.classList.add("apply")

//             }
//         }
//     }
//     else {
//         if (clickedElement.classList.contains("interview")) {
//             interviewContainer.appendChild(card);
//             states.innerText = "INTERVIEW";
//             states.classList.remove("text-[red]");
//             states.classList.add("text-[#10B981]");
//         }
//         if (clickedElement.classList.contains("rejected")) {
//             rejectedContainer.appendChild(card);
//             states.innerText = "REJECTED";
//             states.classList.add("text-[red]");
//         }
//     }


//     if (clickedElement.classList.contains("delete")) {
//         parent.removeChild(card);
//     }
//     countingJobs();
// })