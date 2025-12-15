export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json([
    { "date": "2026-03-09", "opponent": "Blue Valley United", "location": "Home", "time": "10:00 AM" },
    { "date": "2026-03-16", "opponent": "River City FC", "location": "Away", "time": "12:30 PM" },
    { "date": "2026-03-23", "opponent": "Harrisburg Juniors", "location": "Home", "time": "9:00 AM" },
    { "date": "2026-04-06", "opponent": "Keystone Kickers", "location": "Away", "time": "11:15 AM" }
  ]);
}
