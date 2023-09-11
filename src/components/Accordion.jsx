import React, {useState} from 'react'

const Accordion = ({title, content}) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
    <div className="p-4">
      <div className="flex justify-between" onClick={() => setIsActive(!isActive)}>
        <div className="text-lg py-2">{title}</div>
        <div className="cursor-pointer text-xl">{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="text-sm py-2 text-gray-500">{content}</div>}
      <hr />
    </div>    
    </>
  )
}

export default Accordion