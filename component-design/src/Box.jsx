import "./Box.css"

export default function Box({isActive, toggle, color = "slateblue"}) {
  // const [isActive, setIsActive] = useState(false);
  // const toggleIsActive = () => {
  //   setIsActive(!isActive);
  // }
  
  return (
    <div onClick={toggle} className="Box" style={{backgroundColor: isActive ? color : "gray"}}>

    </div>
  )
}