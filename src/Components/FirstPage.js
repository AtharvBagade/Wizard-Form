import React, { useState } from 'react'

export const FirstPage = (props) => {

    const {handleSubmit ,update} = props;

    const [user ,setUser] = useState();
    const [email , setEmail] = useState();



    function validation()
    {
        // eslint-disable-next-line no-useless-escape
        let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        

         if(user === "" || typeof(user) === "undefined")
        {
          alert("Enter a valid username")
        }

        else if(!re.test(email))
        {
          alert("Enter a valid email")
        }
        
        else
        {
                update('user',user);
                update('email',email);
                handleSubmit();      
        }

    }


    return (
        <div className="Page">
             <form className="form1">
             <h1>Welcome!</h1>
             <input type="text" placeholder="Username" id="username" onChange={(e) => setUser(e.target.value)}></input>
             <input type="email" placeholder="Email" id="email" onChange={(e) =>  setEmail(e.target.value)}></input>
 
              <button type="button" className="button" onClick={() =>validation()}>Next</button>
            </form>
        </div>
    )
}
