// export default function validatedateFormat(date) {

//   const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   return regex.test(date);
// }

export default function validateRequiredInput(...args) {
  let isBlank = false;
  for (let i = 0; i < args.length; i = (i + 1) | 0) {
    if (args[i] === "") {
      isBlank = true;
    }
  }
  return isBlank;
}