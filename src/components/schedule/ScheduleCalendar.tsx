import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  addDays,
  startOfWeek,
  isSameDay,
  addWeeks,
  subWeeks,
} from "date-fns";

interface ScheduleCalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const ScheduleCalendar = ({
  selectedDate,
  onDateSelect,
}: ScheduleCalendarProps) => {
  const [weekStart, setWeekStart] = React.useState(
    startOfWeek(new Date(), { weekStartsOn: 0 })
  );
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const handlePrevWeek = () => {
    setWeekStart((prev) => subWeeks(prev, 1));
  };

  const handleNextWeek = () => {
    setWeekStart((prev) => addWeeks(prev, 1));
  };

  const handleJumpToToday = () => {
    const today = new Date();
    setWeekStart(startOfWeek(today, { weekStartsOn: 0 }));
    onDateSelect(today);
  };

  const isToday = (date: Date) => isSameDay(date, new Date());

  return (
    <div className="mb-4 md:mb-8">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <button
          onClick={handlePrevWeek}
          className="p-1 md:p-2 hover:bg-black/5 rounded-full transition-colors"
          aria-label="Previous week"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
        </button>

        <div className="grid grid-cols-7 gap-1 md:gap-2 flex-1 max-w-2xl mx-2 md:mx-4">
          {days.map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-xs md:text-sm font-medium mb-1">
                {format(day, "EEE")}
              </div>
              <button
                onClick={() => onDateSelect(day)}
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full mx-auto flex items-center justify-center text-xs md:text-sm transition-colors relative ${
                  isSameDay(day, selectedDate)
                    ? "bg-black text-white"
                    : "hover:bg-black/5"
                }`}
              >
                {format(day, "d")}
                {isToday(day) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                )}
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleNextWeek}
          className="p-1 md:p-2 hover:bg-black/5 rounded-full transition-colors"
          aria-label="Next week"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleJumpToToday}
          className="text-xs md:text-sm text-black/60 hover:text-black transition-colors"
        >
          Today
        </button>
      </div>
    </div>
  );
};

export default ScheduleCalendar;
