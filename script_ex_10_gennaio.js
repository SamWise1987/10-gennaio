function findJobs(title, location) {
    title = title.toLowerCase();
    location = location.toLowerCase();

    const filteredJob = jobs.filter(job =>
        job.title.toLowerCase().includes(title) &&
        job.location.toLowerCase().includes(location)
    );

    return {
        result: filteredJob,
        count: filteredJob.length,
    }

};
