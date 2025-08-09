import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/LocalStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [AppliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(AppliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = AppliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter == "onsite") {
      const onsiteJobs = AppliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();

    if (jobs.length > 0) {
      // const jobApplied = jobs.filter((job) => storedJobsIds.includes(job.id));

      const jobApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
      console.log(jobs, storedJobsIds, jobApplied);
    }
  }, [jobs]);

  return (
    <div className="container mx-auto">
      <div className="py-20">
        <div className="flex">
          <h2 className="text-3xl mb-5">Applied Jobs {AppliedJobs.length}</h2>
          <div className="ml-auto">
            <select
              className="border border-gray-500 p-2 rounded-lg"
              onChange={(e) => handleJobFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="remote">Remote</option>
              <option value="onsite">Onsite</option>
            </select>
          </div>
        </div>
        {
          <div className="flex flex-wrap gap-5">
            {displayJobs.map((job) => (
              <ul
                className="border border-gray-500 p-5 rounded-lg"
                key={job.id}
              >
                <li className="w-50 h-50 p-4 inline-flex items-center bg-[#F4F4F4]">
                  <img className="h-15" src={job.logo} alt="" />
                </li>
                <li>{job.job_title}</li>
                <li>{job.job_type}</li>
                <li>{job.location}</li>
                <li>{job.remote_or_onsite}</li>
                <li>{job.salary}</li>
              </ul>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
