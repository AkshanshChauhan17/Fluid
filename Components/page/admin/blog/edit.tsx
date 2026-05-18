"use client";

import { useState } from "react";

import Image from "next/image";

import {
  Plus,
  Trash2,
  ImageIcon,
  Save,
  Calendar,
  User2,
  ArrowUp,
  ArrowDown,
  Loader2,
} from "lucide-react";

import { motion } from "framer-motion";

type BlogSection = {
  id: number;
  type: "paragraph" | "heading" | "list";
  content: string;
  items?: string[];
};

export default function BlogEditorSection() {
  const todayDate = new Date()
    .toISOString()
    .split("T")[0];

  const [sections, setSections] =
    useState<BlogSection[]>([]);

  const [authorName, setAuthorName] =
    useState("Admin");

  const [publishDate, setPublishDate] =
    useState(todayDate);

  const [blogTitle, setBlogTitle] =
    useState("");

  const [thumbnail, setThumbnail] =
    useState<File | null>(null);

  const [thumbnailPreview, setThumbnailPreview] =
    useState("/blog1.png");

  const [loading, setLoading] =
    useState(false);

  const moveSectionUp = (index: number) => {
    if (index === 0) return;

    const updated = [...sections];

    [
      updated[index - 1],
      updated[index],
    ] = [
      updated[index],
      updated[index - 1],
    ];

    setSections(updated);
  };

  const moveSectionDown = (
    index: number
  ) => {
    if (
      index === sections.length - 1
    )
      return;

    const updated = [...sections];

    [
      updated[index],
      updated[index + 1],
    ] = [
      updated[index + 1],
      updated[index],
    ];

    setSections(updated);
  };

  const addSection = (
    type: "paragraph" | "heading" | "list"
  ) => {
    setSections([
      ...sections,
      {
        id: Date.now(),
        type,
        content: "",
        items:
          type === "list"
            ? [""]
            : undefined,
      },
    ]);
  };

  const updateSection = (
    id: number,
    value: string
  ) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id
          ? {
              ...section,
              content: value,
            }
          : section
      )
    );
  };

  const updateListItem = (
    sectionId: number,
    index: number,
    value: string
  ) => {
    setSections((prev) =>
      prev.map((section) => {
        if (
          section.id === sectionId &&
          section.items
        ) {
          const updatedItems = [
            ...section.items,
          ];

          updatedItems[index] = value;

          return {
            ...section,
            items: updatedItems,
          };
        }

        return section;
      })
    );
  };

  const addListItem = (
    sectionId: number
  ) => {
    setSections((prev) =>
      prev.map((section) => {
        if (
          section.id === sectionId &&
          section.items
        ) {
          return {
            ...section,
            items: [...section.items, ""],
          };
        }

        return section;
      })
    );
  };

  const removeSection = (
    id: number
  ) => {
    setSections((prev) =>
      prev.filter(
        (section) => section.id !== id
      )
    );
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setThumbnail(file);

    const imageUrl =
      URL.createObjectURL(file);

    setThumbnailPreview(imageUrl);
  };

  const handleSaveBlog = async () => {
    try {
      setLoading(true);

      if (!blogTitle.trim()) {
        alert("Blog title required");
        return;
      }

      if (sections.length === 0) {
        alert(
          "Please add at least one section"
        );
        return;
      }

      const formData = new FormData();

      formData.append(
        "blog_title",
        blogTitle
      );

      formData.append(
        "author_name",
        authorName
      );

      formData.append(
        "publish_date",
        publishDate
      );

      formData.append(
        "sections",
        JSON.stringify(sections)
      );

      if (thumbnail) {
        formData.append(
          "thumbnail",
          thumbnail,
          thumbnail.name
        );
      }

      console.log(
        "Thumbnail Sending:",
        thumbnail
      );

      const response = await fetch(
        "http://fluid.free.nf/be.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data =
        await response.json();

      console.log(data);

      if (data.success) {
        alert(
          "Blog saved successfully"
        );

        setBlogTitle("");

        setSections([]);

        setThumbnail(null);

        setThumbnailPreview(
          "/blog1.png"
        );

        setAuthorName("Admin");

        setPublishDate(todayDate);
      } else {
        alert(
          data.message ||
            "Failed to save blog"
        );
      }
    } catch (error) {
      console.log(error);

      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full flex flex-col gap-[18px]">
      <div className="w-full flex justify-end">
        <motion.button
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={handleSaveBlog}
          disabled={loading}
          className="
            h-[48px]
            px-[18px]
            rounded-[12px]
            bg-[#3B747F]
            flex
            items-center
            justify-center
            gap-[8px]
            text-white
            text-[14px]
            font-semibold
          "
        >
          {loading ? (
            <Loader2
              size={17}
              className="animate-spin"
            />
          ) : (
            <Save size={17} />
          )}

          {loading
            ? "Saving..."
            : "Save Blog"}
        </motion.button>
      </div>
            <br />
      <div
        className="
          w-full
          grid
          grid-cols-1
          xl:grid-cols-[1fr_320px]
          gap-[18px]
        "
      >
        <div
          className="
            bg-white
            border
            border-[#E7EDF3]
            rounded-[22px]
            p-[16px]
            sm:p-[20px]
            flex
            flex-col
            gap-[20px]
          "
        >
          <div className="flex flex-col gap-[8px]">
            <label className="text-[14px] font-semibold text-black">
              Blog Thumbnail
            </label>

            <label
              className="
                relative
                w-full
                h-[220px]
                sm:h-[280px]
                rounded-[18px]
                border-2
                border-dashed
                border-[#D6E1EA]
                overflow-hidden
                cursor-pointer
              "
            >
              <input
                type="file"
                accept="image/*"
                onChange={
                  handleImageChange
                }
                className="hidden"
              />

              <Image
                src={thumbnailPreview}
                alt="Blog"
                fill
                unoptimized
                className="object-cover"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/35
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-[8px]
                "
              >
                <ImageIcon
                  size={28}
                  className="text-white"
                />

                <span className="text-white text-[14px] font-medium">
                  Upload Image
                </span>
              </div>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
            <div className="flex flex-col gap-[6px]">
              <label className="text-[13px] font-medium text-black">
                Author Name
              </label>

              <div
                className="
                  h-[46px]
                  border
                  border-[#D0D5DD]
                  rounded-[12px]
                  px-[14px]
                  flex
                  items-center
                  gap-[8px]
                "
              >
                <User2
                  size={16}
                  className="text-black"
                />

                <input
                  type="text"
                  value={authorName}
                  onChange={(e) =>
                    setAuthorName(
                      e.target.value
                    )
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
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="text-[13px] font-medium text-black">
                Publish Date
              </label>

              <div
                className="
                  h-[46px]
                  border
                  border-[#D0D5DD]
                  rounded-[12px]
                  px-[14px]
                  flex
                  items-center
                  gap-[8px]
                "
              >
                <Calendar
                  size={16}
                  className="text-black"
                />

                <input
                  type="date"
                  value={publishDate}
                  onChange={(e) =>
                    setPublishDate(
                      e.target.value
                    )
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
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="text-[14px] font-semibold text-black">
              Blog Heading
            </label>

            <textarea
              rows={2}
              value={blogTitle}
              onChange={(e) =>
                setBlogTitle(
                  e.target.value
                )
              }
              placeholder="Enter blog heading..."
              className="
                w-full
                border
                border-[#D0D5DD]
                rounded-[14px]
                px-[14px]
                py-[12px]
                outline-none
                resize-none
                text-[20px]
                font-semibold
                text-black
              "
            />
          </div>

          <div className="flex flex-col gap-[14px]">
            {sections.map(
              (section, index) => (
                <motion.div
                  key={section.id}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    border
                    border-[#E7EDF3]
                    rounded-[18px]
                    p-[14px]
                    flex
                    flex-col
                    gap-[12px]
                  "
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        px-[10px]
                        py-[5px]
                        rounded-full
                        bg-[#EAF4F5]
                        text-[#3B747F]
                        text-[11px]
                        font-semibold
                        uppercase
                      "
                    >
                      {section.type}
                    </div>

                    <div className="flex items-center gap-[6px]">
                      <button
                        onClick={() =>
                          moveSectionUp(
                            index
                          )
                        }
                        className="
                          w-[34px]
                          h-[34px]
                          rounded-full
                          border
                          border-[#E5E7EB]
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <ArrowUp
                          size={15}
                          className="text-black"
                        />
                      </button>

                      <button
                        onClick={() =>
                          moveSectionDown(
                            index
                          )
                        }
                        className="
                          w-[34px]
                          h-[34px]
                          rounded-full
                          border
                          border-[#E5E7EB]
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <ArrowDown
                          size={15}
                          className="text-black"
                        />
                      </button>

                      <button
                        onClick={() =>
                          removeSection(
                            section.id
                          )
                        }
                        className="
                          w-[34px]
                          h-[34px]
                          rounded-full
                          bg-[#FFF1F1]
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Trash2
                          size={15}
                          className="text-red-600"
                        />
                      </button>
                    </div>
                  </div>

                  {section.type ===
                    "heading" && (
                    <textarea
                      rows={2}
                      value={
                        section.content
                      }
                      onChange={(e) =>
                        updateSection(
                          section.id,
                          e.target.value
                        )
                      }
                      placeholder="Sub heading..."
                      className="
                        w-full
                        border
                        border-[#D0D5DD]
                        rounded-[12px]
                        px-[14px]
                        py-[12px]
                        outline-none
                        resize-none
                        text-[20px]
                        font-semibold
                        text-black
                      "
                    />
                  )}

                  {section.type ===
                    "paragraph" && (
                    <textarea
                      rows={5}
                      value={
                        section.content
                      }
                      onChange={(e) =>
                        updateSection(
                          section.id,
                          e.target.value
                        )
                      }
                      placeholder="Paragraph..."
                      className="
                        w-full
                        border
                        border-[#D0D5DD]
                        rounded-[12px]
                        px-[14px]
                        py-[12px]
                        outline-none
                        resize-none
                        text-[15px]
                        leading-[180%]
                        text-black
                      "
                    />
                  )}

                  {section.type ===
                    "list" && (
                    <div className="flex flex-col gap-[10px]">
                      <textarea
                        rows={2}
                        value={
                          section.content
                        }
                        onChange={(e) =>
                          updateSection(
                            section.id,
                            e.target.value
                          )
                        }
                        placeholder="List heading..."
                        className="
                          w-full
                          border
                          border-[#D0D5DD]
                          rounded-[12px]
                          px-[14px]
                          py-[12px]
                          outline-none
                          resize-none
                          text-[17px]
                          font-semibold
                          text-black
                        "
                      />

                      {section.items?.map(
                        (
                          item,
                          itemIndex
                        ) => (
                          <div
                            key={itemIndex}
                            className="flex items-center gap-[8px]"
                          >
                            <div
                              className="
                                w-[7px]
                                h-[7px]
                                rounded-full
                                bg-[#3B747F]
                              "
                            />

                            <input
                              type="text"
                              value={item}
                              onChange={(
                                e
                              ) =>
                                updateListItem(
                                  section.id,
                                  itemIndex,
                                  e
                                    .target
                                    .value
                                )
                              }
                              placeholder="Pointer..."
                              className="
                                flex-1
                                h-[44px]
                                border
                                border-[#D0D5DD]
                                rounded-[12px]
                                px-[14px]
                                outline-none
                                text-black
                                text-[14px]
                              "
                            />
                          </div>
                        )
                      )}

                      <button
                        onClick={() =>
                          addListItem(
                            section.id
                          )
                        }
                        className="
                          h-[40px]
                          rounded-[12px]
                          bg-[#EAF4F5]
                          text-[#3B747F]
                          text-[13px]
                          font-medium
                        "
                      >
                        + Add Pointer
                      </button>
                    </div>
                  )}
                </motion.div>
              )
            )}
          </div>
        </div>

        <div
          className="
            bg-white
            border
            border-[#E7EDF3]
            rounded-[22px]
            p-[16px]
            h-fit
            sticky
            top-[20px]
            flex
            flex-col
            gap-[12px]
          "
        >
          <button
            onClick={() =>
              addSection("heading")
            }
            className="
              h-[48px]
              rounded-[14px]
              bg-[#F4F8FB]
              border
              border-[#E4EDF3]
              flex
              items-center
              justify-center
              gap-[8px]
              text-black
              text-[14px]
              font-medium
            "
          >
            <Plus size={16} />
            Add Heading
          </button>

          <button
            onClick={() =>
              addSection("paragraph")
            }
            className="
              h-[48px]
              rounded-[14px]
              bg-[#F4F8FB]
              border
              border-[#E4EDF3]
              flex
              items-center
              justify-center
              gap-[8px]
              text-black
              text-[14px]
              font-medium
            "
          >
            <Plus size={16} />
            Add Paragraph
          </button>

          <button
            onClick={() =>
              addSection("list")
            }
            className="
              h-[48px]
              rounded-[14px]
              bg-[#F4F8FB]
              border
              border-[#E4EDF3]
              flex
              items-center
              justify-center
              gap-[8px]
              text-black
              text-[14px]
              font-medium
            "
          >
            <Plus size={16} />
            Add List
          </button>
        </div>
      </div>
    </section>
  );
}