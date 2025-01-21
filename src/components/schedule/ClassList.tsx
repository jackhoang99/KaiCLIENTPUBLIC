import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSchedule } from "../../hooks/useSchedule";
import LoadingSpinner from "../ui/LoadingSpinner";
import ClassCard from "./ClassCard";

const ClassList = () => {
  const { classes, loading, error } = useSchedule();

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-12 text-red-600">{error}</div>;
  }

  if (!classes.length) {
    return (
      <div className="text-center py-12 text-gray-600">
        No classes scheduled for this day
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {classes.map((classSession) => (
        <ClassCard key={classSession.id} session={classSession} />
      ))}
    </div>
  );
};

export default ClassList;
