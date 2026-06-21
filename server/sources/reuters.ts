import { defineRSSSource } from "../utils/source"

// Reuters provides multiple feeds; this uses the world news RSS feed
export default defineRSSSource("https://www.reuters.com/world/rss.xml")
