export function cn(...inputs: Array<string | undefined | false | null | Record<string, boolean>>): string {
  return inputs
    .flatMap((input) => {
      if (typeof input === 'string') return input;
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([, value]) => value)
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(' ');
}
