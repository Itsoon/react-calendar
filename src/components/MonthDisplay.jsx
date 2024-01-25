function MonthDisplay(months) {
  return (
    <div className="months">
      <div>
        <span>{months[0]}</span>
        <img
          src="https://www.svgrepo.com/show/35641/dot.svg"
          alt=""
          width="14"
          className="dotsvg"
        />
        <span>{months[1]}</span>
      </div>
    </div>
  );
}
export default MonthDisplay;
