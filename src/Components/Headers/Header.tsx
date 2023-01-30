// import { Button } from '@mui/material'
// import React, { useMemo, useState } from 'react'
// import { SimpleDBService } from '../../Services/simple-db-service';
// import styles from "./Header.module.scss"
// export const Header = () => {
//   const [newFolder, setnewFolder] = useState("");

//   const driveService = useMemo(() => new SimpleDBService(), []);
//   async function addFolder()
//   {
//     // console.log(folderName)
//     // const result:any = await driveService.createFolder(folderName);
//     // console.log(result)

//   }

//   return (
//     <div className={styles.header}>
//         <div className={styles["header_logo"]}>
//         </div>
//     </div>
//   )
// }

import { useContext } from "react";
import styles from "./Header.module.scss";
// import { AppContext } from "../../Context/AppContext";
// import MaterialUISwitch from "../switch/MUISwitch";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Header: React.FC = () => {
  // const { appState, appDispatch } = useContext(AppContext)
  const nav = useNavigate();

  // const toggleTheme = () => {
  //   appDispatch({
  //     type: "setTheme", payload: {
  //       theme: appState.toggleTheme.theme === "dark" ? "light" : 'dark'
  //     }
  //   });
  // }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.heading}>
          <h1>Simple Database</h1>
        </div>

        <div className={styles.profileContainer}>
          {/* <MaterialUISwitch
            onChange={() => toggleTheme()}
          /> */}
          <Button className={styles.logout} color="primary" onClick={() => nav("/")}>Logout</Button>
        </div>
      </div>
    </>
  )
}

export default Header