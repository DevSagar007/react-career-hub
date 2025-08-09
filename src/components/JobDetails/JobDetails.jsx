import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
 import { ToastContainer, toast } from "react-toastify";
import { saveJobApplication } from "../../utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt); //when check === type and id both check
  // console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("Job Applied Successfully!");
  };

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-8">
            <h2 className="text-4xl font-bold mb-3">{job.job_title}</h2>
            <p className="mb-5">
              <strong>Job Description:</strong>
              {job.job_description}
            </p>
            <p className="mb-5">
              <strong>Job Responsibility: </strong>
              {job.job_responsibility}
            </p>
            <p className="mb-5">
              <strong>
                Educational Requirements: <br />
              </strong>
              {job.educational_requirements}
            </p>
            <p className="mb-5">
              <strong>
                Experience Requirements: <br />
              </strong>
              {job.experiences}
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="wrapper bg-[#333232] px-5 py-5 rounded-2xl">
              <h2 className="text-2xl mb-2">Job Details {id}</h2>
              <ul>
                <li>
                  <strong>Job Type:</strong> {job.job_type}
                </li>
                <li>
                  <strong>Job Location:</strong> {job.location}
                </li>
                <li>
                  <strong>Salary:</strong> {job.salary}
                </li>
              </ul>
            </div>
            <button
              onClick={handleApplyJob}
              className="btn btn-primary w-full mt-5"
            >
              Apply Now
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
