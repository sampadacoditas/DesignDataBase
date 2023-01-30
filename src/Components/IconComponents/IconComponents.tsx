import React, { useContext } from "react";
import styles from "./IconComponents.module.scss"
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import TableViewIcon from "@mui/icons-material/TableView";
import { HomeContext } from "../../Pages/UserPage/Home/Home";
import { dataGenerator } from "../../MockData/MockData";
import { AiFillFolderOpen } from "react-icons/ai";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import http from "../../Services/Services";
import TableComponent from "../TableComponent/TableComponent";
export const IconComponents = (Element: any) => {
  // console.log(Element.Element.id)
  // console.log(Element.Element.projectName)
  // console.log("Element")
  // let resp=Object.keys(Element.Element)
  // console.log(first)
  const { state, setState,setStoreArray,storeArray } = useContext(HomeContext);
  const handleClick = async(event: any, type: any,Element:any,id?:any) => {
    const newStack=Element
    let resp=[]
    // let resp
    console.log(id)
    if (event.detail === 2) {
      if(type==="Project")
      {
        console.log("reg")
         resp=await http.get(`exercises/${id}`);
        //  setStoreArray({...storeArray,resp})
        setStoreArray([...storeArray,{type:"Project",data:resp}])
        // console.log(resp)
      }
      else if(type==="Excercise")
      {
         resp=await http.get(`tables/exercise-tables/${id}`);
        // console.log(resp)
        setStoreArray([...storeArray,{type:"Excercise",data:resp}])
        // setStoreArray({...storeArray,resp})
      }
      else if(type==="Table")
      {
        // resp=await http.get(`tables/exercise-tables/${id}`);
        // console.log(resp)
        // resp=[]
        // setState({...state,isTable:true})
        setStoreArray([...storeArray,{type:"Table",data:[]}])
      }
      console.log(state)
      state.stack.push(newStack)
    setState({...state,data:resp})
    }
  };
  console.log(state)
  return (
    <div className="project">
      {
      // Element.Element.type === "Project"
      Element.Element.projectName
      // resp.find((value)=>value==="projectName")
      ? (
        <div className={styles.project}>
            <img src="https://cdn-icons-png.flaticon.com/128/716/716784.png" alt="" onClick={(event: any) => handleClick(event, "Project",Element.Element,Element.Element.id)}
            className={`project ${styles.icons}`}
            id={Element.Element.id}
            />
            {/* <ContextMenu/> */}
          <span>{Element.Element.projectName}</span>
        </div>
      ) : 
      // Element.Element.type === "Excercise" 
      Element.Element.exerciseName
      // resp.find((value)=>value==="exerciseName")
      ? (
        <span className={styles.details}>
            <img src="https://cdn-icons-png.flaticon.com/512/9100/9100558.png" alt=""  
            onClick={(event) => handleClick(event, "Excercise",Element.Element,Element.Element.id)}
            className={`project ${styles.icons}`}
            id={Element.Element.id}/>
           {/* <ContextMenu/> */}
          <span>{Element.Element.exerciseName}</span>
        </span>
      ) : 
      // Element.Element.type === "Table"
      Element.Element.tableName
       ?(
        <span className={styles.details}>
          <img src="https://cdn-icons-png.flaticon.com/128/4598/4598376.png" alt="" 
          onClick={(event) => handleClick(event,"Table",Element.Element,Element.Element.id)}
          className={`project ${styles.icons}`}
          id={Element.Element.id}/>
          {/* <ContextMenu/> */}
           {/* <TableViewIcon  onClick={(event) => handleClick(event, "Table",Element.Element)} className={styles.icons} /> */}
          <span>{Element.Element.tableName}</span>
        </span>
      ): state.type==="Table" ?
      (
      <span className={styles.details}>
      {/* <span>{Element.Element.name}</span> */}
      <TableComponent/>
      {/* <span>{Element.name}</span> */}
    </span>
      ):<></>
    }
    </div>
  );
};
