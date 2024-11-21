import React from "react";

export default function Bio() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="text-2xl font-semibold leading-none tracking-tight">
          Bio
        </div>
      </div>
      <div className="p-6 pt-0">
        <p className="text-muted-foreground">
          I am a software engineer with a passion for building scalable and
          efficient web applications.
        </p>
      </div>
    </div>
  );
}
