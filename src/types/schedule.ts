export interface Class {
  id: string;
  name: string;
  description: string;
  duration: number;
  capacity: number;
}

export interface Instructor {
  id: string;
  name: string;
  email: string;
  bio: string;
  is_substitute: boolean;
}

export interface ClassSession {
  id: string;
  class_id: string;
  instructor_id: string;
  start_time: string;
  end_time: string;
  current_capacity: number;
  status: "scheduled" | "cancelled";
  class: Class;
  instructor: Instructor;
}
