export function getCurrentDate(term, timezone) {
  const date = new Date();

  // Gets date in the format: 'Wednesday, 30 March 2022'
  if (term === "date") {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      dateStyle: "full",
    }).format(date);
  }

  // Gets time in the format '17:39h'
  if (term === "time") {
    const time = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      timeStyle: "short",
    }).format(date);
    return `Local time: ${time}h`;
  }
}
