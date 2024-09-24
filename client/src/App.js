import "./App.css";
import Axios from "axios";
import FamilyTree from "./components/mytree";
import { useEffect, useState } from "react";

function App() {
  const [nodes, setNodes] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/api/nodes`).then((response) => {
      setNodes(response.data);
      setShow(true);
    });
  }, []);

  return <div style={{ height: "100vh" }}>
    {show && 
      <FamilyTree 
        nodes={nodes} 
      />
    }
  </div>;
}

export default App;
