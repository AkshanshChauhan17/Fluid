import Link from "next/link";

const pages = [
  {
    page: "Home",
    url: "/",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "About",
    url: "/about",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Agent Partner Program",
    url: "/agent_partner_program",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Book a Demo",
    url: "/book_a_demo",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Compliance Disclosures",
    url: "/compliance_disclosures",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Create New Account",
    url: "/create_new_account",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "FAQs",
    url: "/faqs",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Healthcare Payment Processing",
    url: "/healthcare_payment_processing",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "HIPAA",
    url: "/hipaa",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Medical Payment Savings Calculator",
    url: "/medical_payment_savings_calculator",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Our Team",
    url: "/our_team",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Pricing Plans",
    url: "/pricing_plans",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Privacy Policy",
    url: "/privacy_policy",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Reset Password",
    url: "/reset_password",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Resources Details",
    url: "/resources_details",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Resources / Knowledge Base",
    url: "/resources_or_knowledge_bas",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Security and Compliance",
    url: "/security_and_compliance",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Services",
    url: "/services",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Signin",
    url: "/signin",
    mobileOptimized: true,
    animated: true,
  },
  {
    page: "Terms and Conditions",
    url: "/terms_and_conditions",
    mobileOptimized: true,
    animated: true,
  },
];

export default function PagesTable() {
  return (
    <div className="w-full overflow-x-auto bg-white rounded-2xl border border-gray-200">
      <table className="w-full min-w-[700px] border-collapse">
        <thead className="bg-[#F4F7FB]">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Page Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              URL
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
              Mobile Optimize
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
              Animated
            </th>
          </tr>
        </thead>

        <tbody>
          {pages.map((item, index) => (
            <tr
              key={index}
              className="border-t border-gray-100 hover:bg-gray-50 transition-all"
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-800">
                {item.page}
              </td>

              <td className="px-6 py-4 text-sm text-[#5DA7CF]">
                <Link href={item.url}>{item.url}</Link>
              </td>

              <td className="px-6 py-4 text-center text-green-600 text-lg">
                ✓
              </td>

              <td className="px-6 py-4 text-center text-green-600 text-lg">
                ✓
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}