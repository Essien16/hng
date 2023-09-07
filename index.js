const express = require("express");
const app = express();
const port = 3900;

app.get("/get_info", (req, res) => {
  const slackName = req.query.slack_name;

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];

  const utcOffset = currentDate.getTimezoneOffset() / 60; 
  if (utcOffset < -2 || utcOffset > 2) {
    res.status(400).json({ error: "Invalid UTC time" });
    return;
  }
  const utcTime = new Date().toISOString();

  const track = req.query.track;
  const githubFileUrl = req.query.github_file_url;
  const githubRepoUrl = req.query.github_repo_url;

  
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
