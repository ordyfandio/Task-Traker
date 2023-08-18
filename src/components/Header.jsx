import PropTypes from 'prop-types'
import '../style.css'
// import Button from './Button' 

const Header = ({ onAdd}) => {
  
    // const [show,setShow]=useState(false);

    // const handleclick=()=>{
      
    // }

  return (
    <>
    {/* {console.log(show)} */}
        <header className='header'>
            <h1>Task Traker</h1>
            {/* <Button color="green" text="Add" show={onAdd}/> */}
           <button onClick={() => onAdd()} className='btn' style={styleAdd}>Add</button>

        </header>
    </>
  )
}

Header.defaultProps={
    title:"Task Traker",
}

Header.prototypes={
    title:PropTypes.string.isRequired
}
// css in JS
const styleAdd={
  backgroundColor:"green",
}
export default Header