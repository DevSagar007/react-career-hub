import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card border px-6 py-6 border-gray-50 bg-base-100 shadow-sm">
        <figure>
          <img className="h-16" src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-2">
            <div className="badge badge-outline badge-primary">
              {remote_or_onsite}
            </div>
            <div className="badge badge-outline badge-primary">{job_type}</div>
          </div>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="inline-flex gap-3">
            <div className="inline-flex items-center gap-1">
              <span>
                <SlLocationPin></SlLocationPin>
              </span>
              <span>{location}</span>
            </div>
            <div className="inline-flex items-center gap-1">
              <span>
                <CiDollar></CiDollar>
              </span>
              <span>{salary}</span>
            </div>
          </div>
          <div className="card-actions mt-4">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
