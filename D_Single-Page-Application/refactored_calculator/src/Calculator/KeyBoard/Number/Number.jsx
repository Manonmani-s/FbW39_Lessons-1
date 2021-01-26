
import './Number.css'

const Number = ({seq, getValue}) =>  <input type="text" className={seq}
onChange = {e =>  getValue(e.target.value, seq)} />

export default Number
