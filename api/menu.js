export default function handler(req, res) {
  res.status(200).json([
    { title: "Home", path: "/" },
    { title: "Schedule", path: "/schedule" },
    { title: "Roster", path: "/roster" },
    { title: "Stats", path: "/stats" },
    { title: "Standings", path: "/standings" },
    { title: "Join Us", path: "/join" }
  ]);
}
