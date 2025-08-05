import React, { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
  
  const [jobs, setJobs] = useState([]);
  // do not the best way to load data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold">Featured Jobs {jobs.length}</h2>
        <p className="">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center mt-5">
        <div className={dataLength === jobs.length ? "hidden" : "block"}>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-primary"
          >
            show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
