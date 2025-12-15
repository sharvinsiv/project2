export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    "$schema": "https://json-outline-schema.github.io/schema.json",
    "id": "happy-volley-menu",
    "title": "Happy Volley FC Menu",
    "items": [
      { "title": "Home", "slug": "home", "metadata": { "page": "home" } },

      {
        "title": "Team",
        "items": [
          { "title": "Roster", "slug": "roster", "metadata": { "page": "roster" } },
          { "title": "Stats", "slug": "stats", "metadata": { "page": "stats" } },
          { "title": "Standings", "slug": "standings", "metadata": { "page": "standings" } }
        ]
      },

      {
        "title": "Season",
        "items": [
          { "title": "Schedule", "slug": "schedule", "metadata": { "page": "schedule" } },
          { "title": "Join Us", "slug": "join", "metadata": { "page": "join" } }
        ]
      },

      {
        "title": "More",
        "items": [
          { "title": "Parent Info", "slug": "parent-info", "metadata": { "page": "parent-info" } },
          { "title": "Contact", "slug": "contact", "metadata": { "page": "contact" } }
        ]
      }
    ]
  });
}
