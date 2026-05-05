import { Shield, Lock, FileText } from "lucide-react";

export default function RightBox() {
  return (
    <section className="w-full sm:w-fit flex items-center justify-center px-8 sm:px-0">

      <div className="relative w-full aspect-square sm:w-[500px] sm:h-[500px] bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-visible">

        <div className="absolute -top-6 left-6 bg-white rounded-xl px-4 py-2 shadow-md border border-gray-200 flex items-center gap-3 z-10">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-800">Secure Network</p>
            <p className="text-xs text-gray-500">Active & Compliant</p>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[300px] h-[300px] rounded-full border border-dashed border-gray-300/50 flex items-center justify-center">

            <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-gray-300/40"></div>

            <div className="w-[110px] h-[110px] bg-[#eef2f5] rounded-2xl flex items-center justify-center border border-gray-200 shadow-inner">
              <Shield className="w-7 h-7 text-blue-500" />
            </div>
          </div>
        </div>

        <div className="absolute top-[110px] right-[80px] w-[70px] h-[70px] bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center">
          <Lock className="w-5 h-5 text-gray-500" />
        </div>

        <div className="absolute bottom-[110px] left-[80px] w-[70px] h-[70px] bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center">
          <FileText className="w-5 h-5 text-gray-500" />
        </div>

      </div>
    </section>
  );
}