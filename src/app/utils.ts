import countryEmoji from 'country-emoji';
import { Candidate } from './models/candidate.model';

export const getFlag = (country: Candidate['location']['country']) => {
  if (country === 'Russia' || country === 'Belarus') {
    return '🚩';
  }
  return countryEmoji.flag(country) || '🏳️';
};
