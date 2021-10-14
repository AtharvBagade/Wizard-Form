import React from 'react'

export const FourthPage = (props) => {

     const {data} = props;

    return (
        <div className="Page">
        <div className="Details">
        Details Entered
        <ul>
        <li>Username:{data.user}</li>
        <li>Email:{data.email}</li>
        <li>Favorite color:{data.colour}</li>
        <li>Favorite food:{data.food}</li>
        <li>Birthdate:{data.birthday}</li>
        <li>Watched Harry Potter:{data.hp}</li>
            </ul>
        </div>
        </div>
    )
}
