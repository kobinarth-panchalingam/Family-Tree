import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import FamilyTree from "./components/mytree";
import { Component, useEffect, useLayoutEffect, useState } from "react";
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nodes: [],
//       show: false,
//     };
//   }

//   shouldComponentUpdate() {
//     return true;
//   }

//   componentDidMount() {
//     Axios.get(`${process.env.REACT_APP_API_URL}/api/nodes/getAllNodes`).then((response) => {
//       //       setNodes(response.data);
//       this.setState({ nodes: response.data });
//       this.setState({ show: true });
//       console.log(this.state.nodes);
//     });
//   }

//   render() {
//     return (
//       <div style={{ height: "100%" }}>
//         {this.state.show && (
//           <FamilyTree
//             // nodes={[
//             //   { id: 1, pids: [2], name: "King George VI", img: "https://cdn.balkan.app/shared/f1.png", gender: "male" },
//             //   { id: 2, pids: [1], name: "Queen Elizabeth", title: "The Queen Mother", img: "https://cdn.balkan.app/shared/f2.png", gender: "female" },

//             //   { id: 3, pids: [4], mid: 2, fid: 1, name: "Queen Elizabeth II", img: "https://cdn.balkan.app/shared/f5.png", gender: "female" },
//             //   { id: 4, pids: [3], name: "Prince Philip", title: "Duke of Edinburgh", img: "https://cdn.balkan.app/shared/f3.png", gender: "male" },

//             //   { id: 5, mid: 2, fid: 1, name: "Princess Margaret", img: "https://cdn.balkan.app/shared/f6.png", gender: "male" },

//             //   {
//             //     id: 6,
//             //     mid: 3,
//             //     fid: 4,
//             //     pids: [7, 8],
//             //     name: "Charles",
//             //     title: "Prince of Wales",
//             //     img: "https://cdn.balkan.app/shared/f8.png",
//             //     gender: "male",
//             //   },
//             //   { id: 7, pids: [6], name: "Diana", title: "Princess of Wales", img: "https://cdn.balkan.app/shared/f9.png", gender: "female" },
//             //   { id: 8, pids: [6], name: "Camila", title: "Duchess of Cornwall", img: "https://cdn.balkan.app/shared/f7.png", gender: "female" },

//             //   { id: 9, mid: 3, fid: 4, name: "Anne", title: "Princess Royal", img: "https://cdn.balkan.app/shared/f10.png", gender: "female" },
//             //   { id: 10, mid: 3, fid: 4, name: "Prince Andrew", title: "Duke of York", img: "https://cdn.balkan.app/shared/f11.png", gender: "male" },
//             //   {
//             //     id: 11,
//             //     mid: 3,
//             //     fid: 4,
//             //     name: "Prince Edward",
//             //     title: "Earl of Wessex",
//             //     img: "https://cdn.balkan.app/shared/f12.png",
//             //     gender: "male",
//             //   },

//             //   {
//             //     id: 12,
//             //     fid: 6,
//             //     mid: 7,
//             //     pids: [14],
//             //     name: "Prince William",
//             //     title: "Duch of Cambridge",
//             //     img: "https://cdn.balkan.app/shared/f14.png",
//             //     gender: "male",
//             //   },
//             //   { id: 13, fid: 6, mid: 7, pids: [15], name: "Prince Harry", img: "https://cdn.balkan.app/shared/f15.png", gender: "male" },
//             //   {
//             //     id: 14,
//             //     pids: [12],
//             //     name: "Catherine",
//             //     title: "Duchess of Cambridge",
//             //     img: "https://cdn.balkan.app/shared/f13.png",
//             //     gender: "female",
//             //   },
//             //   { id: 15, pids: [13], name: "Meghan Markle", img: "https://cdn.balkan.app/shared/f16.png", gender: "female" },
//             //   { id: 16, fid: 12, mid: 14, name: "Prince George", img: "https://cdn.balkan.app/shared/f17.png", gender: "male" },
//             //   { id: 17, fid: 12, mid: 14, name: "Prince Charlotte", img: "https://cdn.balkan.app/shared/f18.png", gender: "female" },
//             //   { id: 18, fid: 12, mid: 14, name: "Prince Louis", img: "https://cdn.balkan.app/shared/f19.png", gender: "male" },
//             // ]}
//             nodes={this.state.nodes}
//           />
//         )}
//       </div>
//     );
//   }
// }

function App() {
  const [nodes, setNodes] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/api/nodes/getAllNodes`).then((response) => {
      setNodes(response.data);
      setShow(true);
      console.log(nodes);
    });
  }, []);

  useEffect(() => {
    console.log("nodes1", nodes);
  }, []);
  return (
    <div style={{ height: "100%" }}>
      {show && (
        <FamilyTree
          // nodes={[
          //   { id: 1, pids: [2], name: "Amber McKenzie", gender: "female", image: "https://cdn.balkan.app/shared/2.jpg" },
          //   { id: 2, name: "Ava Field", gender: "male", image: "https://cdn.balkan.app/shared/m30/5.jpg" },
          //   { id: 3, mid: 1, fid: 2, pids: [7], name: "Peter Stevens", gender: "male", image: "https://cdn.balkan.app/shared/m10/2.jpg" },
          //   { id: 4, mid: 1, fid: 2, name: "Savin Stevens", gender: "male", image: "https://cdn.balkan.app/shared/m10/1.jpg" },
          //   { id: 5, mid: 1, fid: 2, name: "Emma Stevens", gender: "female", image: "https://cdn.balkan.app/shared/w10/3.jpg" },
          //   { id: 6, mid: 1, fid: 2, name: "Emma Stevens", gender: "female", image: "https://cdn.balkan.app/shared/w10/3.jpg" },
          //   { id: 7, name: "Emma Julie", pids: [3], gender: "female", image: "https://cdn.balkan.app/shared/w10/3.jpg" },
          //   { id: 8, mid: 7, fid: 3, name: "Emma Stevens", gender: "female", image: "https://cdn.balkan.app/shared/w10/3.jpg" },
          //   { id: 9, mid: 7, fid: 3, name: "Emma Stevens", gender: "female", image: "https://cdn.balkan.app/shared/w10/3.jpg" },
          // ]}
          nodes={nodes}
        />
      )}
    </div>
  );
}

export default App;
