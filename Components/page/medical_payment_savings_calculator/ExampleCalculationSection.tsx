"use client";

import Image from "next/image";
import {
  CloudUpload,
  Check,
} from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

import {
  ChangeEvent,
  FormEvent,
  useRef,
  useState,
} from "react";
import SuccessMessage from "@/Components/global/success_message";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fields = [
  {
    label: "Name",
    placeholder: "Enter your name",
    type: "text",
  },
  {
    label: "Practice Name",
    placeholder: "Enter your practice name",
    type: "text",
  },
  {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    label: "Phone",
    placeholder: "Enter your phone",
    type: "tel",
  },
];

export default function ExampleCalculationSection() {

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const [formData, setFormData] =
    useState({
      name: "",
      practice: "",
      email: "",
      phone: "",
    });

  const [fileName, setFileName] =
    useState("");

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  const handleChange = (
    key: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleFileUpload = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);
    }
  };

  // ============================================
  // FORM SUBMIT
  // ============================================

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      setIsLoading(true);

      // Create FormData
      const form = new FormData();

      form.append(
        "name",
        formData.name
      );

      form.append(
        "practice",
        formData.practice
      );

      form.append(
        "email",
        formData.email
      );

      form.append(
        "phone",
        formData.phone
      );

      // File
      const file =
        fileInputRef.current?.files?.[0];

      if (file) {
        form.append("file", file);
      }

      // API REQUEST
      const response = await fetch(
        "http://localhost:90/sfs.php",
        {
          method: "POST",
          body: form,
        }
      );

      const data =
        await response.json();

      // SUCCESS
      if (data.success) {

        setIsSubmitted(true);

        // Reset form
        setFormData({
          name: "",
          practice: "",
          email: "",
          phone: "",
        });

        setFileName("");

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);

      } else {

        alert(
          data.message ||
          "Submission failed"
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Something went wrong"
      );

    } finally {

      setIsLoading(false);

    }

  };

  if(isSubmitted) {
    return <SuccessMessage />
  }

  return (
    <section className="w-full py-0 overflow-hidden">

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
          px-5
          sm:px-8
          lg:px-0
          m-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-[24px]
          lg:gap-[32px]
        "
      >

        {/* FORM */}

        <motion.form
          variants={fadeUpVariants}
          onSubmit={handleSubmit}
          className="
            bg-[#F8FAFD]
            rounded-[24px]
            p-[24px]
            sm:p-[32px]
            lg:p-[40px]
            flex
            flex-col
            items-center
            gap-[24px]
            min-h-[784px]
          "
        >

          <div className="w-full">
            <h2 className="
              text-[#1D3855]
              text-[22px]
              sm:text-[24px]
              leading-[31px]
              tracking-[-0.3px]
              font-semibold
            ">
              Example Calculation
            </h2>
          </div>

          {/* INPUTS */}

          <div className="
            w-full
            flex
            flex-col
            gap-[28px]
            sm:gap-[32px]
          ">

            {fields.map((field, index) => {

              const fieldKeys = [
                "name",
                "practice",
                "email",
                "phone",
              ];

              return (

                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className="
                    w-full
                    flex
                    flex-col
                    items-start
                    gap-[4px]
                  "
                >

                  <label className="
                    w-full
                    text-[#0F2133]
                    text-[14px]
                    leading-[20px]
                    tracking-[-0.03em]
                    font-normal
                  ">
                    {field.label}
                  </label>

                  <motion.input
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#3B747F",
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    type={field.type}
                    required
                    value={
                      formData[
                        fieldKeys[
                          index
                        ] as keyof typeof formData
                      ]
                    }
                    onChange={(e) =>
                      handleChange(
                        fieldKeys[index],
                        e.target.value
                      )
                    }
                    placeholder={
                      field.placeholder
                    }
                    className="
                      w-full
                      h-[48px]
                      bg-white
                      border
                      border-[#D0D5DD]
                      rounded-[8px]
                      px-[16px]
                      text-[#0F2133]
                      text-[16px]
                      leading-[24px]
                      tracking-[-0.03em]
                      placeholder:text-[#73797B]
                      outline-none
                      transition-all
                    "
                  />

                </motion.div>

              );

            })}

          </div>

          {/* FILE UPLOAD */}

          <motion.div
            variants={fadeUpVariants}
            whileHover={{
              y: -2,
            }}
            onClick={() =>
              fileInputRef.current?.click()
            }
            className="
              w-full
              min-h-[168px]
              bg-[#EEEEEE]
              border-2
              border-dashed
              border-[#D0D5DD]
              rounded-[16px]
              px-[24px]
              sm:px-[40px]
              py-[32px]
              sm:py-[40px]
              flex
              flex-col
              items-center
              justify-center
              gap-[16px]
              cursor-pointer
              transition-all
              duration-300
              hover:border-[#5DA7CF]
              hover:bg-[#f1f7fc]
            "
          >

            <input
              ref={fileInputRef}
              type="file"
              accept="
                .pdf,
                .jpg,
                .jpeg,
                .png
              "
              className="hidden"
              onChange={handleFileUpload}
            />

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                w-[33px]
                h-[24px]
                flex
                items-center
                justify-center
              "
            >

              <CloudUpload
                size={33}
                className="
                  text-[#73797B]
                "
                strokeWidth={1.8}
              />

            </motion.div>

            <div className="
              flex
              flex-col
              items-center
              gap-[8px]
            ">

              <p className="
                text-[#1D3855]
                text-[14px]
                leading-[20px]
                tracking-[-0.3px]
                font-semibold
                text-center
              ">

                {fileName
                  ? "File Uploaded Successfully"
                  : "Upload processing statement"}

              </p>

              <p className="
                text-[#73797B]
                text-[12px]
                leading-[16px]
                tracking-[-0.3px]
                font-normal
                text-center
                break-all
              ">

                {fileName
                  ? fileName
                  : "PDF, JPG or PNG (Max 10MB)"}

              </p>

            </div>

          </motion.div>

          {/* BUTTON */}

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              w-full
              sm:w-[304px]
              h-[48px]
              bg-[#3B747F]
              rounded-[8px]
              px-[20px]
              py-[12px]
              flex
              items-center
              justify-center
              gap-2
              text-white
              text-[16px]
              leading-[24px]
              font-semibold
              hover:bg-[#477f8a]
              transition-colors
              duration-300
              disabled:opacity-60
            "
          >

            {isLoading ? (
              "Submitting..."
            ) : isSubmitted ? (
              <>
                <Check size={18} />
                Request Submitted
              </>
            ) : (
              "Request Custom Savings Analysis"
            )}

          </motion.button>

        </motion.form>

        {/* RIGHT IMAGE */}

        <motion.div
          variants={fadeUpVariants}
          className="
            relative
            min-h-[420px]
            sm:min-h-[580px]
            lg:min-h-[784px]
            rounded-[24px]
            overflow-hidden
          "
        >

          <motion.div
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >

            <Image
              src="/ExampleCalculation.png"
              alt="Example Calculation"
              fill
              className="object-cover"
            />

          </motion.div>

          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#0f213380]
            via-transparent
            to-transparent
          " />

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-5
              left-5
              right-5
              sm:bottom-8
              sm:left-8
              sm:right-8
              bg-white/10
              backdrop-blur-md
              border
              border-white/10
              rounded-[20px]
              p-5
              sm:p-6
            "
          >

            <p className="
              text-white
              text-[14px]
              uppercase
              tracking-[0.18em]
            ">
              Financial Insight
            </p>

            <h3 className="
              mt-2
              text-white
              text-[24px]
              sm:text-[32px]
              leading-[120%]
              tracking-[-0.03em]
              font-medium
            ">
              Discover hidden payment
              savings opportunities
            </h3>

            <p className="
              mt-3
              text-[#D0D5DD]
              text-[14px]
              sm:text-[16px]
              leading-[170%]
            ">
              Upload your current
              processing statement and
              receive a tailored
              healthcare payment
              analysis.
            </p>

          </motion.div>

        </motion.div>

      </motion.div>

    </section>
  );
}