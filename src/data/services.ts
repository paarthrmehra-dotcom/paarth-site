/**
 * Your coaching offers. Add, remove, or reorder freely — the grid reflows.
 * Add a price to `meta` if you want it public; leave it out to price on the call.
 */

export interface Service {
  title: string;
  /** Two sentences. The homepage grid is tuned for that length. */
  summary: string;
  /** Short line at the bottom of the card: format, length, or price band. */
  meta: string;
  /** Longer description, used on the coaching page only. */
  detail: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    title: 'Consulting & VC interviews',
    summary:
      'Case practice with someone who spent six years running Bain cases and now sits on the investing side. We work on structure and judgement, not memorised frameworks.',
    meta: 'Per session or as a block',
    detail:
      'I interviewed and trained candidates at Bain, and I now evaluate businesses for a living at Merak. Both sides of that inform how I run a case. Most candidates fail not on arithmetic but because they reach for a stock framework instead of thinking about the specific problem — and an interviewer can tell within ninety seconds. We run live cases, I interrupt where a real interviewer would, and afterwards we go through exactly where your structure drifted and why. For VC and investment roles we cover the parts that differ: deal judgement, market sizing you can defend under pushback, and how to discuss a company you find interesting without sounding like you read a newsletter.',
    deliverables: [
      'Live cases with real-time interruption and feedback',
      'Written notes after each session on what to fix before the next',
      'Fit and behavioural preparation for the same firms',
      'A practice plan for the weeks in between',
    ],
  },
  {
    title: 'MBA admissions',
    summary:
      'Positioning, school selection, and essays that sound like you rather than like the other two thousand applications from your industry.',
    meta: 'Full cycle or single round',
    detail:
      'I went through this myself for IIM Udaipur and an exchange at EDHEC, and I have since read a lot of applications from people with profiles close to mine. Admissions committees see the same achievements described in the same language every year. The work is finding the specific, true thing about your trajectory that nobody else can claim, then building the application around it. We start with positioning and a realistic school list, then move to essays, briefing your recommenders, and interview practice.',
    deliverables: [
      'Profile assessment and a school list you can actually defend',
      'Essay strategy, then line-level editing across drafts',
      'Guidance for your recommenders on what to emphasise',
      'Mock interviews ahead of each school',
    ],
  },
  {
    title: 'Resume & profile review',
    summary:
      'A line-by-line rewrite of your resume and LinkedIn, aimed at the eight-second screen that decides whether a human reads either.',
    meta: 'One week turnaround',
    detail:
      'I did this for over twenty IIM graduates through Board Infinity, and I have sat on the other side screening candidates. A resume gets somewhere between six and thirty seconds on the first pass. I go through yours line by line, cut what is not earning its space, and rewrite bullets so the result of your work is visible rather than the task you were assigned. Then we do the same for LinkedIn, which is doing a different job to a resume and is usually written as though it were the same document.',
    deliverables: [
      'Rewritten resume with tracked changes, so you can see the reasoning',
      'LinkedIn headline, about section, and experience bullets',
      'A call to walk through the changes',
      'One revision round after you have applied the edits',
    ],
  },
];
