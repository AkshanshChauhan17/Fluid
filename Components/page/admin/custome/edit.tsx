"use client";

import { useEffect, useState } from "react";

import {
  Search,
  Trash2,
  Loader2,
  ArrowUpDown,
  ExternalLink,
  Eye,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

type AgentApplicationType = {
  id: number;

  name: string;

  practice_name: string;

  email: string;

  phone: string;

  uploaded_file: string;

  created_at: string;
};

export default function AgentApplicationTable() {
  const [data, setData] = useState<
    AgentApplicationType[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [sort, setSort] = useState(
    "latest"
  );

  const [selectedItem, setSelectedItem] =
    useState<AgentApplicationType | null>(
      null
    );

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `/Backend/agent_app.php?search=${search}&sort=${sort}`
      );

      const result = await response.json();

      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, [search, sort]);

  const deleteItem = async (
    id: number
  ) => {
    const confirmDelete = confirm(
      "Delete this application?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `/Backend/agent_application.php?id=${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (result.success) {
        setData((prev) =>
          prev.filter(
            (item) => item.id !== id
          )
        );

        setSelectedItem(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full flex flex-col gap-[22px] text-black">
      {/* HEADER */}

      <div
        className="
          w-full
          flex
          flex-col
          lg:flex-row
          items-start
          lg:items-center
          justify-between
          gap-[14px]
        "
      >
        <div>
          <h2
            className="
              text-[28px]
              font-semibold
              text-black
            "
          >
            Agent Applications
          </h2>

          <p
            className="
              text-[14px]
              text-[#6B7280]
            "
          >
            View and manage submitted
            applications
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-[12px] w-full lg:w-auto">
          {/* SEARCH */}

          <div
            className="
              h-[48px]
              w-full
              sm:w-[260px]
              border
              border-[#E5E7EB]
              rounded-[14px]
              px-[14px]
              flex
              items-center
              gap-[8px]
              bg-white
            "
          >
            <Search
              size={17}
              className="text-[#6B7280]"
            />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                flex-1
                bg-transparent
                outline-none
                text-black
                text-[14px]
              "
            />
          </div>

          {/* SORT */}

          <button
            onClick={() =>
              setSort((prev) =>
                prev === "latest"
                  ? "oldest"
                  : "latest"
              )
            }
            className="
              h-[48px]
              px-[16px]
              rounded-[14px]
              border
              border-[#E5E7EB]
              bg-white
              flex
              items-center
              gap-[8px]
              text-black
              text-[14px]
              font-medium
            "
          >
            <ArrowUpDown size={16} />

            {sort === "latest"
              ? "Latest First"
              : "Oldest First"}
          </button>
        </div>
      </div>

      {/* TABLE */}

      <div
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
          <table className="w-full">
            <thead>
              <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                {[
                  "ID",
                  "Name",
                  "Practice",
                  "Email",
                  "Phone",
                  "Actions",
                ].map((item) => (
                  <th
                    key={item}
                    className="
                      px-[18px]
                      py-[16px]
                      text-left
                      text-[13px]
                      text-[#6B7280]
                      uppercase
                      whitespace-nowrap
                    "
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-[70px]"
                  >
                    <div className="flex items-center justify-center gap-[10px] text-[#6B7280]">
                      <Loader2
                        size={20}
                        className="animate-spin"
                      />

                      Loading...
                    </div>
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-[70px] text-center text-[#6B7280]"
                  >
                    No applications found
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <motion.tr
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                      border-b
                      border-[#F3F4F6]
                      hover:bg-[#FAFAFA]
                    "
                  >
                    <td className="px-[18px] py-[16px] text-[14px] font-semibold">
                      #{item.id}
                    </td>

                    <td className="px-[18px] py-[16px] text-[14px]">
                      {item.name}
                    </td>

                    <td className="px-[18px] py-[16px] text-[14px]">
                      {item.practice_name}
                    </td>

                    <td className="px-[18px] py-[16px] text-[14px]">
                      {item.email}
                    </td>

                    <td className="px-[18px] py-[16px] text-[14px]">
                      {item.phone}
                    </td>

                    <td className="px-[18px] py-[16px]">
                      <div className="flex items-center gap-[8px]">
                        {/* VIEW */}

                        <button
                          onClick={() =>
                            setSelectedItem(
                              item
                            )
                          }
                          className="
                            w-[38px]
                            h-[38px]
                            rounded-full
                            bg-[#EEF6FF]
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Eye
                            size={16}
                            className="text-[#2563EB]"
                          />
                        </button>

                        {/* DELETE */}

                        <button
                          onClick={() =>
                            deleteItem(
                              item.id
                            )
                          }
                          className="
                            w-[38px]
                            h-[38px]
                            rounded-full
                            bg-[#FFF1F1]
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Trash2
                            size={16}
                            className="text-red-600"
                          />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* POPUP */}

      <AnimatePresence>
        {selectedItem && (
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
            className="
              fixed
              inset-0
              bg-black/50
              z-50
              flex
              items-center
              justify-center
              p-[16px]
            "
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              className="
                w-full
                max-w-[620px]
                bg-white
                rounded-[24px]
                p-[24px]
                flex
                flex-col
                gap-[20px]
                relative
              "
            >
              {/* CLOSE */}

              <button
                onClick={() =>
                  setSelectedItem(null)
                }
                className="
                  absolute
                  top-[16px]
                  right-[16px]
                  w-[36px]
                  h-[36px]
                  rounded-full
                  bg-[#F3F4F6]
                  flex
                  items-center
                  justify-center
                "
              >
                <X
                  size={18}
                  className="text-black"
                />
              </button>

              <div>
                <h3
                  className="
                    text-[24px]
                    font-semibold
                    text-black
                  "
                >
                  Application Details
                </h3>

                <p className="text-[14px] text-[#6B7280]">
                  Complete application
                  information
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                {[
                  {
                    label: "Name",
                    value:
                      selectedItem.name,
                  },
                  {
                    label:
                      "Practice Name",
                    value:
                      selectedItem.practice_name,
                  },
                  {
                    label: "Email",
                    value:
                      selectedItem.email,
                  },
                  {
                    label: "Phone",
                    value:
                      selectedItem.phone,
                  },
                  {
                    label:
                      "Submitted At",
                    value:
                      selectedItem.created_at,
                  },
                ].map((field) => (
                  <div
                    key={field.label}
                    className="
                      border
                      border-[#E5E7EB]
                      rounded-[16px]
                      p-[14px]
                    "
                  >
                    <p
                      className="
                        text-[12px]
                        text-[#6B7280]
                        mb-[4px]
                      "
                    >
                      {field.label}
                    </p>

                    <p
                      className="
                        text-[15px]
                        font-semibold
                        text-black
                        break-all
                      "
                    >
                      {field.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* FILE */}

              <a
                href={`/Backend/${selectedItem.uploaded_file}`}
                target="_blank"
                className="
                  h-[50px]
                  rounded-[14px]
                  bg-[#EEF6FF]
                  flex
                  items-center
                  justify-center
                  gap-[8px]
                  text-[#2563EB]
                  text-[14px]
                  font-semibold
                "
              >
                View Uploaded File

                <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}