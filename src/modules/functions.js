import jobList from "./jobList";

/* eslint-disable linebreak-style */
export const getJobs = () => {
    return JSON.parse(localStorage.task);
}

export const displayJobs = (lis) => {
    if(!window.localStorage.task) return;
    const lis = JSON.parse(localStorage.task);
    lis.forEach((task) => {
        jobList.addJob(task.description);
    }
)};