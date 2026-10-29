interface OrderedEntry {
  data: { order: number };
}

export function sortByOrder<Entry extends OrderedEntry>(entries: Entry[]) {
  return entries.toSorted((a, b) => a.data.order - b.data.order);
}
