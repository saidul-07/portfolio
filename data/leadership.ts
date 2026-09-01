export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description?: string;
  badge?: string;
}

export const leadershipList: LeadershipItem[] = [
  {
    id: "duet-computer-society",
    role: "Executive Member",
    organization: "DUET Computer Society",
    period: "2024 – Present",
    description: "Organizing competitive programming contests, technical seminars, student developer workshops, and department community events.",
    badge: "CS Society Role"
  },
  {
    id: "duet-math-club",
    role: "Joint Secretary",
    organization: "DUET Math Club",
    period: "2024 – Present",
    description: "Coordinating mathematical problem-solving sessions, campus olympiads, and managing student club operations.",
    badge: "Executive Role"
  }
];
