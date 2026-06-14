"use client";

import { useEffect, useState } from "react";

import {
  motion,
  Variants,
} from "framer-motion";

import {
  Search,
  Mail,
  CalendarDays,
  Users,
  Loader2,
} from "lucide-react";

type UserType = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function UsersTable() {
  const [users, setUsers] = useState<UserType[]>(
    []
  );

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "/Backend/users.php"
        );

        const data = await response.json();

        if (data.success) {
          setUsers(data.users);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    void fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section className="w-full flex flex-col gap-[22px] text-black">
      {/* TOP */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          w-full
          flex
          flex-col
          lg:flex-row
          items-start
          lg:items-center
          justify-between
          gap-[16px]
        "
      >
        <div className="flex flex-col gap-[6px]">
          <h2
            className="
              text-[28px]
              leading-[120%]
              font-semibold
              text-black
            "
          >
            Users Management
          </h2>

          <p
            className="
              text-[15px]
              text-[#6B7280]
            "
          >
            View and manage registered users
          </p>
        </div>

        {/* SEARCH */}

        <div
          className="
            w-full
            lg:w-[340px]
            h-[50px]
            border
            border-[#E5E7EB]
            rounded-[14px]
            bg-white
            px-[16px]
            flex
            items-center
            gap-[10px]
          "
        >
          <Search
            size={18}
            className="text-[#6B7280]"
          />

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              flex-1
              outline-none
              bg-transparent
              text-black
              text-[14px]
            "
          />
        </div>
      </motion.div>

      {/* STATS */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-[18px]
        "
      >
        <motion.div
          variants={itemVariants}
          className="
            bg-white
            border
            border-[#E5E7EB]
            rounded-[20px]
            p-[20px]
            flex
            items-center
            gap-[16px]
          "
        >
          <div
            className="
              w-[54px]
              h-[54px]
              rounded-[16px]
              bg-[#EAF4F5]
              flex
              items-center
              justify-center
            "
          >
            <Users
              size={24}
              className="text-[#3B747F]"
            />
          </div>

          <div>
            <p
              className="
                text-[14px]
                text-[#6B7280]
              "
            >
              Total Users
            </p>

            <h3
              className="
                text-[28px]
                font-semibold
                text-black
              "
            >
              {users.length}
            </h3>
          </div>
        </motion.div>
      </motion.div>

      {/* TABLE */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          w-full
          overflow-hidden
          rounded-[24px]
          border
          border-[#E5E7EB]
          bg-white
        "
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead>
              <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <th
                  className="
                    px-[22px]
                    py-[18px]
                    text-left
                    text-[13px]
                    font-semibold
                    text-[#6B7280]
                    uppercase
                  "
                >
                  ID
                </th>

                <th
                  className="
                    px-[22px]
                    py-[18px]
                    text-left
                    text-[13px]
                    font-semibold
                    text-[#6B7280]
                    uppercase
                  "
                >
                  User
                </th>

                <th
                  className="
                    px-[22px]
                    py-[18px]
                    text-left
                    text-[13px]
                    font-semibold
                    text-[#6B7280]
                    uppercase
                  "
                >
                  Email
                </th>

                <th
                  className="
                    px-[22px]
                    py-[18px]
                    text-left
                    text-[13px]
                    font-semibold
                    text-[#6B7280]
                    uppercase
                  "
                >
                  Joined Date
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={4}
                    className="py-[60px]"
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        gap-[10px]
                        text-[#6B7280]
                      "
                    >
                      <Loader2
                        size={20}
                        className="animate-spin"
                      />

                      Loading users...
                    </div>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="
                      py-[60px]
                      text-center
                      text-[#6B7280]
                    "
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map(
                  (user, index) => (
                    <motion.tr
                      key={user.id}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      className="
                        border-b
                        border-[#F1F5F9]
                        hover:bg-[#FAFAFA]
                        transition-colors
                      "
                    >
                      <td
                        className="
                          px-[22px]
                          py-[18px]
                        "
                      >
                        <div
                          className="
                            w-fit
                            px-[12px]
                            py-[6px]
                            rounded-full
                            bg-[#F3F4F6]
                            text-[13px]
                            font-medium
                            text-black
                          "
                        >
                          #{user.id}
                        </div>
                      </td>

                      <td
                        className="
                          px-[22px]
                          py-[18px]
                        "
                      >
                        <div className="flex items-center gap-[12px]">
                          <div
                            className="
                              w-[44px]
                              h-[44px]
                              rounded-full
                              bg-[#EAF4F5]
                              flex
                              items-center
                              justify-center
                              text-[#3B747F]
                              font-semibold
                              text-[15px]
                            "
                          >
                            {user.name
                              ?.charAt(0)
                              ?.toUpperCase()}
                          </div>

                          <div>
                            <p
                              className="
                                text-[15px]
                                font-semibold
                                text-black
                              "
                            >
                              {user.name}
                            </p>

                            <p
                              className="
                                text-[13px]
                                text-[#6B7280]
                              "
                            >
                              User Account
                            </p>
                          </div>
                        </div>
                      </td>

                      <td
                        className="
                          px-[22px]
                          py-[18px]
                        "
                      >
                        <div className="flex items-center gap-[8px]">
                          <Mail
                            size={15}
                            className="text-[#6B7280]"
                          />

                          <span
                            className="
                              text-[14px]
                              text-black
                            "
                          >
                            {user.email}
                          </span>
                        </div>
                      </td>

                      <td
                        className="
                          px-[22px]
                          py-[18px]
                        "
                      >
                        <div className="flex items-center gap-[8px]">
                          <CalendarDays
                            size={15}
                            className="text-[#6B7280]"
                          />

                          <span
                            className="
                              text-[14px]
                              text-black
                            "
                          >
                            {new Date(
                              user.created_at
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </td>
                    </motion.tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}