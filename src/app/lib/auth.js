// lib/auth.js
export const API_BASE = "http://3.236.78.66/";

// export function saveAuth(data) {
//   if (typeof window === "undefined") return;
//   localStorage.setItem("accessToken", data.access);
//   localStorage.setItem("refreshToken", data.refresh);
//   localStorage.setItem("user", JSON.stringify(data.user));
// }

// export function getAuth() {
//   if (typeof window === "undefined") return null;
//   const access = localStorage.getItem("accessToken");
//   const user = localStorage.getItem("user");
//   if (!access || !user) return null;
//   return { access, user: JSON.parse(user) };
// }

// export function clearAuth() {
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
