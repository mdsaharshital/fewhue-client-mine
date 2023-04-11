function FormatDate(dateString) {
  const date = new Date(dateString);

  let hour = date.getHours();
  let amPm = "AM";
  if (hour > 12) {
    hour -= 12;
    amPm = "PM";
  }

  const minutes = date.getMinutes();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return {
    time: `${hour}:${minutes} ${amPm}`,
    date: `${day}/${month}/${year}`,
  };
}
export default FormatDate;
