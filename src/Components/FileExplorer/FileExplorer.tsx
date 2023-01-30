import React, { useContext, useState } from "react";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { HomeContext } from "../../Pages/UserPage/Home/Home";
import { IconComponents } from "../IconComponents/IconComponents";
export const FileExplorer = () => {
  const { state, setState } = useContext(HomeContext);
// console.log(state)
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "100px"
    }}>
      {
      state?.data?.map((item: any) => {
        return (
          <>
            <IconComponents Element={item}/>
          </>
        );
      })}
    </div>
  );
};
