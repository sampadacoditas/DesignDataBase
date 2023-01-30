// import { Button } from '@mui/material'
// import React, { createContext, useEffect, useMemo, useState } from 'react'
// import { Header } from '../../Components/Headers/Header'
// import { Modal } from '../../Components/Modal/Modal'
// import SideBar from '../../Components/SideBar/SideBar'
// import { SimpleDBService } from '../../Services/simple-db-service'
// import Tree from './TreeView/TreeView'
// import styles from "./Home.module.scss"
// import { ProjectPage } from './ProjectPage/ProjectPage'
// import { Link, Outlet } from 'react-router-dom'
// export const Context = createContext<any>({});
// export const Home = () => {
//     const [folderName, setFolderName] = useState("");
//     const [ProjectNameArray, setProjectNameArray] = useState();
//     const driveService = useMemo(() => new SimpleDBService(), []);
//     const getFolders = async () => {
//         const result:any = await driveService.getAllFolders();
//         console.log(result);
//         setFolderName(result)
//       };
//       useEffect(() => {
//         getFolders();
//       }, []);
//       console.log(folderName)
      
//   return (
//     <>
//     <Context.Provider value={{folderName,ProjectNameArray,setProjectNameArray}}>
//       <div className={styles.Home}>
//       <Header />
//       <Modal />
//       {/* <Link to="/home/projectPage">Open Projects</Link> */}
//       <ProjectPage/>
//       <Outlet />
//     </div>
//     </Context.Provider>
//     </>
//   )
// }

// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { FileExplorer } from '../../../Components/FileExplorer/FileExplorer'
// import {dataGenerator} from "../../../MockData/MockData"
// export const HomeContext=createContext<any>({});
// export const Home = () => {
//   const [state,setState]=useState(
//     {
//       data:{type:"Global",data:[]}
//     }
//   )
//   useEffect(()=>{
//     console.log(state.data.type)
//     const response=dataGenerator(state.data.type);
//     // @ts-ignore 
//     console.log(response)
//      // @ts-ignore 
//     setState({...state,data:response})
//   },[])
//   console.log(state.data.data)
//   return (
//     <div>
//       <HomeContext.Provider value={{state,setState}}>
//         {/* <Navigation/> */}
//       {state.data.data && <FileExplorer />}
//       </HomeContext.Provider>
//     </div>
//   )
// }
import styles from "./Home.module.scss"
import React, { createContext, useContext, useEffect, useState } from 'react'
import { FileExplorer } from '../../../Components/FileExplorer/FileExplorer';
import { dataGenerator } from '../../../MockData/MockData';
import { Navigation } from "../../../Components/Navigation/Navigation";
import { ContextMenu } from "../../../Components/ContextMenu/ContextMenu";
import http from "../../../Services/Services";
import TableComponent from "../../../Components/TableComponent/TableComponent";
import Header from "../../../Components/Headers/Header";
export const HomeContext=createContext<any>({});
export const Home = () => {
  // const [anchorPoint,setAnchorPoint]=useState({x:0,y:0})
  const [storeArray,setStoreArray]=useState([{}]);
  const [state,setState]=useState<any>(
    {
      stack: [{ id: "1", type: "Global", name: "Root" }],
      data:{type:"Global",data:[]},
      isIconShow:false,
      type:"",
      isTable:false
    }
  )
 
  useEffect(()=>{
  async function getData()
    {
      // const resp=await http.get("projects");
      const resp=await http.get("projects/projectsExercises/")
      console.log(resp)
      setStoreArray([{type:"Global",data:resp}])
      setState({...state,data:resp})
    }
    getData()
    const response=dataGenerator(state.data.type);
    // setState({...state,data:response})
  },[])
  // console.log(storeArray)
  // console.log(state.data.data)
  console.log(state.isTable)
  // console.log(state?.data)
  // console.log(state?.data[0]?.projectName)
  return (
    <div>
      <HomeContext.Provider value={{state,setState,storeArray,setStoreArray}}>
        {/* <ContextMenu/> */}
        <Header/>
      <Navigation/>
      {!state.isTable && state?.data[0] && <FileExplorer/>}
      {state.isTable && <TableComponent/>}
      {/* <TableComponent/> */}
      </HomeContext.Provider>
    </div>
  )
  
}
