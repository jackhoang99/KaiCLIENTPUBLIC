import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { format } from "date-fns";
import type { ClassSession } from "../../types/schedule";

interface ClassCardProps {
  session: ClassSession;
}

const ClassCard = ({ session }: ClassCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const startTime = new Date(session.start_time);
  const endTime = new Date(session.end_time);

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <div>
          <div className="text-sm md:text-lg font-medium mb-1">
            {format(startTime, "h:mm a")} – {format(endTime, "h:mm a")} PST
          </div>
          <h3 className="text-lg md:text-xl font-medium mb-1">{session.class.name}</h3>
          <p className="text-sm text-black/60">{session.instructor.name}</p>
          <p className="text-xs md:text-sm text-black/60">
            {session.current_capacity} of {session.class.capacity} open
          </p>
        </div>
      </div>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="flex items-center text-xs md:text-sm text-black/60 hover:text-black transition-colors"
      >
        {showDetails ? (
          <>
            <span>Hide details</span>
            <ChevronUp className="w-3 h-3 md:w-4 md:h-4 ml-1" />
          </>
        ) : (
          <>
            <span>View details</span>
            <ChevronDown className="w-3 h-3 md:w-4 md:h-4 ml-1" />
          </>
        )}
      </button>
      {showDetails && (
        <div className="mt-3 md:mt-4 text-xs md:text-sm text-black/80">
          {session.class.description}
        </div>
      )}
    </div>
  );
};

export default ClassCard;
