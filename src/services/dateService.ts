import { format } from 'date-fns';

export const formatDate = (date: string): string => {
  if (!date) {
    return null;
  }
  return format(new Date(date), 'MMM yyyy');
};
