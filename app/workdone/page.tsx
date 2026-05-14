"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  X,
  CircleAlert,
  Expand,
} from "lucide-react";

const pages = [
  {
    page: "Home",
    url: "/",
    linking: true,
    functionality: true,
    mobileOptimized: true,
    animated: true,
  },

  {
    page: "About",
    url: "/about",
    linking: true,
    functionality: true,
    mobileOptimized: true,
    animated: true,
  },

  {
    page: "Agent Partner Program",
    url: "/agent_partner_program",
    linking: true,
    functionality: true,
    mobileOptimized: true,
    animated: true,
  },

  {
    page: "Book a Demo",
    url: "/book_a_demo",
    linking: true,
    functionality: true,
    mobileOptimized: true,
    animated: true,
  },

  {
    page: "Compliance Disclosures",
    url: "/compliance_disclosures",
    linking: true,
    functionality: true,
    mobileOptimized: true,
    animated: true,
  },

  {
    page: "Create New Account",
    url: "/create_new_account",
    linking: true,
    functionality: false,
    mobileOptimized: true,
    animated: true,

    issue: {
      title: "Backend Integration Required for Form Functionality",

      note:
        "The registration form is currently static. Backend integration is required to process user registrations, validate inputs, store user data, and handle authentication securely.",

      image: "/issues/1.png",
    },
  },

  {
    page: "FAQs",
    url: "/faqs",
    linking: true,
    functionality: true,
    mobileOptimized: true,
    animated: true,
  },

  {
    page: "Healthcare Payment Processing",
    url: "/healthcare_payment_processing",
    linking: true,
    functionality: true,
    mobileOptimized: true,
    animated: true,
  },

  {
    page: "HIPAA",
    url: "/hipaa",
    linking: false,
    functionality: true,
    mobileOptimized: true,
    animated: true,

    issue: {
      title: "Navigation Destination Confirmation Required",

      note:
        "The button displayed in the Features section of the HIPAA page currently has no navigation destination assigned. Please confirm which page or action this button should link to.",

      image: "/issues/2.png",
    },
  },

  {
    page: "Medical Payment Savings Calculator",
    url: "/medical_payment_savings_calculator",
    linking: true,
    functionality: false,
    mobileOptimized: true,
    animated: true,

    issue: {
      title: "Backend Required for Calculator Submission",

      note:
        "The savings calculator UI is complete, but backend integration is still required to process form submissions, calculate savings data, and store user requests.",

      image: "/issues/3.png",
    },
  },

  {
    page: "Our Team",
    url: "/our_team",
    linking: true,
    functionality: true,
    mobileOptimized: true,
    animated: true,
  },

  {
    page: "Pricing Plans",
    url: "/pricing_plans",
    linking: false,
    functionality: false,
    mobileOptimized: true,
    animated: true,

    issue: {
      title: "Pricing Plan Flow Needs Confirmation",

      note:
        "The pricing cards and plan buttons are designed, but the next user flow has not yet been defined. Please confirm whether users should proceed to checkout, contact sales, or a registration page after selecting a plan.",

      image: "/issues/4.png",
    },
  },

  {
    page: "Privacy Policy",
    url: "/privacy_policy",
    linking: true,
    functionality: true,
    mobileOptimized: true,
    animated: true,
  },

  {
    page: "Reset Password",
    url: "/reset_password",
    linking: true,
    functionality: false,
    mobileOptimized: true,
    animated: true,

    issue: {
      title: "Password Reset Backend Integration Required",

      note:
        "The password reset interface has been completed, but backend functionality for email verification, token generation, and secure password updates is still pending.",

      image: "/issues/5.png",
    },
  },

  {
    page: "Resources Details",
    url: "/resources_details",
    linking: false,
    functionality: true,
    mobileOptimized: true,
    animated: true,

    issue: {
      title: "Backend Required for Blog Management",

      note:
        "A backend system is required to store, manage, and dynamically display blog content for the Resources Details page.",

      image: "/issues/6.png",
    },
  },

  {
    page: "Resources / Knowledge Base",
    url: "/resources_or_knowledge_bas",
    linking: false,
    functionality: true,
    mobileOptimized: true,
    animated: true,

    issue: {
      title: "Dynamic Blog Storage Required",

      note:
        "The knowledge base section requires backend integration to manage blog posts, categories, publishing workflows, and content updates dynamically.",

      image: "/issues/7.png",
    },
  },

  {
    page: "Security and Compliance",
    url: "/security_and_compliance",
    linking: true,
    functionality: true,
    mobileOptimized: true,
    animated: true,
  },

  {
    page: "Services",
    url: "/services",
    linking: false,
    functionality: true,
    mobileOptimized: true,
    animated: true,

    issue: {
      title: "Navigation Required for Partner Application Button",

      note:
        "The 'Start Partner Application' button currently does not have a linked destination. Please confirm whether it should navigate to a form page, onboarding flow, or contact section.",

      image: "/issues/8.png",
    },
  },

  {
    page: "Signin",
    url: "/signin",
    linking: true,
    functionality: false,
    mobileOptimized: true,
    animated: true,

    issue: {
      title: "Authentication Backend Integration Required",

      note:
        "The sign-in page UI has been completed, but backend authentication logic, session handling, and secure login validation are still pending.",

      image: "/issues/9.png",
    },
  },

  {
    page: "Terms and Conditions",
    url: "/terms_and_conditions",
    linking: true,
    functionality: true,
    mobileOptimized: true,
    animated: true,
  },
];

