const defaultState = () => {
  const currentDate = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "ec"
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return {
    date: currentDate,
    currentHour: currentDate.getHours(),
    currentMonth: months[currentDate.getMonth()],
    currentDate: currentDate.getDate(),
    currentDay: days[currentDate.getDay()],
    currentYear: currentDate.getFullYear()
  };
};
export default (state = defaultState(), action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
