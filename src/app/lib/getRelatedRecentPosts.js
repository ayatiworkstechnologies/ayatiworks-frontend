import { POSTS } from "./blogs-data";

function parseDateSafe(dateStr) {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? 0 : d.getTime();
}

export function getRelatedRecentPosts({
  currentPostId,
  category,
  limit = 3,
}) {
  return POSTS
    .filter((post) => post.id !== currentPostId)
    .filter((post) => post.category === category)
    .sort((a, b) => parseDateSafe(b.date) - parseDateSafe(a.date))
    .slice(0, limit);
}