export default function WorkDone() {
  const [selectedIssue, setSelectedIssue] = useState<
    (typeof pages)[number]["issue"] | null
  >(null);

  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <>
      <div className="w-full overflow-x-auto bg-white rounded-2xl border border-gray-200">
        <table className="w-full min-w-[950px] border-collapse">

          {fullscreenImage && (
        <div className="fixed inset-0 z-609 bg-black/95 flex items-center justify-center p-5">

          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute z-50 top-6 right-6 w-12 h-12 rounded-full bg-red-900 hover:bg-white/20 flex items-center justify-center transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full max-w-[1400px] h-[90vh]">
            <Image
              src={fullscreenImage}
              alt="Fullscreen Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

          {/* HEADER */}
          <thead className="bg-[#F4F7FB]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Page Name
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                URL
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                Linking
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                Functionality
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                Mobile Optimized
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                Animated
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {pages.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-100 hover:bg-gray-50 transition-all"
              >

                {/* PAGE */}
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {item.page}
                </td>

                {/* URL */}
                <td className="px-6 py-4 text-sm text-[#5DA7CF]">
                  <Link
                    href={item.url}
                    className="hover:underline"
                  >
                    {item.url}
                  </Link>
                </td>

                {/* LINKING */}
                <td className="px-6 py-4 text-center">
                  {item.linking ? (
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  ) : (
                    <button
                      onClick={() => setSelectedIssue(item.issue)}
                      className="mx-auto"
                    >
                      <X className="w-5 h-5 text-red-500 hover:scale-110 transition-all" />
                    </button>
                  )}
                </td>

                {/* FUNCTIONALITY */}
                <td className="px-6 py-4 text-center">
                  {item.functionality ? (
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  ) : (
                    <button
                      onClick={() => setSelectedIssue(item.issue)}
                      className="mx-auto"
                    >
                      <X className="w-5 h-5 text-red-500 hover:scale-110 transition-all" />
                    </button>
                  )}
                </td>

                {/* MOBILE */}
                <td className="px-6 py-4 text-center">
                  {item.mobileOptimized ? (
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  )}
                </td>

                {/* ANIMATED */}
                <td className="px-6 py-4 text-center">
                  {item.animated ? (
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ISSUE POPUP */}
      {selectedIssue && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-5">

          <div className="w-full max-w-[760px] bg-white rounded-[28px] overflow-hidden shadow-2xl">

            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center">
                  <CircleAlert className="w-6 h-6 text-red-500" />
                </div>

                <div>
                  <h3 className="text-[18px] font-semibold text-[#111827]">
                    {selectedIssue.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Issue details and developer notes
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedIssue(null)}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col gap-6">

              {/* IMAGE */}
              <button
                onClick={() => setFullscreenImage(selectedIssue.image)}
                className="relative w-full h-[340px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 group"
              >
                <Image
                  src={selectedIssue.image}
                  alt="Issue Preview"
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                    <Expand className="w-6 h-6 text-black" />
                  </div>
                </div>
              </button>

              {/* NOTE */}
              <div className="bg-[#F8FAFD] border border-[#E8EEF5] rounded-2xl p-5">
                <h4 className="text-[15px] font-semibold text-[#111827] mb-2">
                  Developer Notes
                </h4>

                <p className="text-[14px] leading-[28px] text-gray-600">
                  {selectedIssue.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}