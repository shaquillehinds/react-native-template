const timeFormat = new Intl.DateTimeFormat(undefined, {
  minute: '2-digit',
  hour: '2-digit',
});

export const formatTime = (date: string | Date) =>
  timeFormat.format(new Date(date));

const dateFormat = new Intl.DateTimeFormat(undefined, {
  hour: '2-digit',
  minute: '2-digit',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

export const formatDate = (date: number | Date) =>
  dateFormat.format(new Date(date));
