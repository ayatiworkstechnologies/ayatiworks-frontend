"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, logout } from "../lib/auth";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://100.30.46.253/";

export default function EmployeeDashboard() {
  const router = useRouter();
  const [auth, setAuth] = useState(null);

  const [profile, setProfile] = useState(null);
  const [attendance, setAttendance] = useState(null);
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [attLoading, setAttLoading] = useState(false);
  const [taskUpdatingId, setTaskUpdatingId] = useState(null);
  const [error, setError] = useState("");

  /* ---------- Auth Guard ---------- */
  useEffect(() => {
    const stored = getAuth();
    if (!stored) {
      router.push("/admin");
    } else if (stored.user?.role?.slug === "admin") {
      router.push("/admin-dashboard");
    } else {
      setAuth(stored);
    }
  }, [router]);

  /* ---------- Fetch Dashboard Data ---------- */
  useEffect(() => {
    if (!auth) return;

    async function fetchDashboard() {
      try {
        setLoading(true);
        setError("");
        const token = auth?.tokens?.access;

        // Adjust these endpoints to match your backend
        const [meRes, attRes, taskRes] = await Promise.all([
          fetch(`${API_BASE}/api/auth/me/`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${API_BASE}/api/attendance/today/`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${API_BASE}/api/tasks/my/`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!meRes.ok) throw new Error("Failed to load profile");
        if (!attRes.ok) throw new Error("Failed to load attendance");
        if (!taskRes.ok) throw new Error("Failed to load tasks");

        const [meData, attData, taskData] = await Promise.all([
          meRes.json(),
          attRes.json(),
          taskRes.json(),
        ]);

        setProfile(meData);
        setAttendance(attData);
        setTasks(Array.isArray(taskData) ? taskData : []);
      } catch (err) {
        console.error(err);
        setError("Unable to load dashboard data.");
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, [auth]);

  if (!auth) return null;

  const user = profile || auth.user || {};
  const username = user.username || "User";
  const role =
    user.role?.name ||
    user.role?.slug ||
    auth.user?.role?.name ||
    auth.user?.role?.slug ||
    "Employee";

  /* ---------- Actions ---------- */

  function handleLogout() {
    logout();
    router.push("/admin");
  }

  const handleCheckIn = async () => {
    if (!auth) return;
    setAttLoading(true);
    setError("");

    try {
      const token = auth.tokens.access;

      // POST /check-in
      const res = await fetch(`${API_BASE}/api/attendance/check-in/`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        console.error("Check-in failed", body);
        throw new Error("Check-in failed");
      }

      const data = await res.json();
      setAttendance(data);
    } catch (err) {
      console.error(err);
      setError("Unable to check in.");
    } finally {
      setAttLoading(false);
    }
  };

  const handleCheckOut = async () => {
    if (!auth) return;
    setAttLoading(true);
    setError("");

    try {
      const token = auth.tokens.access;

      // POST /check-out
      const res = await fetch(`${API_BASE}/api/attendance/check-out/`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        console.error("Check-out failed", body);
        throw new Error("Check-out failed");
      }

      const data = await res.json();
      setAttendance(data);
    } catch (err) {
      console.error(err);
      setError("Unable to check out.");
    } finally {
      setAttLoading(false);
    }
  };

  const canCheckIn =
    attendance && !attendance.checked_in && !attendance.checked_out;
  const canCheckOut =
    attendance && attendance.checked_in && !attendance.checked_out;

  const handleTaskStatusChange = async (task, newStatus) => {
    if (!auth) return;
    setTaskUpdatingId(task.id);
    setError("");

    try {
      const token = auth.tokens.access;

      const res = await fetch(`${API_BASE}/api/tasks/${task.id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        console.error("Task update failed", body);
        throw new Error("Failed to update task");
      }

      const updated = await res.json();

      setTasks((prev) =>
        prev.map((t) => (t.id === updated.id ? updated : t))
      );
    } catch (err) {
      console.error(err);
      setError("Unable to update task.");
    } finally {
      setTaskUpdatingId(null);
    }
  };

  /* ---------- Helpers ---------- */

  const formatTime = (iso) => {
    if (!iso) return "—";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "—";
    return d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const todayHours =
    attendance?.total_hours != null
      ? `${attendance.total_hours.toFixed
          ? attendance.total_hours.toFixed(2)
          : attendance.total_hours} hrs`
      : attendance?.checked_in && attendance?.checked_out
      ? "Calculated"
      : "—";

  const pendingTasks = tasks.filter(
    (t) => t.status !== "completed" && t.status !== "done"
  );
  const completedTasks = tasks.filter(
    (t) => t.status === "completed" || t.status === "done"
  );

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-slate-200 shadow-sm flex flex-col">
        <div className="px-5 py-4 border-b border-slate-200">
          <h2 className="text-sm font-semibold text-slate-900">
            Employee Panel
          </h2>
          <p className="text-[11px] text-slate-500">
            Tools & info for team members
          </p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 text-sm">
          <button
            onClick={() => router.push("/employee-dashboard")}
            className="w-full text-left px-3 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium"
          >
            🏠 Dashboard
          </button>
          <button
            onClick={() => router.push("/employee-dashboard/profile")}
            className="w-full text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            👤 Profile
          </button>
          <button
            onClick={() => router.push("/employee-dashboard/tasks")}
            className="w-full text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            📋 My Tasks
          </button>
          <button
            onClick={() => router.push("/employee-dashboard/support")}
            className="w-full text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            💬 Support
          </button>
        </nav>

        <div className="border-t border-slate-200 p-3">
          <button
            onClick={handleLogout}
            className="w-full py-2 text-xs text-red-600 hover:bg-red-50 rounded-lg"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              Welcome, {username}
            </h1>
            <p className="text-xs text-slate-500">
              You are logged in as {role}
              {user.last_login && (
                <>
                  {" "}
                  • Last login:{" "}
                  {new Date(user.last_login).toLocaleString(undefined, {
                    day: "2-digit",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </>
              )}
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white border border-slate-200 px-3 py-2 rounded-xl shadow-sm">
            <div className="h-8 w-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-semibold uppercase">
              {username[0]}
            </div>
            <div className="text-xs">
              <p className="font-medium text-slate-800">{username}</p>
              <p className="text-slate-500">{role}</p>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-4 text-[11px] text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </div>
        )}

        {/* Summary + Attendance */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Today Tasks (dynamic from API) */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-xs text-slate-500">Today&apos;s Tasks</p>
            <p className="mt-1 text-3xl font-semibold text-blue-600">
              {pendingTasks.length}
            </p>
            <p className="text-[10px] text-slate-500 mt-1">
              {completedTasks.length} completed today
            </p>
          </div>

          {/* Attendance Status */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-xs text-slate-500">Attendance (Today)</p>
            <p className="mt-1 text-sm text-slate-800">
              In: <span className="font-semibold">{formatTime(attendance?.check_in_time)}</span>
            </p>
            <p className="text-sm text-slate-800">
              Out: <span className="font-semibold">{formatTime(attendance?.check_out_time)}</span>
            </p>
            <p className="text-[10px] text-slate-500 mt-1">
              Hours: {todayHours}
            </p>
            <div className="mt-2 flex gap-2">
              <button
                disabled={!canCheckIn || attLoading}
                onClick={handleCheckIn}
                className={`px-2 py-1 text-[10px] rounded-lg border ${
                  canCheckIn
                    ? "border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                    : "border-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                {attLoading && canCheckIn ? "Checking in..." : "Check In"}
              </button>
              <button
                disabled={!canCheckOut || attLoading}
                onClick={handleCheckOut}
                className={`px-2 py-1 text-[10px] rounded-lg border ${
                  canCheckOut
                    ? "border-red-500 text-red-600 hover:bg-red-50"
                    : "border-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                {attLoading && canCheckOut ? "Checking out..." : "Check Out"}
              </button>
            </div>
          </div>

          {/* Completed This Week (derived simple) */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-xs text-slate-500">Completed Tasks</p>
            <p className="mt-1 text-3xl font-semibold text-emerald-600">
              {completedTasks.length}
            </p>
            <p className="text-[10px] text-slate-500 mt-1">
              Keep up the good work
            </p>
          </div>

          {/* Quick Status */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-xs text-slate-500">Status</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {attendance?.checked_in
                ? attendance?.checked_out
                  ? "Day Completed"
                  : "Checked In"
                : "Not Checked In"}
            </p>
            <p className="text-[10px] text-slate-500 mt-1">
              Use Check In / Check Out to record your day.
            </p>
          </div>
        </div>

        {/* Tasks List */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-slate-900">
              My Tasks
            </h2>
            <p className="text-[10px] text-slate-500">
              {pendingTasks.length} pending • {completedTasks.length} completed
            </p>
          </div>

          {loading ? (
            <p className="text-xs text-slate-500 animate-pulse">
              Loading tasks...
            </p>
          ) : tasks.length === 0 ? (
            <p className="text-xs text-slate-400">
              No tasks assigned yet.
            </p>
          ) : (
            <ul className="space-y-2 text-xs">
              {tasks.map((task) => {
                const isCompleted =
                  task.status === "completed" || task.status === "done";

                return (
                  <li
                    key={task.id}
                    className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border border-slate-100 hover:bg-slate-50"
                  >
                    <div>
                      <p
                        className={`font-medium ${
                          isCompleted
                            ? "text-emerald-600 line-through"
                            : "text-slate-800"
                        }`}
                      >
                        {task.title}
                      </p>
                      <div className="flex gap-3 text-[10px] text-slate-500 mt-0.5">
                        <span>
                          Status:{" "}
                          <span
                            className={
                              isCompleted
                                ? "text-emerald-600"
                                : "text-orange-500"
                            }
                          >
                            {task.status || "pending"}
                          </span>
                        </span>
                        {task.due_date && (
                          <span>
                            Due:{" "}
                            {new Date(task.due_date).toLocaleDateString(
                              undefined,
                              {
                                day: "2-digit",
                                month: "short",
                              }
                            )}
                          </span>
                        )}
                        {task.priority && (
                          <span>Priority: {task.priority}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {!isCompleted && (
                        <button
                          onClick={() =>
                            handleTaskStatusChange(task, "completed")
                          }
                          disabled={taskUpdatingId === task.id}
                          className="px-2 py-1 rounded-md text-[10px] bg-emerald-50 text-emerald-600 hover:bg-emerald-100 disabled:opacity-60"
                        >
                          {taskUpdatingId === task.id
                            ? "Updating..."
                            : "Mark Done"}
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Recent Activity (static placeholder / can bind to logs later) */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            Recent Activity
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✅ Task updates will appear here from your actions.</li>
            <li>🕒 Check-in / Check-out logs can be shown here if you expose them via API.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
