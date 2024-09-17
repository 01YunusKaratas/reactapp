import React from 'react'

function user(props) {
    console.log(props);
  return (
    <div>
        User
        <div>isim :{props.name}</div>
        <div>soyisim :{props.surname}</div>
        <div>yaş :{props.age}</div>
        <hr/>
        
    </div>
  )
}

export default user
