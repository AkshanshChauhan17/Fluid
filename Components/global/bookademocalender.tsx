"use client";

import { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type BookDemoCalendarProps = {
  open: boolean;
  onClose: () => void;
};

const demoSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:30 PM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
];

export default function BookDemoCalendar({
  open,
  onClose,
}: BookDemoCalendarProps) {
  const [step, setStep] = useState(1);

  const [selectedDate, setSelectedDate] = useState<number>(22);
  const [selectedSlot, setSelectedSlot] = useState("02:00 PM");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              relative
              w-full
              max-w-[720px]
              h-[92vh]
              bg-white
              rounded-[22px]
              overflow-hidden
              shadow-2xl
              flex
              flex-col
            "
          >
            {/* HEADER */}
            <div className="shrink-0 border-b border-[#eef2f7] px-4 sm:px-6 py-4 bg-white">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#f4f7fb] flex items-center justify-center"
              >
                <X className="w-4 h-4 text-[#1f3b5b]" />
              </button>

              <div className="flex items-center gap-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className={`
                      w-7 h-7 rounded-full flex items-center justify-center
                      text-[12px] font-semibold
                      ${
                        step >= item
                          ? "bg-[#3B747F] text-white"
                          : "bg-[#eef2f7] text-[#667085]"
                      }
                    `}
                  >
                    {item}
                  </div>
                ))}

                <div className="flex-1 h-[2px] bg-[#eef2f7]" />
              </div>

              <div className="flex justify-between mt-2 text-[11px] text-[#667085]">
                <span>Select</span>
                <span>Details</span>
                <span>Done</span>
              </div>
            </div>

            {/* BODY */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4">
              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#1f3b5b]">
                    Select Date & Time
                  </h2>

                  <p className="mt-1 text-[13px] sm:text-[14px] text-[#667085]">
                    Choose your preferred slot.
                  </p>

                  {/* CALENDAR */}
                  <div className="mt-4 border border-[#e7edf4] rounded-2xl overflow-hidden">
                    {/* TOP */}
                    <div className="flex items-center justify-between px-3 py-3 border-b border-[#eef2f7] bg-[#f8fbff]">
                      <h4 className="text-[14px] font-semibold text-[#1f3b5b]">
                        May 2026
                      </h4>

                      <div className="flex gap-2">
                        <button className="w-7 h-7 rounded-full border border-[#dce7f2] flex items-center justify-center">
                          <ChevronLeft className="w-3 h-3" />
                        </button>

                        <button className="w-7 h-7 rounded-full border border-[#dce7f2] flex items-center justify-center">
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* DAYS */}
                    <div className="grid grid-cols-7 text-center text-[10px] sm:text-[11px] font-medium text-[#667085] border-b border-[#eef2f7]">
                      {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                        <div key={day} className="py-2">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* DATES */}
                    <div className="grid grid-cols-7 gap-1 p-2">
                      {Array.from({ length: 31 }, (_, i) => i + 1).map(
                        (date) => (
                          <button
                            key={date}
                            onClick={() => setSelectedDate(date)}
                            className={`
                              aspect-square
                              rounded-lg
                              text-[11px]
                              sm:text-[12px]
                              font-medium
                              transition-all
                              border

                              ${
                                selectedDate === date
                                  ? "bg-[#3B747F] text-white border-[#3B747F]"
                                  : "bg-[#f8fbff] border-[#edf2f7] text-[#1f3b5b]"
                              }
                            `}
                          >
                            {date}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* SLOTS */}
                  <div className="mt-5">
                    <h4 className="text-[15px] font-semibold text-[#1f3b5b]">
                      Available Slots
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3">
                      {demoSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedSlot(slot)}
                          className={`
                            h-[40px]
                            rounded-xl
                            text-[12px]
                            font-medium
                            border
                            transition-all

                            ${
                              selectedSlot === slot
                                ? "bg-[#3B747F] text-white border-[#3B747F]"
                                : "bg-[#f8fbff] border-[#dfe8f1] text-[#1f3b5b]"
                            }
                          `}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#1f3b5b]">
                    Your Information
                  </h2>

                  <p className="mt-1 text-[13px] sm:text-[14px] text-[#667085]">
                    Fill your details to confirm booking.
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-[#f8fbff] border border-[#e7edf4]">
                    <p className="text-[13px] text-[#1f3b5b]">
                      Date:{" "}
                      <span className="font-semibold text-[#3B747F]">
                        {selectedDate} May 2026
                      </span>
                    </p>

                    <p className="text-[13px] text-[#1f3b5b] mt-2">
                      Slot:{" "}
                      <span className="font-semibold text-[#3B747F]">
                        {selectedSlot}
                      </span>
                    </p>
                  </div>

                  <div className="mt-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="
                        w-full
                        h-[44px]
                        rounded-xl
                        border
                        border-[#dfe8f1]
                        px-4
                        text-[13px]
                        outline-none
                        focus:border-[#3B747F]
                      "
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="
                        w-full
                        h-[44px]
                        rounded-xl
                        border
                        border-[#dfe8f1]
                        px-4
                        text-[13px]
                        outline-none
                        focus:border-[#3B747F]
                      "
                    />

                    <textarea
                      placeholder="Project details"
                      className="
                        w-full
                        min-h-[90px]
                        rounded-xl
                        border
                        border-[#dfe8f1]
                        px-4
                        py-3
                        text-[13px]
                        outline-none
                        resize-none
                        focus:border-[#3B747F]
                      "
                    />
                  </div>
                </>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[#edf9f4] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#22c55e]" />
                  </div>

                  <h2 className="mt-5 text-[24px] font-semibold text-[#1f3b5b]">
                    Booking Confirmed
                  </h2>

                  <p className="mt-3 text-[14px] text-[#667085] leading-[1.8] max-w-[320px]">
                    Thank you for booking your demo. Our team will contact you
                    shortly.
                  </p>

                  <button
                    onClick={onClose}
                    className="
                      mt-6
                      h-[44px]
                      px-6
                      rounded-xl
                      bg-[#3B747F]
                      text-white
                      text-[13px]
                      font-semibold
                    "
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            {/* FOOTER */}
            {step !== 3 && (
              <div className="shrink-0 border-t border-[#eef2f7] p-4 bg-white">
                {step === 1 ? (
                  <button
                    onClick={() => setStep(2)}
                    className="
                      w-full
                      h-[44px]
                      rounded-xl
                      bg-[#3B747F]
                      text-white
                      text-[13px]
                      font-semibold
                    "
                  >
                    Continue
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="
                        flex-1
                        h-[44px]
                        rounded-xl
                        border
                        border-[#dfe8f1]
                        text-[#1f3b5b]
                        text-[13px]
                        font-medium
                      "
                    >
                      Back
                    </button>

                    <button
                      onClick={() => setStep(3)}
                      className="
                        flex-1
                        h-[44px]
                        rounded-xl
                        bg-[#3B747F]
                        text-white
                        text-[13px]
                        font-semibold
                      "
                    >
                      Confirm
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}