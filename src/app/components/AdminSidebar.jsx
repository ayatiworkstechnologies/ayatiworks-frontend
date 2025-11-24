"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { logout } from "../lib/auth";
import {
  FiMenu,
  FiHome,
  FiUsers,
  FiShield,
  FiSettings,
  FiFileText,
  FiLogOut,
} from "react-icons/fi";

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  const navItems = [
    {
      label: "Overview",
      icon: <FiHome size={18} />,
      href: "/admin-dashboard",
    },
    {
      label: "Users",
      icon: <FiUsers size={18} />,
      href: "/admin-dashboard/users",
    },
    {
      label: "Roles",
      icon: <FiShield size={18} />,
      href: "/admin-dashboard/roles",
    },
    {
      label: "Blog",
      icon: <FiFileText size={18} />,
      href: "/admin-dashboard/blog",
    },
    {
      label: "Settings",
      icon: <FiSettings size={18} />,
      href: "/admin-dashboard/settings",
    },
  ];

  return (
    <aside
      className={
        `bg-white border-r border-slate-200 shadow-sm flex flex-col transition-all duration-200 ` +
        (collapsed ? "w-16" : "w-60")
      }
    >
      {/* Top Brand + Toggle */}
      <div className="px-3 py-3 border-b border-slate-200 flex items-center justify-between">
        {!collapsed && (
          <div>
            <h2 className="text-sm font-semibold text-slate-900 tracking-tight">
              Admin Portal
            </h2>
            <p className="text-[9px] text-slate-500">
              Role-based Control Center
            </p>
          </div>
        )}
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className={
            "flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all " +
            (collapsed ? "w-10 h-10 mx-auto" : "w-8 h-8")
          }
        >
          <FiMenu size={16} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              className={
                "w-full flex items-center transition-all rounded-lg px-2 py-2 text-xs sm:text-sm " +
                (collapsed ? "justify-center" : "gap-2") +
                " " +
                (active
                  ? "bg-blue-50 text-blue-600 font-medium border border-blue-100 shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900")
              }
            >
              <span
                className={
                  "flex items-center justify-center " +
                  (collapsed ? "" : "rounded-md") +
                  (active ? " text-blue-600" : " text-slate-500")
                }
              >
                {item.icon}
              </span>

              {/* Hide label when collapsed */}
              {!collapsed && <span>{item.label}</span>}

              {/* Active indicator dot (only when expanded) */}
              {!collapsed && active && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-500" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-slate-200 p-3">
        <button
          onClick={() => {
            logout();
            router.push("/admin");
          }}
          className={
            "w-full flex items-center justify-center gap-1 rounded-lg py-2 text-xs text-red-600 hover:bg-red-50 transition " +
            (collapsed ? "justify-center" : "")
          }
        >
          <FiLogOut size={14} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
