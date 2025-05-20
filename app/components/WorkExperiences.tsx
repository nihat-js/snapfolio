import React from "react";
import { workExperiences } from "../config/settings";

export default function WorkExperiences() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 pt-6">
        <ul className="space-y-8">
          {workExperiences.map((experience) => (
            <WorkExperience key={experience.position} data={experience} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export function WorkExperience({ data }: { data: any }) {
	console.log(data);
  return (
    <>
      <li className="border-b last:border-b-0 pb-8 last:pb-0">
        <div className="flex items-center space-x-4">
          <img
            alt="Tech Innovators Inc."
            loading="lazy"
            width="40"
            height="40"
            decoding="async"
            data-nimg="1"
            className="rounded-md border shadow-md object-cover"
            style={{ color: "transparent" }}
            src={data.logo || "./weblabstudio.svg"}
          />
          <div>
            <h3 className="font-semibold">{data.position}</h3>
            <p className="text-sm text-muted-foreground">{data.company}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-calendar-days size-3 mr-2"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2">
            </rect>
            <path d="M3 10h18"></path>
            <path d="M8 14h.01"></path>
            <path d="M12 14h.01"></path>
            <path d="M16 14h.01"></path>
            <path d="M8 18h.01"></path>
            <path d="M12 18h.01"></path>
            <path d="M16 18h.01"></path>
          </svg>
          {data.duration}
        </p>
        <p className="text-sm mt-2">{data.text}</p>
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2 w-full">
        </div>
      </li>
    </>
  );
}
