function DayDisplay(day) {
  return (
    <div className="days">
      <ul className="dayLanguage">
        <li>{day[1]}</li>
        <li>{day[2]}</li>
      </ul>
      <div className="dayNumber">{day[0]}</div>
    </div>
  );
}

export default DayDisplay;
