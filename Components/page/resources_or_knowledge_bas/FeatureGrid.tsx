"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import Link from "next/link";

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
      staggerChildren: 0.1,
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

const spans = [
  "col-span-1 sm:col-span-2",
  "col-span-1 sm:col-span-2",
  "col-span-1 sm:col-span-2",
  "col-span-1 sm:col-span-3",
  "col-span-1 sm:col-span-3",
];

export default function FeatureGrid() {

  const [blogs, setBlogs] = useState<
    BlogType[]
  >([]);

  const [visibleBlogs, setVisibleBlogs] =
    useState(5);

  const [loading, setLoading] =
    useState(true);

  const loaderRef =
    useRef<HTMLDivElement | null>(
      null
    );

  useEffect(() => {

    const fetchBlogs = async () => {

      try {

        const response =
          await fetch(
            "https://fluid.free.nf/rb.php"
          );

        const data =
          await response.json();

        if (data.success) {

          const sortedBlogs =
            data.blogs.sort(
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
            );

          setBlogs(sortedBlogs);
        }

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    fetchBlogs();

  }, []);

  useEffect(() => {

    const observer =
      new IntersectionObserver(
        (entries) => {

          const target =
            entries[0];

          if (
            target.isIntersecting
          ) {

            setVisibleBlogs(
              (prev) => prev + 4
            );
          }
        },
        {
          threshold: 0.2,
        }
      );

    if (loaderRef.current) {

      observer.observe(
        loaderRef.current
      );
    }

    return () => {

      if (loaderRef.current) {

        observer.unobserve(
          loaderRef.current
        );
      }
    };

  }, []);

  if (loading) {

    return (
      <section className="w-full py-[100px] flex items-center justify-center">
        <p className="text-[#1D3855] text-[18px] font-medium">
          Loading blogs...
        </p>
      </section>
    );
  }

  return (
    <section className="w-full py-0 px-5 sm:px-0 overflow-hidden">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-6
          gap-5
          sm:gap-6
        "
      >

        {blogs
          .slice(0, visibleBlogs)
          .map(
            (
              card,
              index
            ) => (

              <Link
                key={card.id}
                href={`/resources_details#${card.id}`}
                className={`
                  group
                  ${spans[index % spans.length]}
                `}
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
                    h-full
                    bg-white
                    rounded-[18px]
                    overflow-hidden
                    border
                    border-[#EEEEEE]
                    shadow-sm
                    hover:shadow-[0px_18px_50px_rgba(0,71,141,0.08)]
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >

                  <div
                    className="
                      relative
                      w-full
                      h-[220px]
                      sm:h-[240px]
                      md:h-[260px]
                      overflow-hidden
                    "
                  >

                    <motion.div
                      whileHover={{
                        scale: 1.06,
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
                          card.thumbnail
                            ? `https://fluid.free.nf/${card.thumbnail}`
                            : "/feature_grid_1.png"
                        }
                        alt={
                          card.blog_title
                        }
                        fill
                        className="object-cover"
                      />

                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                  </div>

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                      px-4
                      sm:px-5
                      py-4
                      bg-white
                    "
                  >

                    <div className="flex flex-col gap-[4px]">

                      <p
                        className="
                          text-[13px]
                          text-[#73797B]
                        "
                      >
                        {new Date(
                          card.publish_date
                        ).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>

                      <p
                        className="
                          text-[15px]
                          sm:text-[16px]
                          leading-[150%]
                          tracking-[-0.3px]
                          text-[#1D3855]
                          font-medium
                          line-clamp-2
                        "
                      >
                        {
                          card.blog_title
                        }
                      </p>

                    </div>

                    <motion.span
                      whileHover={{
                        x: 3,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        text-[18px]
                        text-[#1D3855]
                        shrink-0
                      "
                    >
                      ›
                    </motion.span>

                  </div>
                </motion.div>
              </Link>
            )
          )}

      </motion.div>

      {/* LOAD MORE TRIGGER */}

      <div
        ref={loaderRef}
        className="
          w-full
          h-[80px]
          flex
          items-center
          justify-center
        "
      >

        {visibleBlogs <
          blogs.length && (
          <p className="text-[#73797B] text-[14px]">
            Loading more blogs...
          </p>
        )}

      </div>

    </section>
  );
}