import type {Lang} from './locale';

type EpisodeData = {
  guest: string;
  guestEn: string;
  affiliation: string;
  affiliationEn?: string;
  title: string;
  titleEn?: string;
  summary: string;
  summaryEn?: string;
  fields: string[];
  fieldsEn?: string[];
  highlights?: string[];
  highlightsEn?: string[];
  primaryLanguage?: 'zh' | 'en';
};

export function episodeCopy(data: EpisodeData, lang: Lang) {
  if (lang === 'en') {
    return {
      guest: data.guestEn,
      affiliation: data.affiliationEn ?? data.affiliation,
      title: data.titleEn ?? data.title,
      summary: data.summaryEn ?? data.summary,
      fields: data.fieldsEn ?? data.fields,
      highlights: data.highlightsEn ?? data.highlights ?? []
    };
  }
  return {
    guest: data.guest,
    affiliation: data.affiliation,
    title: data.title,
    summary: data.summary,
    fields: data.fields,
    highlights: data.highlights ?? []
  };
}
