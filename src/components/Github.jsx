import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div style={{ color: "white" }}>
      <center>
        <h1>Github</h1>
      </center>
      <div
        className="react-activity-calendar"
        style={{
          padding: "10px 0",
          width: "90%",
          margin: "auto",
        }}
      >
        <center>
          <GitHubCalendar username="JeevanJyotiChoudhury" />
        </center>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "10px 0",
          width: "90%",
          margin: "auto",
        }}
      >
        <div className="github-stats">
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=JeevanJyotiChoudhury&theme=dark"
            alt="GitHub Streak Stats"
          />
        </div>
        <div className="github-stats">
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=JeevanJyotiChoudhury&show_icons=true&theme=radical"
            alt="GitHub Stats Card"
          />
        </div>
        <div className="github-stats">
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=JeevanJyotiChoudhury&show_icons=true&locale=en&layout=compact&theme=radical"
            alt="GitHub Top Languages"
          />
        </div>
      </div>
    </div>
  );
};

export default Github;
