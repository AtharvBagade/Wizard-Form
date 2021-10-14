import React, { useState } from 'react'

export const SecondPage = (props) => {

    const{handleSubmit ,prev ,update} = props;

    const [colour , setColour]= useState("Red");
    const [food , setFood]= useState();

    function validation()
    {
         
         if(food === "" || typeof(food) === "undefined")
        {
            alert("Enter valid info");
        }

        else
        {
            update('colour',colour);
            update('food',food);
            handleSubmit();
        }

    }


    return (
        <div className="Page">
            <form className="form2" onSubmit={() =>{validation()}}>
             <h1>Step 2</h1>
             <label htmlFor="colour">Which is your favorite colour</label>
             <select id="colour" onChange={(e) => setColour(e.target.value)} >
                 <option value="Red">Red</option>
                 <option value="Blue">Blue</option>
                 <option value="Green">Green</option>
                 <option value="Orange">Orange</option>
             </select>

             <input type="text" placeholder="Favorite Food" id="email" onChange={(e) => setFood(e.target.value)}></input>

             <div className="buttons">
             <button type="button" className="button" onClick={prev}>prev</button>   
              <button type="submit" className="button">Next</button>
             </div>

            </form>
        </div>
    )
}
