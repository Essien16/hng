const task1 = (req, res) => {
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
    const utcTime = new Date().toISOString().slice(0, -1);
    

    const track = req.query.track;
    const githubFileUrl = "https://github.com/essien16/hng/src/index.js";
    const githubRepoUrl = "https://github.com/essien16/hng";

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
};

module.exports = {task1};