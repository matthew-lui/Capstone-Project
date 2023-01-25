

import React, {useState} from 'react'

function CuisineCheckBox({data, type, onChangeCuisine}) {
const [checked, setChecked] = useState(false)

function handleChecked(){
if(checked){
    if(type === "cuisine"){
        onChangeCuisine("remove", data)
    }

    
}else{
    if(type === "cuisine"){
        onChangeCuisine("add", data)
    }
}
    setChecked(!checked)
}
  return (
    <div className="individual">
      <label>{data}
      <input type="checkbox" name={data} checked={checked} onChange={handleChecked} ></input>
      </label>
    </div>
  )
}

export default CuisineCheckBox