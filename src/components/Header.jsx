import PropTypes from 'prop-types'
import '../style.css'
import Button from './Button'


const Header = ({title, onAdd}) => {
  
   
  return (
    <>
        <header className='header'>
            <h1>{title}</h1>
            <Button color="green" text="Add" onClick={onAdd} id='form'/>
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
// const styleheader={
//     color:"red",
//     backgroundColor:"Blue"
// }
export default Header