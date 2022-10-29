export function serializeForm(formSelector: string): number[] | null {
  const form = document.querySelector(formSelector) as HTMLFormElement;

  if (!form) {
    return null;
  }

  return Array.from(new FormData(form).values()).map((d) => Number(d));
}
