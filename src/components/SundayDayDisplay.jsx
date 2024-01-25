function SundayDayDisplay(day) {
  return (
    <div className="days Sunday">
      <ul className="dayLanguage">
        <li>{day[1]}</li>
        <li>{day[2]}</li>
      </ul>
      <div className="dayNumber">{day[0]}</div>
    </div>
  );
}

export default SundayDayDisplay;
