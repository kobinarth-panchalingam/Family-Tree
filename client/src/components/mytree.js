import React, { Component } from "react";
import FamilyTree from './familyTreeConfig';

export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.family = new FamilyTree(this.divRef.current, {
      nodeCircleMenu: {
        PDFProfile: {
          icon: FamilyTree.icon.pdf(30, 30, "#aeaeae"),
          text: "PDF Profile",
          color: "white",
        },

        editNode: {
          icon: FamilyTree.icon.edit(30, 30, "#aeaeae"),
          text: "Edit node",
          color: "white",
        },
        addClink: {
          icon: FamilyTree.icon.link(30, 30, "#aeaeae"),
          text: "Add C link",
          color: "#fff",
          draggable: true,
        },
        pet: {
          icon: FamilyTree.icon.teddy(30, 30, "#aeaeae"),
          text: "Add pet",
          color: "white",
        },
      },
      // nodeTreeMenu: {
      //   details: { text: "Details" },
      //   edit: { text: "Edit" },
      //   add: { text: "Add" },
      //   remove: { text: "Remove" },
      // },
      // nodeMouseClick: FamilyTree.action.expandCollapse,
      // state: {
      //   name: "StateForMyTree",
      //   readFromLocalStorage: true,
      //   writeToLocalStorage: true,
      // },
      minPartnerSeparation: 60,
      lazyLoading: true,
      // mode: "dark",
      // partnerNodeSeparation: 50,
      sticky: true,
      siblingSeparation: 60,
      nodes: this.props.nodes,
      // filterBy: ["gender", "Date of Birth"],
      // tags: {
      //   filter: {
      //     template: "filtered",
      //   },
      // },
      scaleInitial: FamilyTree.match.boundary,
      mouseScrool: FamilyTree.action.zoom,
      editForm: { readOnly: true },
      // miniMap: true,
      menu: {
        pdf: { text: "Export PDF" },
        png: { text: "Export PNG" },
        svg: { text: "Export SVG" },
        csv: { text: "Export CSV" },
        json: { text: "Export JSON" },
      },
      toolbar: {
        zoom: true,
        fit: true,
        fullScreen: true,
      },
    //   nodeTreeMenu: true,
      template: "myTemplate",
      nodeBinding: {
        field_0: "name",
        img_0: "img",
      },
    });
  }

  render() {
    return <div id="tree" ref={this.divRef}></div>;
  }
}
