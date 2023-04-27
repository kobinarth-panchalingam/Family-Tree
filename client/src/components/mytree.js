import React, { Component } from "react";
import FamilyTree from "@balkangraph/familytree.js";
import "../styles/mytree.css";
FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.base);

FamilyTree.templates.myTemplate.link =
  '<path stroke="#a59b9b" stroke-width="1px" fill="none" data-l-id="[{id}][{child-id}]" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}" />';

FamilyTree.templates.myTemplate.defs = `<style>
                                        .{randId} .bft-edit-form-header, .{randId} .bft-img-button{
                                            background-color: #aeaeae;
                                        }
                                        .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{
                                            background-color: #039BE5;
                                        }        
                                        .{randId}.male div.bft-img-button:hover{
                                            background-color: #F57C00;
                                        }
                                        .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{
                                            background-color: #F57C00;
                                        }        
                                        .{randId}.female div.bft-img-button:hover{
                                            background-color: #039BE5;
                                        }
                                    </style>
                                    <clipPath id="myTemplate_img_0"><rect x="6" y="6" rx="54" ry="54" width="108" height="108"></rect></clipPath>
                                    ${FamilyTree.gradientCircleForDefs("circle", "#aeaeae", 60, 5)}
                                    ${FamilyTree.gradientCircleForDefs("male_circle", "#039BE5", 60, 5)}
                                    ${FamilyTree.gradientCircleForDefs("female_circle", "#F57C00", 60, 5)}`;
FamilyTree.templates.myTemplate.field_0 =
  "<text " +
  FamilyTree.attr.width +
  ' ="100" style="font-size: 12px;font-weight:bold;" data-text-overflow="multiline-2-ellipsis" fill="#234943" x="60" y="135" text-anchor="middle">{val}</text>';
// FamilyTree.templates.myTemplate.field_1 =
//   "<text " + FamilyTree.attr.width + ' ="150" style="font-size: 13px;" fill="#aeaeae" x="60" y="150" text-anchor="middle">{val}</text>';
FamilyTree.templates.myTemplate.node = '<use x="0" y="0" xlink:href="#circle" />';
FamilyTree.templates.myTemplate.img_0 =
  '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#myTemplate_img_0)" xlink:href="{val}" x="6" y="6" width="108" height="108"></image>';
FamilyTree.templates.myTemplate.ripple = {
  radius: 60,
  color: "#e6e6e6",
  rect: null,
};

FamilyTree.templates.myTemplate.size = [120, 120];
FamilyTree.templates.myTemplate_male = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_male.node += '<use x="0" y="0" xlink:href="#male_circle" />';
FamilyTree.templates.myTemplate_male.ripple = {
  radius: 60,
  color: "#039BE5",
  rect: null,
};
FamilyTree.templates.myTemplate_female = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_female.node += '<use x="0" y="0" xlink:href="#female_circle" />';
FamilyTree.templates.myTemplate_female.ripple = {
  radius: 60,
  color: "#F57C00",
  rect: null,
};
// FamilyTree.SEARCH_PLACEHOLDER = "Chercher"; // the default value is "Search"
FamilyTree.templates.filtered = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.filtered.node =
  '<circle x="0" y="0" height="{h}" width="{w}"stroke-width="10" fill="#aeaeae" stroke="#aeaeae" rx="7" ry="7"></circle>';
// FamilyTree.templates.tommy.nodeCircleMenuButton =
//   FamilyTree.templates.tommy_female.nodeCircleMenuButton =
//   FamilyTree.templates.tommy_male.nodeCircleMenuButton =
//     {
//       radius: 25,
//       x: 230,
//       y: 60,
//       color: "#fff",
//       stroke: "#aeaeae",
//     };

export default class Chart extends Component {
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
      // nodeTreeMenu: true,
      template: "myTemplate",
      nodeBinding: {
        field_0: "name",
        img_0: "img",
      },
    });
    var family = this.family;
    family.nodeCircleMenuUI.on("show", function (sender, args) {
      var node = family.getNode(args.nodeId);
      delete args.menu.father;
      delete args.menu.mother;
      delete args.menu.wife;
      delete args.menu.husband;
      if (FamilyTree.isNEU(node.mid)) {
        args.menu.mother = {
          icon: FamilyTree.icon.mother(30, 30, "#F57C00"),
          text: "Add mother",
          color: "white",
        };
      }
      if (FamilyTree.isNEU(node.fid)) {
        args.menu.father = {
          icon: FamilyTree.icon.father(30, 30, "#039BE5"),
          text: "Add father",
          color: "white",
        };
      }
      if (node.gender == "male") {
        args.menu.wife = {
          icon: FamilyTree.icon.wife(30, 30, "#F57C00"),
          text: "Add wife",
          color: "white",
        };
      } else if (node.gender == "female") {
        args.menu.husband = {
          icon: FamilyTree.icon.husband(30, 30, "#F57C00"),
          text: "Add husband",
          color: "white",
        };
      } else {
        args.menu.wife = {
          icon: FamilyTree.icon.wife(30, 30, "#F57C00"),
          text: "Add wife",
          color: "white",
        };
        args.menu.husband = {
          icon: FamilyTree.icon.husband(30, 30, "#039BE5"),
          text: "Add husband",
          color: "white",
        };
      }
    });

    family.nodeCircleMenuUI.on("click", function (sender, args) {
      var node = family.getNode(args.nodeId);

      switch (args.menuItemName) {
        case "husband":
          family.addPartnerNode({ gender: "male", pids: [args.nodeId] });
          break;
        case "wife":
          family.addPartnerNode({ gender: "female", pids: [args.nodeId] });
          break;
        case "pet":
          family.addPartnerNode({ gender: "pet", pids: [args.nodeId] });
          break;
        case "mother":
          var data = { gender: "female" };
          if (!FamilyTree.isNEU(node.fid)) {
            data.pids = [node.fid];
          }
          family.addParentNode(args.nodeId, "mid", data);
          break;
        case "father":
          var data = { gender: "male" };
          if (!FamilyTree.isNEU(node.mid)) {
            data.pids = [node.mid];
          }
          family.addParentNode(args.nodeId, "fid", data);
          break;
        case "PDFProfile":
          family.exportPDFProfile({
            id: args.nodeId,
          });
          break;
        case "editNode":
          family.editUI.show(args.nodeId);
          break;
        default:
      }
    });

    family.nodeCircleMenuUI.on("drop", function (sender, args) {
      family.addClink(args.from, args.to).draw(FamilyTree.action.update);
    });

    family.nodeCircleMenuUI.on("mouseenter", function (sender, args) {
      if (args.menuItem.text == "Remove node") {
        var node = document.querySelector('[data-n-id="' + args.from + '"]');
        node.style.opacity = 0.5;
      }
    });

    family.nodeCircleMenuUI.on("mouseout", function (sender, args) {
      var node = document.querySelector('[data-n-id="' + args.from + '"]');
      node.style.opacity = 1;
    });
  }

  render() {
    return <div id="tree" ref={this.divRef}></div>;
  }
}
