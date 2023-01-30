import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from '@mui/material/Switch';
import React, { useState } from "react";
import { Box, Switch } from "@mui/material";

export default function Tree() {
  const [state, setState] = useState({
    projectName: "Project 01",
    excercises: [
      {
        id: 1,
        noOfTables: 2,
        tables: [
          {
            id: 1,
            row: [
              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },
              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },
              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },
            ],
          },
          {
            id: 2,
            row: [
              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },

              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },

              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },

              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        noOfTables: 3,
        tables: [
          {
            row: [
              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },

              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },

              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },

              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },
            ],
          },
          {
            row: [
              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },

              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },

              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },

              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },
            ],
          },
          {
            row: [
              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },

              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },

              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },

              {
                id: "1-1",
                name: "User Name",
                dataType: "string",
                foreignKey: "",
                isNull: false,
                attributes: ["asdfg", "sdfghj", "ghbn"],
              },
            ],
          },
        ],
      },
    ],
  });

  const [focusDisabledItems, setFocusDisabledItems] = React.useState(false);
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFocusDisabledItems(event.target.checked);
  };

  return (
    // <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
    <>
      <TreeView
        aria-label="disabled items"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        disabledItemsFocusable={focusDisabledItems}
        multiSelect>
        <TreeItem nodeId="1" label={state.projectName}>
          <TreeItem nodeId="1-1" label={"excercises"}>
            {
                state.excercises.map((item:any)=>{
                    console.log(item)
                   return(
                    <>
                     <TreeItem nodeId={"2"} label={item}></TreeItem>
                    </>
                   )
                })
            }

        </TreeItem>            
        </TreeItem>
        {/* <TreeItem nodeId="1" label="One">
          <TreeItem nodeId="2" label="Two" />
          <TreeItem nodeId="3" label="Three" />
          <TreeItem nodeId="4" label="Four" />
        </TreeItem>
        <TreeItem nodeId="5" label="Five">
          <TreeItem nodeId="6" label="Six" />
        </TreeItem>
        <TreeItem nodeId="7" label="Seven">
          <TreeItem nodeId="8" label="Eight" />
          <TreeItem nodeId="9" label="Nine">
            <TreeItem nodeId="10" label="Ten">
              <TreeItem nodeId="11" label="Eleven" />
              <TreeItem nodeId="12" label="Twelve" />
            </TreeItem>
          </TreeItem>
        </TreeItem> */}
      </TreeView>
      {/* </Box> */}
    </>
  );
}
