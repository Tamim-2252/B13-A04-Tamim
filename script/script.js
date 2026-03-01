let total = document.getElementById('total');
let stotal = document.getElementById('stotal');
let totalInterview = document.getElementById('total-interview');
let totalRejected = document.getElementById('total-rejected')

const jobContainer = document.getElementById('job-container');
const tabActive = ["bg-[#3B82F6]", "text-white", "font-semibold"]
const tabInactive = ["bg-white", "border", "border-[#F1F2F4]" ,"text-[gray]", "font-medium",]


// count function
 function countingJobs () {
    total.innerText = jobContainer.children.length;
    stotal.innerText = jobContainer.children.length;
} countingJobs()

// button function
function switchTab(tab) {
    const tabs = ["all","interview","rejected"]

    for (const t of tabs) {
        const tabName = document.getElementById(t);
        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);            
        }
    }
}