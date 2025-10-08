export function toDirectDriveLink(url: string): string {
  // Only run for Google Drive URLs
  if (!url.includes("drive.google.com")) return url;
  const match = url.match(/[-\w]{25,}/); // file ID is always 25+ chars

  return match
    ? `https://drive.google.com/thumbnail?id=${match[0]}&sz=w1920`
    : url;
}
