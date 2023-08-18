import PropTypes from 'prop-types'
// import { useState } from 'react'

const Button = ({color,text, show }) => {
//   const [showNew, setShowNew] = useState(show);

//  const onclick=() =>{
//   setShowNew(!show);
//     }

  return (
    <>
    {/* {console.log(show)} */}
    <button onClick={() => show()} className='btn' style={{backgroundColor:color}}>{text}</button>
 </> )
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