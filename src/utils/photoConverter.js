export const photoConverter = (data) => {
  const binary = new Uint8Array(data?.data?.data);
  let str = "";
  for (let i = 0; i < binary.length; i++) {
    str += String.fromCharCode(binary[i]);
  }
  const img = `data:${data?.contentType};base64,${btoa(str)}`;
  return img;
};
