import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Home, Dumbbell, Mail, BookOpen } from "lucide-react";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/guides", label: "Workout Guides", icon: BookOpen },
    { path: "/services", label: "Services", icon: Dumbbell },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-xl tracking-wide" style={{ color: "#0ABAB5" }}>
              TipTopFitness
            </h1>
          </Link>

          <div className="w-10" />
        </div>
      </header>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col h-full pt-20 pb-6">
          <div className="flex-1 px-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    active ? "text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  style={active ? { backgroundColor: "#0ABAB5" } : {}}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="px-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center">
              © 2025 TipTopFitness
            </p>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <main className="pt-14">
        <Outlet />
      </main>
    </div>
  );
}