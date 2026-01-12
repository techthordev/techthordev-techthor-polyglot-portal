export interface MasteryTrackItem {
  name: string;
  description: string;
  iconPath: string;
  repoUrl?: string;
  category: 'Algorithms & Concurrency' | 'Database Mastery';
}

export const MASTERY_TRACK_DATA: MasteryTrackItem[] = [
  {
    name: 'Java DSA & Concurrency',
    category: 'Algorithms & Concurrency',
    description:
      'Structured problem-solving practice covering algorithms, data structures, time/space optimization, threading, synchronization, and lock-based concurrency patterns.',
    iconPath: 'assets/icons/java-logo.png',
    repoUrl: 'https://github.com/techthordev/leetcode/tree/main/JavaProblems',
  },

  {
    name: 'PostgreSQL Mastery Track',
    category: 'Database Mastery',
    description:
      'Advanced SQL practice including joins, window functions, indexing strategies, query optimization, normalization principles, and schema design.',
    iconPath: 'assets/icons/postgresql-logo.png',
    repoUrl: 'https://github.com/techthordev/leetcode/tree/main/postgresql',
  },
];

export const getGroupedMasteryTracks = (data: MasteryTrackItem[]) => {
  return data.reduce(
    (acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    },
    {} as Record<MasteryTrackItem['category'], MasteryTrackItem[]>,
  );
};
