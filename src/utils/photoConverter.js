export const photoConverter = (data) => {
  const binary = new Uint8Array(data?.data?.data);
  let str = "";
  for (let i = 0; i < binary.length; i++) {
    str += String.fromCharCode(binary[i]);
  }
  return `data:${data?.contentType};base64,${btoa(str)}`;
};

// export const photoConverter = (data) => {
//   const blob = new Blob([data?.data?.data], { type: data?.contentType });
//   const reader = new FileReader();

//   return new Promise((resolve) => {
//     reader.onload = () => {
//       resolve(reader.result);
//     };
//     reader.readAsDataURL(blob);
//   });
// };
// export const photoConverter = (data) => {
//   return `data:${data?.contentType};base64,${btoa(
//     String.fromCharCode(...new Uint8Array(data?.data?.data))
//   )}
//   `;
// };

// export default PhotoConverter;
