type Gender = string;
type Case = string;

interface INumeralize{
  (number: number, gende?: Gender, kase?: Case, animate?: boolean): string;

  pluralize(count: number, one: string, two: string, five: string): string;

  GENDER_MASCULINE: Gender;
  GENDER_FEMININE: Gender;
  GENDER_NEUTER: Gender;

  /** Именительный падеж */
  CASE_NOMINATIVE: Case;

  /** Родительный падеж */
  CASE_GENITIVE: Case;

  /** Дательный падеж */
  CASE_DATIVE: Case;

  /** Винительный падеж */
  CASE_ACCUSATIVE: Case;

  /** Творитеьный падеж */
  CASE_INSTRUMENTAL: Case;

  /** Предложный падеж */
  CASE_PREPOSITIONAL: Case;
}

const numeralize: INumeralize;

export = numeralize;
