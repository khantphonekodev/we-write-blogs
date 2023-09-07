import { formatDistanceToNow } from "date-fns";

export function formatTimestampRelativeToNow(timestamp) {
  const date = new Date(timestamp);

  return formatDistanceToNow(date, { addSuffix: true });
}
