import "./Die.css";

export default function Die({num, color="cadetblue"}) {
  return (
    <div className="Die" style={{backgroundColor: color}}>
      {num}
    </div>
  );
}