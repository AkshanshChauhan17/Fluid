"use client";

import { useState } from "react";

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
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import BlogEditorSection from "@/Components/page/admin/blog/edit";
import UsersTable from "@/Components/page/admin/users/view";
import HomeCalculatorTable from "@/Components/page/admin/home_calc/edit";
import AgentApplication from "../agent_application/page";
import AgentApplicationTable from "@/Components/page/admin/custome/edit";

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
];

export default function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const [mobileMenu, setMobileMenu] = useState(false);

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
      {/* SIDEBAR DESKTOP */}

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
          {/* LOGO */}

          <div className="flex items-center gap-[12px]">
            <div className="flex flex-col">
              <h2
                className="
                  text-[#0F2133]
                  text-[18px]
                  font-semibold
                "
              >
                Fluid Admin
              </h2>

              <p
                className="
                  text-[#73797B]
                  text-[13px]
                "
              >
                Management Panel
              </p>
            </div>
          </div>

          {/* NAVIGATION */}

          <div className="flex flex-col gap-[8px]">
            {sidebarItems.map((item) => {
              const Icon = item.icon;

              const isActive = activePage === item.id;

              return (
                <motion.button
                  key={item.id}
                  whileHover={{
                    x: 4,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() => setActivePage(item.id)}
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

                    <span
                      className="
                        text-[15px]
                        font-medium
                      "
                    >
                      {item.title}
                    </span>
                  </div>

                  <ChevronRight size={16} />
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* FOOTER */}

        <div
          className="
            w-full
            bg-[#F8FAFD]
            border
            border-[#E6EDF5]
            rounded-[18px]
            p-[18px]
          "
        >
          <p
            className="
              text-[#1D3855]
              text-[14px]
              font-semibold
            "
          >
            Fluid Financial
          </p>

          <p
            className="
              mt-[6px]
              text-[#73797B]
              text-[13px]
              leading-[22px]
            "
          >
            Admin dashboard for managing users, applications, forms, and blogs.
          </p>
        </div>
      </aside>

      {/* MOBILE SIDEBAR */}

      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setMobileMenu(false)}
              className="
                fixed
                inset-0
                bg-black/40
                z-40
                lg:hidden
              "
            />

            <motion.div
              initial={{
                x: -320,
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: -320,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                fixed
                top-0
                left-0
                z-50
                w-[290px]
                h-screen
                bg-white
                border-r
                border-[#E8EDF3]
                p-[20px]
                flex
                flex-col
                gap-[24px]
                lg:hidden
              "
            >
              <div className="flex items-center justify-between">
                <h2
                  className="
                    text-[#0F2133]
                    text-[20px]
                    font-semibold
                  "
                >
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
                        setActivePage(item.id);
                        setMobileMenu(false);
                      }}
                      className={`
                        w-full
                        h-[52px]
                        rounded-[14px]
                        px-[16px]
                        flex
                        items-center
                        gap-[12px]

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

      {/* MAIN CONTENT */}

      <main
        className="
          flex-1
          min-h-screen
          flex
          flex-col
        "
      >

        {/* PAGE CONTENT */}

        <div
          className="
            flex-1
            p-[18px]
            sm:p-[28px]
          "
        >
          {/* DASHBOARD HOME */}

          {activePage === "dashboard" && (
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-4
                gap-[20px]
              "
            >
              {[
                {
                  title: "Total Users",
                  value: "1,284",
                },
                {
                  title: "Applications",
                  value: "342",
                },
                {
                  title: "Form Entries",
                  value: "892",
                },
                {
                  title: "Published Blogs",
                  value: "56",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                    bg-white
                    border
                    border-[#E8EDF3]
                    rounded-[22px]
                    p-[24px]
                    shadow-[0px_10px_30px_rgba(0,0,0,0.03)]
                  "
                >
                  <p
                    className="
                      text-[#73797B]
                      text-[14px]
                    "
                  >
                    {card.title}
                  </p>

                  <h3
                    className="
                      mt-[12px]
                      text-[#0F2133]
                      text-[34px]
                      font-semibold
                    "
                  >
                    {card.value}
                  </h3>
                </motion.div>
              ))}
            </div>
          )}

          {/* USERS */}

          {activePage === "users" && <UsersTable />}

          {/* HOME APPLICATIONS */}

          {activePage === "home-applications" && <HomeCalculatorTable />}

          {/* OTHER FORMS */}

          {activePage === "other-forms" && <AgentApplicationTable />}

          {/* BLOGS */}

          {activePage === "blogs" && <BlogEditorSection />}
        </div>
      </main>
    </section>
  );
}
