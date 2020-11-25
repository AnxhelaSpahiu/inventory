
import React, { Component, useState } from "react";
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

const AddNew = (props) => {
  const [nameInput, setNameInput] = useState("")
  const [category, setCategory] = useState("")
  const [managerPick, setManagerPick] = useState("")
  

  const [listOfCategories, setListOfCategories] = useState(["Shoring", "Scatffold", "Constructing"])
  
  const[categoryEntered, setCategoryEntered] = useState("")
    

    const handleChangeName = (e) =>{
        setNameInput(e.target.value)
        
    }
    const handleClickSave = (props)=>{
        props.sendInput(nameInput,category, managerPick)
    }
    const handleChangeCategory = (e) =>{
        setCategory(e.target.value)
    }
    
    /*React.useEffect(() => {
      const results = listOfCategories.filter(cat =>
        cat===category
      );
      setCategoryEntered(results);
    }, [category]);*/
  
    const showCategories =()=> {
      const  categorySelected = listOfCategories.filter(element=>element === category )
      setCategoryEntered(categorySelected)
    }

    const handleDropDown = (e) =>{
        setManagerPick(e.target.value)
    }
return(
        <div>
      <p>Add New JobSite</p>

      <label>Name</label>
      <input value={nameInput} onChange={handleChangeName}/>
      <label>Category</label>
      <input value={category} onChange={handleChangeCategory} onKeyPress={showCategories} />
      <div> {categoryEntered}</div>
      {/* <ul>
     {categoryEntered.map(item => (
          <li>{item}</li>
     ))}
  </ul> */}
      <label>PM</label>
      <select
            value={managerPick}
            onChange={handleDropDown}
          >
            <option value="mike">Mike</option>
            <option value="tom">Tom</option>
            <option value="anxhi">Anxhi</option>
            <option value="robert">Robert</option>
          </select>
        
          
          <Link to="/home">
      <button onClick={handleClickSave}> Save</button></Link>
      </div>
    )
  }

  export default AddNew;