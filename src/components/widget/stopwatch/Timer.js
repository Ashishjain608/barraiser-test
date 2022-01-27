const Timer = (props) => {
  const totalSecs = props.time;

  const hours = Math.floor(totalSecs / 3600);

  const mins = Math.floor((totalSecs % 3600) / 60);
  const secs = Math.floor((totalSecs % 3600) % 60);

  return (
    <div className="timer">
      <span>{("0" + hours).slice(-2)}:</span>
      <span>{("0" + mins).slice(-2)}:</span>
      <span>{("0" + secs).slice(-2)}</span>
    </div>
  );
};

export default Timer;
