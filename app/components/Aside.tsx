import React from "react";
import Skills from "./Skills";
import { general, links } from "../config/settings";
import Image from "next/image";

export default function Aside({ skills }: { skills: string[] }) {
  return (
    <aside className="md:col-span-1">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 pt-6">
          <div className="flex flex-col items-start gap-2 ">
            <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
              <img
                alt="Profile Picture"
                loading="lazy"
                width="150"
                height="150"
                decoding="async"
                data-nimg="1"
                className="rounded-full size-12 md:w-full h-auto object-cover border-2"
                style={{ color: "transparent" }}
                // src="/avatar.svg"
                src="https://media.licdn.com/dms/image/v2/D4E03AQHlnv21qUtgPg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712918671835?e=1737590400&v=beta&t=Qwtj9LmZiDkNKXpcug6X6hkZPUn7xxe_xXeCWKZjFRM"
              />
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-bold md:mt-4 text-xl md:text-2xl">
                  {general.fullName}
                </h1>
                <p className="text-sm md:text-base text-muted-foreground">
                  {general.position}
                </p>
              </div>
            </div>
            <p className="mt-2 text-start text-sm text-muted-foreground">
              {general.shortBio}
            </p>
            <a
              target="_blank"
              className="bg-blue-600 text-white inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-lg text-base font-semibold ring-2 ring-blue-500 ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full py-3 px-6 mt-4 text-center"
              href="/cv-nihat.pdf"
            >
              <span className="mr-2">📄</span> Where is your CV
            </a>
            <a
              target="_blank"
              className="bg-teal-600 text-white inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-lg text-base font-semibold ring-2 ring-teal-500 ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full py-3 px-6 mt-4 text-center"
              href="mailto:abdullazadenihat@gmail.com"
            >
              <span className="mr-2">📧</span> Let me email you
            </a>

            <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
              {links.map((link, index) => (
                <a
                  target="_blank"
                  aria-label="Instagram Logo"
                  className="cursor-pointer flex items-center gap-2 group"
                  href={link.url}
                >
                  <Image alt="Twitter" src={link.logo} width={16} height={16} />
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                    {link.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-6">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            Skills
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="flex flex-wrap gap-2 ">
            {skills.map((skill, index) => <Skills key={index} name={skill} />)}
          </div>
        </div>
      </div>
    </aside>
  );
}
