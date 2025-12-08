// lib/auth.js
export const API_BASE = "https://100.30.46.253";

// export default function saveAuth(data) {
//   if (typeof window === "undefined") return;
//   localStorage.setItem("accessToken", data.access);
//   localStorage.setItem("refreshToken", data.refresh);
//   localStorage.setItem("user", JSON.stringify(data.user));
// }

// export default function getAuth() {
//   if (typeof window === "undefined") return null;
//   const access = localStorage.getItem("accessToken");
//   const user = localStorage.getItem("user");
//   if (!access || !user) return null;
//   return { access, user: JSON.parse(user) };
// }

// export default function clearAuth() {
//   if (typeof window === "undefined") return;
//   localStorage.removeItem("accessToken");
//   localStorage.removeItem("refreshToken");
//   localStorage.removeItem("user");
// }


// lib/auth.js
export function getAuth() {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("auth");
  return stored ? JSON.parse(stored) : null;
}

export function saveAuth(data) {
  localStorage.setItem("auth", JSON.stringify(data));
}

export function logout() {
  localStorage.removeItem("auth");
}
