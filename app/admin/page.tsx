"use client";

import { useState, useEffect, SetStateAction } from "react";

import {
  LayoutDashboard,
  Users,
  FileText,
  FolderKanban,
  BookOpen,
  Menu,
  X,
  Bell,
  Search,
  ChevronRight,
  Edit,
  Trash2,
  Download,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import BlogEditorSection from "@/Components/page/admin/blog/edit";
import UsersTable from "@/Components/page/admin/users/view";
import HomeCalculatorTable from "@/Components/page/admin/home_calc/edit";
import AgentApplication from "../page";
import AgentApplicationTable from "@/Components/page/admin/custome/edit";
import ChecklistDownloads from "@/Components/global/ChecklistDownloads";


const sidebarItems = [
  {
    id: "users",
    title: "Users",
    icon: Users,
  },
  {
    id: "home-applications",
    title: "Home Applications",
    icon: FileText,
  },
  {
    id: "other-forms",
    title: "Other Form Data",
    icon: FolderKanban,
  },
  {
    id: "blogs",
    title: "Blogs",
    icon: BookOpen,
  },
  {
    id: "checklist",
    title: "Checklist Downloads",
    icon: Download,
  },
];

export default function Dashboard() {
  // Login States
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [activePage, setActivePage] = useState("users");
  const [mobileMenu, setMobileMenu] = useState(false);

  const [blogView, setBlogView] = useState("list");

  const [editingBlogSlug, setEditingBlogSlug] = useState<string | null>(null);

  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle Login Submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "FLUIDadmin1234##") {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.fluid.financial/rb.php");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs data");
      }
      const data = await response.json();
      setBlogs(data.blogs || data);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteBlog = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      const response = await fetch(
        `https://api.fluid.financial/be.php?id=${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (data.success) {
        alert("Blog deleted successfully!");
        fetchBlogs();
      } else {
        alert(`Failed to delete: ${data.message}`);
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("An error occurred while deleting the blog.");
    }
  };

  useEffect(() => {
    if (isAuthenticated && activePage === "blogs" && blogView === "list") {
      fetchBlogs();
    }
  }, [activePage, blogView, isAuthenticated]);

  const handleSidebarClick = (id: SetStateAction<string>) => {
    setActivePage(id);
    if (id === "blogs") {
      setBlogView("list");
      setEditingBlogSlug(null);
    }
  };

  // ---------------------------------------------------------
  // LOGIN SCREEN RENDER
  // ---------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8FAFD] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-[#E8EDF3] rounded-[22px] p-[32px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)] w-full max-w-md flex flex-col gap-6"
        >
          <div className="text-center">
            <h2 className="text-[#0F2133] text-[24px] font-semibold">
              Fluid Admin
            </h2>
            <p className="text-[#73797B] text-[14px] mt-2">
              Please sign in to access the dashboard.
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#1D3855]">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-[48px] border border-[#D0D5DD] rounded-[10px] px-4 outline-none text-[15px] text-black focus:border-[#3B747F] transition-colors"
                placeholder="Enter username"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#1D3855]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[48px] border border-[#D0D5DD] rounded-[10px] px-4 outline-none text-[15px] text-black focus:border-[#3B747F] transition-colors"
                placeholder="Enter password"
                required
              />
            </div>

            {loginError && (
              <p className="text-red-500 text-[13px] text-center font-medium">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              className="w-full h-[48px] bg-[#3B747F] text-white rounded-[10px] text-[15px] font-semibold mt-2 hover:bg-[#2A535A] transition-colors"
            >
              Access Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // MAIN DASHBOARD RENDER
  // ---------------------------------------------------------
  return (
    <section
      className="
        w-full
        min-h-screen
        bg-[#F8FAFD]
        flex
        overflow-hidden
      "
    >
      <aside
        className="
          hidden
          lg:flex
          w-[280px]
          min-h-screen
          bg-white
          border-r
          border-[#E8EDF3]
          flex-col
          justify-between
          px-[20px]
          py-[24px]
          shrink-0
        "
      >
        <div className="flex flex-col gap-[28px]">
          <div className="flex items-center gap-[12px]">
            <div className="flex flex-col">
              <h2 className="text-[#0F2133] text-[18px] font-semibold">
                Fluid Admin
              </h2>
              <p className="text-[#73797B] text-[13px]">Management Panel</p>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;

              return (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSidebarClick(item.id)}
                  className={`
                    w-full
                    h-[54px]
                    rounded-[14px]
                    px-[16px]
                    flex
                    items-center
                    justify-between
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-[#3B747F] text-white"
                        : "bg-transparent text-[#1D3855] hover:bg-[#F4F8FB]"
                    }
                  `}
                >
                  <div className="flex items-center gap-[12px]">
                    <Icon size={20} strokeWidth={1.9} />
                    <span className="text-[15px] font-medium">
                      {item.title}
                    </span>
                  </div>
                  <ChevronRight size={16} />
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="w-full bg-[#F8FAFD] border border-[#E6EDF5] rounded-[18px] p-[18px]">
          <p className="text-[#1D3855] text-[14px] font-semibold">
            Fluid Financial
          </p>
          <p className="mt-[6px] text-[#73797B] text-[13px] leading-[22px]">
            Admin dashboard for managing users, applications, forms, and blogs.
          </p>
        </div>
      </aside>

      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 left-0 z-50 w-[290px] h-screen bg-white border-r border-[#E8EDF3] p-[20px] flex flex-col gap-[24px] lg:hidden"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-[#0F2133] text-[20px] font-semibold">
                  Fluid Admin
                </h2>
                <button onClick={() => setMobileMenu(false)}>
                  <X size={24} className="text-[#1D3855]" />
                </button>
              </div>

              <div className="flex flex-col gap-[8px]">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleSidebarClick(item.id);
                        setMobileMenu(false);
                      }}
                      className={`
                        w-full h-[52px] rounded-[14px] px-[16px] flex items-center gap-[12px]
                        ${
                          isActive
                            ? "bg-[#3B747F] text-white"
                            : "bg-[#F8FAFD] text-[#1D3855]"
                        }
                      `}
                    >
                      <Icon size={20} />
                      <span className="text-[15px]">{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 min-h-screen flex flex-col">
        <div className="flex-1 p-[18px] sm:p-[28px]">
          {activePage === "dashboard" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px]">
              {[
                { title: "Total Users", value: "1,284" },
                { title: "Applications", value: "342" },
                { title: "Form Entries", value: "892" },
                { title: "Published Blogs", value: "56" },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white border border-[#E8EDF3] rounded-[22px] p-[24px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)]"
                >
                  <p className="text-[#73797B] text-[14px]">{card.title}</p>
                  <h3 className="mt-[12px] text-[#0F2133] text-[34px] font-semibold">
                    {card.value}
                  </h3>
                </motion.div>
              ))}
            </div>
          )}

          {activePage === "users" && <UsersTable />}

          {activePage === "home-applications" && <HomeCalculatorTable />}

          {activePage === "other-forms" && <AgentApplicationTable />}

          {activePage === "checklist" && <ChecklistDownloads />}

          {activePage === "blogs" && (
            <div className="flex flex-col w-full h-full animate-in fade-in duration-300">
              {blogView === "list" ? (
                <div className="bg-white border border-[#E8EDF3] rounded-[22px] p-[24px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)]">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <div>
                      <h3 className="text-[#0F2133] text-[20px] font-semibold">
                        Previous Blogs
                      </h3>
                      <p className="text-[#73797B] text-[14px] mt-1">
                        Manage and edit your existing blog posts.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setEditingBlogSlug(null);
                        setBlogView("edit");
                      }}
                      className="bg-[#3B747F] text-white px-5 py-2.5 rounded-[12px] text-[14px] font-medium hover:bg-[#2A535A] transition-colors"
                    >
                      + Create New Blog
                    </button>
                  </div>

                  <div className="w-full overflow-x-auto">
                    {isLoading ? (
                      <div className="py-12 text-center text-[#3B747F] font-medium animate-pulse">
                        Loading blogs data from server...
                      </div>
                    ) : error ? (
                      <div className="py-12 text-center text-red-500 font-medium">
                        Error: {error}
                      </div>
                    ) : (
                      <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                          <tr className="border-b border-[#E8EDF3] text-[#73797B] text-[14px]">
                            <th className="pb-4 font-medium px-2">
                              Blog Title
                            </th>
                            <th className="pb-4 font-medium px-2">Author</th>
                            <th className="pb-4 font-medium px-2">
                              Publish Date
                            </th>
                            <th className="pb-4 font-medium px-2 text-right">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {blogs && blogs.length > 0 ? (
                            blogs.map((blog) => (
                              <tr
                                key={blog.id}
                                className="border-b border-[#E8EDF3] last:border-0 hover:bg-[#F8FAFD] transition-colors"
                              >
                                <td className="py-4 px-2 text-[#0F2133] text-[15px] font-medium max-w-[280px]">
                                  <div
                                    className="line-clamp-2"
                                    title={blog.blog_title}
                                  >
                                    {blog.blog_title || "Untitled Blog"}
                                  </div>
                                </td>
                                <td className="py-4 px-2 text-[#73797B] text-[14px]">
                                  {blog.author_name || "Unknown"}
                                </td>
                                <td className="py-4 px-2 text-[#73797B] text-[14px]">
                                  {blog.publish_date || "N/A"}
                                </td>
                                <td className="py-4 px-2 text-right">
                                  <div className="flex justify-end items-center gap-2">
                                    <button
                                      onClick={() => {
                                        setEditingBlogSlug(blog.slug);
                                        setBlogView("edit");
                                      }}
                                      className="inline-flex items-center gap-1.5 text-[#3B747F] hover:text-[#2A535A] hover:bg-[#E8F0F2] px-3 py-1.5 rounded-lg text-[14px] font-medium transition-colors"
                                    >
                                      <Edit size={16} /> Edit
                                    </button>
                                    <button
                                      onClick={() => handleDeleteBlog(blog.id)}
                                      className="inline-flex items-center gap-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg text-[14px] font-medium transition-colors"
                                    >
                                      <Trash2 size={16} /> Delete
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td
                                colSpan={5}
                                className="py-8 text-center text-[#73797B] text-[14px]"
                              >
                                No blogs found. Click on 'Create New Blog' to
                                add one.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => setBlogView("list")}
                    className="w-fit flex items-center gap-2 text-[#73797B] hover:text-[#0F2133] transition-colors text-[14px] font-medium bg-white px-4 py-2 rounded-xl border border-[#E8EDF3]"
                  >
                    <ChevronRight size={16} className="rotate-180" /> Back to
                    Blog List
                  </button>

                  <div className="bg-white border border-[#E8EDF3] rounded-[22px] p-[24px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)]">
                    <BlogEditorSection slug={editingBlogSlug} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </section>
  );
}