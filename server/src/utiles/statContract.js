////////!  The ONE shape every adapter must return.
////////!  If an adapter can't fill a field, it returns null — never undefined, never a made-up 0.

//? "0" means the value is genuinely zero. "null" means the platform doesn't expose it.

/**
 * ProfileStats
 * {
 *   platform:    "github" | "leetcode" | "gfg"
 *   username:    string
 *   displayName: string | null      // real name if available, else null
 *   avatarUrl:   string | null
 *   profileUrl:  string             // link back to their profile
 *   stats: [                        // ordered list — renderer draws them in this order
 *     { key: "repos", label: "Repos", value: 42 }
 *   ]
 *   fetchedAt:   ISO date string
 * }
 */

//! Every stat entry must have all three keys. The customizer filters by "key".
export const createStat = (key, label, value) => {
  return {
    key,
    label,
    value,
  };
};

//! Adapters build their result through this so the shape can never drift.
export const createProfileStats = ({
  platform,
  username,
  displayName = null,
  avatarUrl = null,
  profileUrl,
  stats = [],
}) => {
  return {
    platform,
    username,
    displayName,
    avatarUrl,
    profileUrl,
    stats,
    fetchedAt: new Date().toISOString(),
  };
};

//? Used in dev + tests to catch a malformed adapter early instead of at render time.
export const isValidProfileStats = (data) => {
  if (!data) return false;
  if (!data.platform || !data.username || !data.profileUrl) return false;
  if (!Array.isArray(data.stats)) return false;

  // every stat must be fully formed
  for (const stat of data.stats) {
    if (!stat.key || !stat.label) return false;
    if (stat.value === undefined) return false;
  }

  return true;
};

//! Central list of supported platforms. Adding a platform starts here.
export const SUPPORTED_PLATFORMS = ["github", "leetcode", "gfg"];