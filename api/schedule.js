export default function handler(req, res) {
  res.status(200).json([
    {
      date: "Dec 8",
      opponent: "The Philadelphia Penalties",
      location: "Away",
      time: "3:00 PM"
    },
    {
      date: "Dec 17",
      opponent: "Harrisburg Handlers",
      location: "Away",
      time: "2:50 PM"
    },
    {
      date: "Dec 26",
      opponent: "Pittsburgh Riverhounds",
      location: "Home",
      time: "10:30 AM"
    }
  ]);
}
