export default function EarningsCard() {
  return (
    <section className="relative w-full max-w-[450px] rounded-[14px] overflow-hidden shrink-0">
      <div className="w-full rounded-[14px] bg-[#f7f7f7] p-[32px]">
        
        {/* TOP LABEL */}
        <p className="text-[#1d3855] text-[14px] leading-[20px] tracking-[-0.3px] font-normal">
          Interactive Example
        </p>

        {/* CONTENT */}
        <div className="mt-[32px]">
          
          {/* ITEM 1 */}
          <div className="flex items-start justify-between gap-[16px] pb-[20px] border-b border-[#eeeeee]">
            <div>
              <p className="text-[#73797b] text-[14px] leading-[20px] tracking-[0.7px] uppercase font-medium">
                Practice Processes
              </p>

              <p className="text-[#73797b] text-[14px] leading-[20px] tracking-[0.7px] uppercase font-medium">
                (Annually)
              </p>
            </div>

            <p className="text-[#1d3855] text-[30px] leading-[36px] tracking-[-1px] font-semibold">
              $2M
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-center justify-between gap-[16px] py-[20px] border-b border-[#eeeeee]">
            <div>
              <p className="text-[#73797b] text-[14px] leading-[20px] tracking-[0.7px] uppercase font-medium">
                Platform Revenue
              </p>
            </div>

            <p className="text-[#1d3855] text-[30px] leading-[36px] tracking-[-1px] font-semibold">
              $20K
            </p>
          </div>
        </div>

        {/* BOTTOM BOX */}
        <div className="mt-[32px] rounded-[16px] bg-[#3b747f] px-[24px] py-[24px] flex items-center justify-between">
          
          <div>
            <p className="text-white text-[14px] leading-[20px] tracking-[0.7px] uppercase font-normal">
              Agent Earns
            </p>

            <p className="text-white text-[14px] leading-[20px] tracking-[0.7px] font-light">
              (recurring annually)
            </p>
          </div>

          <p className="text-white text-[30px] leading-[36px] tracking-[-1px] font-semibold">
            $4K
          </p>
        </div>
      </div>
    </section>
  );
}