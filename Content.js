import React from 'react'

const Content = () => {
    function handleNameChange(){
        const names =["earn" , "grow" , "give"];
        const int=Math.floor(Math.random()*3);
        return names[int]
      }
    

  return (
    <p> Lets {handleNameChange()} Money</p>
  )
}

export default Content