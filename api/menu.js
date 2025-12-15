export default function handler(req, res) {
  res.status(200).json({
    items: [
      { label: "Home", path: "/" },
      { label: "Schedule", path: "/schedule" },
      { label: "Roster", path: "/roster" },
      { label: "Stats", path: "/stats" },
      { label: "Standings", path: "/standings" },
      { label: "Join Us", path: "/join" }
    ]
  });
}
