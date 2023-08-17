import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
    
    // const onclick=() =>{
    //      console.log("click") 
    // }

  return (
    <button onClick={onclick} className='btn' style={{backgroundColor:color}}>{text}</button>
  )
}

Button.defaultProps={
    color:'steelblue'
}

Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}

export default Button