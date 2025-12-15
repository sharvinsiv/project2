export default function handler(req, res) {
  res.status(200).json([
    {
      opponent: "The Philadelphia Penalties",
      date: "2025-04-12",
      time: "3:00 PM",
      location: "Home"
    },
    {
      opponent: "Pittsburgh Riverhounds",
      date: "2025-04-19",
      time: "6:30 PM",
      location: "Away"
    },
    {
      opponent: "Harrisburg Handlers",
      date: "2025-04-26",
      time: "1:00 PM",
      location: "Home"
    }
  ]);
}

}
