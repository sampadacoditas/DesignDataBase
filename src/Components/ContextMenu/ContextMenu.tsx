import { Action } from "@remix-run/router";
import React, { useCallback, useContext, useEffect, useReducer, useState } from "react";
import { HomeContext } from "../../Pages/UserPage/Home/Home";
import { Add } from "../PopUp/Add";
import styles from "./ContextMenu.module.scss";
import {Rename} from "../PopUp/Rename"
export const ContextMenu = () => {
  const { state} = useContext(HomeContext);
 const reducer=(maintainState:any,action:{type:any,payload:any})=>{
  switch(action.type)
  {
    case "setPopUp":
      return {...maintainState,isIconShow:true,type:action.payload}
    default:
      return maintainState;
  }
 }
  const [maintainState, dispatch] = useReducer<any>(reducer,state);
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [onclick,handleOnClick]=useState(false)
  const [type,handleType]=useState("")
 
  const handlePopUp=(onclick:any,type:any)=>{
    console.log(type)
    console.log("d")
     // @ts-ignore
    // maintainState.type==="create" && onclick ?  <Add/>:<Rename/>
    handleOnClick(onclick) 
    handleType(type)
  }
  const handleContextMenu = useCallback(
    (event: any) => {
      event.preventDefault();
      var clickedElement = event.target;
     console.log(clickedElement.classList.contains("project"))
      if(clickedElement.classList.contains("project"))
      {
        console.log("rfh")
        // setState({...state,isIconShow:true})
        setShow(true);
        // @ts-ignore
        dispatch({type:"setPopUp",payload:"rename"})
        setAnchorPoint({ x: event.pageX, y: event.pageY });
      }
      else
      {
        console.log("rfh")
        // setState({...state,isIconShow:true})
        setShow(true);
        // @ts-ignore
        dispatch({type:"setPopUp",payload:"create"})
        setAnchorPoint({ x: event.pageX, y: event.pageY });
      }
    },
    [setAnchorPoint, setShow]
  );
  console.log(state)

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);
  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });
  console.log(anchorPoint);
  console.log(show);
  console.log(maintainState)
  console.log(onclick)
  return (
    <> 
      {
        
         // @ts-ignore
      maintainState.isIconShow && maintainState.type==="rename"?(
        <ul
          className={styles["menu"]}
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x,
          }}
        >
          <li onClick={()=>handlePopUp(true,"rename")}>Rename</li>
          <li>Delete</li>
          <li>Import</li>
          {/* <hr className={styles["divider"]} />
          <li>Refresh</li>
          <li>Exit</li> */}
        </ul>
      ) : 
      // @ts-ignore
      maintainState.isIconShow && maintainState.type==="create" && state.data.type==="Global" ? (
        <ul
          className={styles["menu"]}
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x,
          }}
        >
          <li onClick={()=>handlePopUp(true,"Excerise")}>Add Excerise</li>
          <li onClick={()=>handlePopUp(true,"Project")}>Add Project</li>
          <hr className={styles["divider"]} />
          <li>Refresh</li>
          <li>Exit</li>
        </ul>
    
      ) : 
      // @ts-ignore
      state.data.type === "Project" &&  maintainState.isIconShow && maintainState.type==="create" ? (
        <ul
          className={styles["menu"]}
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x,
          }}
        >
          <li onClick={()=>handlePopUp(true,"Excerise")}>Add Excerise</li>
          <li>Delete</li>
          <li>Import</li>
          {/* <hr className={styles["divider"]} />
          <li>Refresh</li>
          <li>Exit</li> */}
        </ul>
      ) : 
      //  @ts-ignore
      state.data.type === "Excercise" &&  maintainState.isIconShow && maintainState.type==="create" ?
      (
        <ul
          className={styles["menu"]}
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x,
          }}
        >
          <li onClick={()=>handlePopUp(true,"Table")}>Add table</li>
          <li>Delete</li>
          <li>Import</li>
          {/* <hr className={styles["divider"]} /> */}
          {/* <li>Refresh</li>
          <li>Exit</li> */}
        </ul>
      ):<></>
    }

    {
      // onclick &&  
      // @ts-ignore
      maintainState.type==="create" && onclick  ?  
      <Add onclick={onclick} handleOnClick={handleOnClick} title={type}/>:
       // @ts-ignore
      maintainState.type==="rename" && onclick ?
      <Rename onclick={onclick} handleOnClick={handleOnClick} title={type}/>:<></>
   
    }
    </>
    
  );
};
