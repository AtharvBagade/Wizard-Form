
import './App.css';
import { FirstPage } from './Components/FirstPage';
import { SecondPage} from './Components/SecondPage';
import {ThirdPage} from './Components/ThirdPage';
import { useState } from 'react';
import { FourthPage } from './Components/FourthPage';

function App() {

 const [currentPage , SetCurrent] = useState(1);

 const [data,SetData]=useState({

      user:"",
      email:"",
      colour:"",
      food:"",
      birthday:"",
      hp:""
   
 })

  function Update(type , NewData)
  {
       SetData(data =>{
         return { ...data ,[type]:NewData};
       });
  };


  return (
    <div className="App">
    {
      currentPage === 1 && <FirstPage handleSubmit={() =>{SetCurrent(currentPage+1)}} update={Update} />
    }

    {
      currentPage === 2 && <SecondPage handleSubmit={() =>{SetCurrent(currentPage+1)}}  prev={() =>{SetCurrent(currentPage-1)}} update={Update} />
    }

    {
      currentPage === 3 && <ThirdPage handleSubmit={() =>{SetCurrent(currentPage+1)}} prev={() =>{SetCurrent(currentPage-1)}} update={Update} />
    }

    {
      currentPage === 4 && <FourthPage data={data} />
    }
    </div>
  );
}

export default App;
