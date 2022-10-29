export function modelingDataPresenter(serializedFormData: number[] | null) {
  if (!serializedFormData) {
    return [];
  }

  return serializedFormData.map((d) => [d]);
}
