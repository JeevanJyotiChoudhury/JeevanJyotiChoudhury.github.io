import React from "react";

export default function ServicesCard({ title, skills }) {
  return (
    <div className="skills-card">
      <div className="card__heading">{title}</div>
      <img src="" alt="" className="skills-card-img" height="0px" />
      <div className="skills-card-name">
        {skills.map((skill, i) =>
          i !== skills.length - 1 ? skill + ", " : skill
        )}
      </div>
    </div>
  );
}
