"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function ChecklistDownloads() {
  const [checklistLeads, setChecklistLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChecklistLeads = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("https://api.fluid.financial/gd.php");
        if (!response.ok) {
          throw new Error("Failed to fetch checklist leads");
        }
        const data = await response.json();
        if (data.success) {
          setChecklistLeads(data.downloads || []);
        } else {
          setError(data.message || "Failed to load data");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setIsLoading(false);
      }
    };

    fetchChecklistLeads();
  }, []);

  return (
    <div className="flex flex-col w-full h-full animate-in fade-in duration-300">
      <div className="bg-white border border-[#E8EDF3] rounded-[22px] p-[24px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col mb-6 gap-2">
          <h3 className="text-[#0F2133] text-[20px] font-semibold">
            Checklist Downloads
          </h3>
          <p className="text-[#73797B] text-[14px]">
            Users who requested the Healthcare Payment Compliance Checklist.
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          {isLoading ? (
            <div className="py-12 text-center text-[#3B747F] font-medium animate-pulse">
              Loading data from server...
            </div>
          ) : error ? (
            <div className="py-12 text-center text-red-500 font-medium">
              Error: {error}
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#E8EDF3] text-[#73797B] text-[14px]">
                  <th className="pb-4 font-medium px-2">Name</th>
                  <th className="pb-4 font-medium px-2">Email</th>
                  <th className="pb-4 font-medium px-2">Practice Name</th>
                  <th className="pb-4 font-medium px-2 text-center">Verified Email</th>
                  <th className="pb-4 font-medium px-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {checklistLeads && checklistLeads.length > 0 ? (
                  checklistLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-[#E8EDF3] last:border-0 hover:bg-[#F8FAFD] transition-colors"
                    >
                      <td className="py-4 px-2 text-[#0F2133] text-[15px] font-medium">
                        {lead.name}
                      </td>
                      <td className="py-4 px-2 text-[#73797B] text-[14px]">
                        {lead.email}
                      </td>
                      <td className="py-4 px-2 text-[#73797B] text-[14px]">
                        {lead.practice_name || "N/A"}
                      </td>
                      <td className="py-4 px-2 flex justify-center">
                        {lead.is_verified == 1 ? (
                          <CheckCircle2 size={18} className="text-green-500" />
                        ) : (
                          <XCircle size={18} className="text-gray-300" />
                        )}
                      </td>
                      <td className="py-4 px-2 text-[#73797B] text-[13px]">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-8 text-center text-[#73797B] text-[14px]"
                    >
                      No checklist downloads found yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}