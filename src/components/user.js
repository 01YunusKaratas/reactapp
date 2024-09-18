import React from 'react'
import PropTypes from 'prop-types';


//tek fark props yazıyoruz functiona daha yani this gibi aslında
/*function user({data :{name,surname,age}}) {//ES6 sayesinde objenin variableslarını daha iyi ayırmaya ve okunabirliği artırmayı sağlıyor.
  return (
    <div>
        User
        <div>isim :{name}</div>
        <div>soyisim :{surname}</div>
        <div>yaş :{age}</div>
        <hr/>
        
    </div>
  )
}*/

function user({data,title}) {//ES6 sayesinde objenin variableslarını daha iyi ayırmaya ve okunabirliği artırmayı sağlıyor.
  return (
    <div>
        <strong><i>{title}</i></strong>
        <div>isim :{data.name}</div>
        <div>soyisim :{data.surname}</div>
        <div>yaş :{data.age}</div>
        <hr/>

        <h3>Friends</h3>
        {
          
        }

        
    </div>
  )

}

user.prototypes={

  title:PropTypes.string,
  data :PropTypes.exact({
    name:PropTypes.string.isRequired,
    surname:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
  }).isRequired
}

user.defaultProps={
  title:"PERSON",
}

export default user
