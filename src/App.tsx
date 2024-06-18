import ListGroup from "./components/ListGroup";

function App2(){
  let items = ['New York', 'San Francisco', 'Tokyo', 'Paris'];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading='Cities' onSelectItem={handleSelectedItem}/>
    </div>
  );
}




import Alert from "./components/Alert";
function App3(){
  return (
    <div>
      <Alert>
        Hello <span>World!!!</span>
      </Alert>
    </div>
  );
}



import Button from "./components/Button";
import { useState } from "react";
function App(){

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>

      {alertVisible && <Alert  onClose={()=> setAlertVisibility(false)}>My Alert</Alert>}

      <Button onClick={() => setAlertVisibility(true)} color='danger'>
        button text
      </Button>
    </div>
  );
}


export default App;