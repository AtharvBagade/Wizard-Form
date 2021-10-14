import React, { useState } from 'react'

export const ThirdPage = (props) => {

    const {handleSubmit ,prev ,update} = props;

    const [date ,setDate] = useState();
    const [answer , setAnswer] = useState();

    function validation()
    {
        if(date === "" || typeof(date) === "undefined")
        {
            alert("Enter a valid date");
        }

        else
        {
            update('birthday',date);
            update('hp',answer);
            handleSubmit();
        }
    }

    return (
        <div className="Page">

             <h1>Step 3</h1>
             <form onSubmit={() => validation()} className="form3">
             <label htmlFor="birthday">Enter your Date of birth:</label>
             <input type="date" id="birthday" name="birthday" onChange={(e) =>setDate(e.target.value)} />

             <label htmlFor="Qs">Have you watched Harry Potter?</label>

             <select id="Qs" name="Qs" onChange={(e) => setAnswer(e.target.value)}>
                 <option value="Yes">Yes</option>
                 <option value="No">No</option>
                 <option value="Maybe">Maybe</option>
             </select>
             

              <div className="buttons">
             <button type="button" className="button" onClick={prev}>prev</button>
              
              <button type="submit" className="button">Submit</button>
              </div>
             </form>
        </div>
    )
}
