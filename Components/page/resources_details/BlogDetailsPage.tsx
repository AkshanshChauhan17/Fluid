"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

type BlogSection = {
  id: number;
  type: "paragraph" | "heading" | "list";
  content: string;
  items?: string[];
};

type BlogData = {
  id: number;
  blog_title: string;
  author_name: string;
  publish_date: string;
  thumbnail: string;
  sections: BlogSection[];
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

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BlogDetailsPage({
  id,
}: {
  id: number;
}) {

  const [blog, setBlog] =
    useState<BlogData | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchBlog = async () => {

      try {

        const response =
          await fetch(
            `http://fluid.free.nf/rb.php?id=${id}`
          );

        const data =
          await response.json();

        if (data.success) {
          setBlog(data.blog);
        }

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    fetchBlog();

  }, [id]);

  if (loading) {

    return (
      <section className="w-full py-[120px] flex items-center justify-center">
        <p className="text-[#1D3855] text-[18px]">
          Loading blog...
        </p>
      </section>
    );
  }

  if (!blog) {

    return (
      <section className="w-full py-[120px] flex items-center justify-center">
        <p className="text-red-500 text-[18px]">
          Blog not found
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl m-auto px-5 sm:px-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start gap-[32px] sm:gap-[40px]"
      >
        {/* BREADCRUMB */}

        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap items-center gap-[10px]"
        >
          <span className="text-[#73797B] text-[13px] sm:text-[14px] leading-[17px] tracking-[-0.3px] font-normal">
            Blogs
          </span>

          <span className="text-[#737373] text-[13px] sm:text-[14px] leading-[17px]">
            &gt;
          </span>

          <span className="text-[#3B747F] text-[13px] sm:text-[14px] leading-[17px] tracking-[-0.3px] font-medium">
            {blog.blog_title}
          </span>
        </motion.div>

        <div className="w-full max-w-7xl flex flex-col items-start gap-[32px] sm:gap-[40px]">

          {/* HERO */}

          <motion.div
            variants={containerVariants}
            className="w-full flex flex-col items-start gap-[24px] sm:gap-[32px]"
          >
            <motion.div
              variants={fadeUpVariants}
              whileHover={{
                scale: 1.01,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                w-full
                h-[240px]
                sm:h-[320px]
                lg:h-[400px]
                rounded-[20px]
                overflow-hidden
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={
                    blog.thumbnail
                      ? `http://fluid.free.nf/${blog.thumbnail}`
                      : "/blog1.png"
                  }
                  alt={blog.blog_title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* META */}

            <motion.div
              variants={containerVariants}
              className="
                w-full
                px-0
                sm:px-[12px]
                flex
                flex-col
                items-start
                gap-[10px]
                sm:gap-[12px]
              "
            >
              <motion.p
                variants={fadeUpVariants}
                className="
                  text-[#737373]
                  text-[14px]
                  sm:text-[16px]
                  leading-[28px]
                  tracking-[-0.3px]
                  font-normal
                "
              >
                By{" "}
                <b className="text-black font-medium">
                  {blog.author_name}
                </b>{" "}
                &nbsp;|&nbsp;{" "}
                {new Date(
                  blog.publish_date
                ).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }
                )}
              </motion.p>

              <motion.h1
                variants={fadeUpVariants}
                className="
                  max-w-[1216px]
                  text-[#4C4477]
                  text-[28px]
                  sm:text-[32px]
                  lg:text-[36px]
                  leading-[140%]
                  tracking-[-0.04em]
                  font-semibold
                "
              >
                {blog.blog_title}
              </motion.h1>
            </motion.div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            variants={containerVariants}
            className="
              w-full
              flex
              flex-col
              items-start
              gap-[24px]
            "
          >
            {blog.sections?.map(
              (section, index) => {

                /* PARAGRAPH */

                if (
                  section.type ===
                  "paragraph"
                ) {

                  return (
                    <motion.p
                      key={index}
                      variants={
                        fadeUpVariants
                      }
                      className="
                        text-[#73797B]
                        text-[16px]
                        sm:text-[18px]
                        leading-[170%]
                        tracking-[-0.3px]
                        font-normal
                      "
                    >
                      {section.content}
                    </motion.p>
                  );
                }

                /* HEADING */

                if (
                  section.type ===
                  "heading"
                ) {

                  return (
                    <motion.h2
                      key={index}
                      variants={
                        fadeUpVariants
                      }
                      className="
                        text-[#1D3855]
                        text-[20px]
                        sm:text-[24px]
                        leading-[160%]
                        tracking-[-0.3px]
                        font-medium
                      "
                    >
                      {section.content}
                    </motion.h2>
                  );
                }

                /* LIST */

                if (
                  section.type ===
                  "list"
                ) {

                  return (
                    <motion.div
                      key={index}
                      variants={
                        containerVariants
                      }
                      className="
                        w-full
                        flex
                        flex-col
                        items-start
                        gap-[16px]
                      "
                    >

                      {section.content && (
                        <motion.p
                          variants={
                            fadeUpVariants
                          }
                          className="
                            text-[#73797B]
                            text-[16px]
                            sm:text-[18px]
                            leading-[170%]
                            tracking-[-0.3px]
                          "
                        >
                          {section.content}
                        </motion.p>
                      )}

                      <motion.ul
                        variants={
                          containerVariants
                        }
                        className="
                          list-disc
                          pl-[24px]
                          sm:pl-[28px]
                          flex
                          flex-col
                          gap-[6px]
                        "
                      >
                        {section.items?.map(
                          (
                            item,
                            itemIndex
                          ) => (
                            <motion.li
                              key={itemIndex}
                              variants={
                                fadeUpVariants
                              }
                              className="
                                text-[#73797B]
                                text-[16px]
                                sm:text-[18px]
                                leading-[170%]
                                tracking-[-0.3px]
                              "
                            >
                              {item}
                            </motion.li>
                          )
                        )}
                      </motion.ul>
                    </motion.div>
                  );
                }

                return null;
              }
            )}
          </motion.div>

          {/* FOOTER */}

          <motion.div
            variants={fadeUpVariants}
            className="
              w-full
              border-t
              border-[#EEEEEE]
              pt-[32px]
              sm:pt-[40px]
              flex
              flex-row
              sm:flex-row
              items-start
              sm:items-center
              justify-between
              gap-[16px]
            "
          >
            <motion.button
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                h-[48px]
                px-[20px]
                border
                border-[#D0D5DD]
                rounded-[8px]
                bg-white
                flex
                items-center
                justify-center
                gap-[8px]
                hover:bg-[#f8fafc]
                transition-colors
                duration-300
              "
            >
              <ChevronLeft
                size={16}
                className="text-[#1D3855]"
                strokeWidth={2}
              />

              <span className="text-[#1D3855] text-[15px] sm:text-[16px] leading-[24px] font-semibold capitalize">
                Previous Blog
              </span>
            </motion.button>

            <motion.button
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                h-[48px]
                px-[20px]
                border
                border-[#D0D5DD]
                rounded-[8px]
                bg-white
                flex
                items-center
                justify-center
                gap-[8px]
                hover:bg-[#f8fafc]
                transition-colors
                duration-300
              "
            >
              <span className="text-[#1D3855] text-[15px] sm:text-[16px] leading-[24px] font-semibold capitalize">
                Next Blog
              </span>

              <ChevronRight
                size={16}
                className="text-[#1D3855]"
                strokeWidth={2}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}