"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import Link from "next/link";

import { ChevronRight } from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

type BlogType = {
  id: number;
  blog_title: string;
  thumbnail: string;
  publish_date: string;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function RelatedBlogsSection() {

  const [blogs, setBlogs] = useState<
    BlogType[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchBlogs = async () => {

      try {

        const response =
          await fetch(
            `https://fluid.free.nf/rb.php`
          );

        const data =
          await response.json();

        if (data.success) {

          const latestBlogs =
            data.blogs
              .sort(
                (
                  a: BlogType,
                  b: BlogType
                ) =>
                  new Date(
                    b.publish_date
                  ).getTime() -
                  new Date(
                    a.publish_date
                  ).getTime()
              )
              .slice(0, 4);

          setBlogs(latestBlogs);
        }

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    fetchBlogs();

  }, []);

  if (loading) {

    return (
      <section className="w-full py-[80px] flex items-center justify-center">
        <p className="text-[#1D3855] text-[18px]">
          Loading blogs...
        </p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="flex flex-col gap-[20px] sm:gap-[24px]"
      >

        {/* ROW 1 */}

        <div className="w-full flex flex-col lg:flex-row gap-[20px] sm:gap-[24px]">

          {blogs
            .slice(0, 2)
            .map((item, index) => (

              <Link
                key={index}
                href={`/resources_details#${item.id}`}
                className="w-full lg:w-1/2"
              >
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    group
                    w-full
                    bg-white
                    border
                    border-[#EEEEEE]
                    rounded-[20px]
                    overflow-hidden
                    cursor-pointer
                  "
                >
                  <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden">

                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={
                          item.thumbnail
                            ? `https://fluid.free.nf/${item.thumbnail}`
                            : "/blog-sec-1.png"
                        }
                        alt={
                          item.blog_title
                        }
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                  <div
                    className="
                      min-h-[72px]
                      px-[18px]
                      sm:px-[20px]
                      py-[16px]
                      flex
                      items-center
                      justify-between
                      gap-[16px]
                      bg-white
                    "
                  >
                    <div className="flex flex-col gap-[4px]">

                      <p
                        className="
                          text-[#73797B]
                          text-[13px]
                          sm:text-[14px]
                        "
                      >
                        {new Date(
                          item.publish_date
                        ).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>

                      <h3
                        className="
                          text-[#1D3855]
                          text-[15px]
                          sm:text-[16px]
                          leading-[24px]
                          tracking-[-0.3px]
                          font-medium
                          line-clamp-2
                        "
                      >
                        {
                          item.blog_title
                        }
                      </h3>
                    </div>

                    <motion.div
                      whileHover={{
                        x: 3,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="shrink-0"
                    >
                      <ChevronRight
                        size={16}
                        className="text-[#1D3855]"
                        strokeWidth={
                          2.5
                        }
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
        </div>

        {/* ROW 2 */}

        <div className="w-full flex flex-col lg:flex-row gap-[20px] sm:gap-[24px]">

          {blogs
            .slice(2, 4)
            .map((item, index) => (

              <Link
                key={index}
                href={`/resources_details#${item.id}`}
                className="w-full lg:w-1/2"
              >
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    group
                    w-full
                    bg-white
                    border
                    border-[#EEEEEE]
                    rounded-[20px]
                    overflow-hidden
                    cursor-pointer
                  "
                >
                  <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden">

                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={
                          item.thumbnail
                            ? `https://fluid.free.nf/${item.thumbnail}`
                            : "/blog-sec-1.png"
                        }
                        alt={
                          item.blog_title
                        }
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                  <div
                    className="
                      min-h-[72px]
                      px-[18px]
                      sm:px-[20px]
                      py-[16px]
                      flex
                      items-center
                      justify-between
                      gap-[16px]
                      bg-white
                    "
                  >
                    <div className="flex flex-col gap-[4px]">

                      <p
                        className="
                          text-[#73797B]
                          text-[13px]
                          sm:text-[14px]
                        "
                      >
                        {new Date(
                          item.publish_date
                        ).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>

                      <h3
                        className="
                          text-[#1D3855]
                          text-[15px]
                          sm:text-[16px]
                          leading-[24px]
                          tracking-[-0.3px]
                          font-medium
                          line-clamp-2
                        "
                      >
                        {
                          item.blog_title
                        }
                      </h3>
                    </div>

                    <motion.div
                      whileHover={{
                        x: 3,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="shrink-0"
                    >
                      <ChevronRight
                        size={16}
                        className="text-[#1D3855]"
                        strokeWidth={
                          2.5
                        }
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
        </div>
      </motion.div>
    </section>
  );
}