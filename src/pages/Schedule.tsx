import React, { useState } from "react";
import { format, isSameDay } from "date-fns";
import Container from "../components/layout/Container";
import PageLayout from "../components/layout/PageLayout";
import { useSchedule } from "../hooks/useSchedule";
import ScheduleCalendar from "../components/schedule/ScheduleCalendar";
import ClassCard from "../components/schedule/ClassCard";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { classes, loading, error } = useSchedule();

  const classesForSelectedDate = classes.filter((session) =>
    isSameDay(new Date(session.start_time), selectedDate)
  );

  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <h1 className="text-4xl font-display mb-12 text-center">
            CLASS SCHEDULE
          </h1>

          <div className="max-w-4xl mx-auto">
            <ScheduleCalendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />

            {loading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="large" />
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-600">{error}</div>
            ) : classesForSelectedDate.length > 0 ? (
              <div className="space-y-4">
                {classesForSelectedDate.map((session) => (
                  <ClassCard key={session.id} session={session} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-600">
                No classes scheduled for {format(selectedDate, "MMMM d, yyyy")}
              </div>
            )}
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default Schedule;
