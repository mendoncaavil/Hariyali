import React from 'react'


const styles = {
  fontSize: "1.5rem",
  backgroundColor: "#0F4C36",
  color: "#FFFFF9",
  padding: '0.5rem',
  textTransform: "capitalize",
  textAlign: "center",
  margin: "0 auto"

}

function Alert(props) {
  return (
    <div style={styles}>
       {props.alert}
    </div>
  )
}

export default Alert