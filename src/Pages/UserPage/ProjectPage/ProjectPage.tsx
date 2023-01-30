// import React, {
//   createContext,
//   useContext,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import styles from "./ProjectPage.module.scss";
// import FolderOpenIcon from "@mui/icons-material/FolderOpen";
// import { SimpleDBService } from "../../../Services/simple-db-service";
// import { Link, useNavigate } from "react-router-dom";
// import { Exercise } from "../../Exercise/Exercise";
// import { Context } from "../Home";

// export const ProjectPage = () => {
//   const object = useContext<any>(Context);
//   let navigate = useNavigate();
//   const driveService = useMemo(() => new SimpleDBService(), []);
//   const onDoubleClick = async () => {
//     console.log("double");
//     // let count = 1;
//     // const payload: any = {
//     //   projectId: "1",
//     //   exerciseName: `exerciseName${count++}`,
//     // };
//     const response: any = await driveService.getAllFolders();
//     console.log(response);
//     object.setProjectNameArray(response)
//   };
  
//   const onClickHandler = (event: any) => {
   
//     if (event.detail === 2) {
//       onDoubleClick();
//     }
//   };
//   // const handleClick = (event:any) => {
//   //   if (event.detail === 2) {
//   //     console.log('double click');
//   //   }
//   // };
//   // console.log(object.)
//   return (
//     <div className={styles.mainPage}>
//       <div className={styles.icons}>
//         {/* <Link to="/home/exercise">
//             <FolderOpenIcon
//               className={styles.folderIcons}
//               onClick={onClickHandler}
//             />
//           </Link> */}
//         {object.folderName && object.folderName.map((item: any) => {
//           return (
//             <span>
//             {/* <Link to="/home/exercise"> */}
//               <FolderOpenIcon
//                 className={styles.folderIcons}
//                  onClick={onClickHandler}
//               />
//               <span>{item.projectName}</span>
//               {/* </Link> */}
//             </span>
//           );
//         })}
//         {/* <FolderOpenIcon
//              className={styles.folderIcons}/> */}
//       </div>
//     </div>
//   );
// };
import React from 'react'

export const ProjectPage = () => {
  return (
    <div>ProjectPage</div>
  )
}
