export const photoConverter = (data) => {
  return `
    data:${data?.contentType};base64,${btoa(
    String.fromCharCode(...new Uint8Array(data?.data?.data))
  )}
    `;
};
