export function formatDate(date: Date): string {
  return `${new Date(date).toLocaleDateString()} ${new Date(
    date,
  ).toLocaleTimeString()}`;
}
