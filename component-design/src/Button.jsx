import "./Button.css"

export default function Button ({funk, label}) {
  return <button onClick={funk} className="Button">{label}</button>
}