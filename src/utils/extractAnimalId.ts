export const extractAnimalId = (text: string): string | null => {
  if (!text) return null;

  // Match #AN-123 or #123456
  const match = text.match(/#([A-Z0-9-]{3,30})/i);

  if (!match) return null;

  return match[1].toUpperCase(); // remove #
};

export const extractHashValue = (text: string): string | null => {
  if (!text || typeof text !== "string") return null;

  const match = text.match(/#([^\s]+)/);
  if (!match) return null;

  return match[1].replace(/[^\w-]/g, ""); // remove trailing junk like .,!? 
};