import React, { useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { StaticDatePicker } from "@mui/lab";
import { HomeContext } from "../../Pages/UserPage/Home/Home";
import { dataGenerator } from "../../MockData/MockData";
export const Navigation = () => {
  const { state, setState, storeArray,setStoreArray } = useContext(HomeContext);
  const { stack, data } = state;
  // console.log(state)
  // console.log(stack)
  // console.log(storeArray)
  //   console.log(state)
  //     const handleNavigate = (data: any) => {
  //         console.log(data)
  //       const newStack = [...stack, data];
  //       const res = dataGenerator(data.type);
  //       setState({ ...state, data: res, stack: newStack });
  //   };

  const handleBreadCrumNavigate = (data: any, index: any) => {
    console.log(data, index);
    if (index >=0) {
      const newStack = stack.slice(0, index + 1);
      console.log(newStack);
      // const res = dataGenerator(data.type);
      // const res = storeArray[storeArray.length - 2];
      // setStoreArray((val: any) => val.slice(0, index + 1));
      // console.log(res.data)
      // const array = storeArray.pop();
      // console.log(array).
      const res = storeArray[index];
      console.log(storeArray)
      console.log({ ...state, stack: newStack });
      setState({ ...state, data: res.data, stack: newStack });
      // setState({ ...state, data: storeArray[index + 1], stack: newStack });
    } 
    // else if (index === 0) {
    //   const newStack = stack.slice(0, index + 1);
    //   // const res = storeArray[storeArray.length - 3];
    //   setStoreArray((val: any) => val.slice(0, index + 1));
    //   // setState({ ...state, data: res.data, stack: newStack });
    //   setState({ ...state, data:storeArray[index + 1], stack: newStack });
    // }
  };
  // function handleButton(data: any, index: any)
  // {
  //   if (index === 0) {
  //       const newStack = stack.slice(0, index + 1);
  //       const res = storeArray[storeArray.length - 3];
  //       setState({ ...state, data: res.data, stack: newStack });
  //     }
  // }
  return (
    <Box>
      <ArrowBackIosIcon
        onClick={() =>
          handleBreadCrumNavigate(stack[stack.length - 2], stack.length - 2)
        }
      />
      <Breadcrumbs>
        {stack.map((value: any, index: any) => (
          <Box 
          onClick={() => handleBreadCrumNavigate(value, index)}
          >
            <span 
            // onClick={() => handleBreadCrumNavigate(value, index)}
            >{value?.name}</span>
            <span 
            // onClick={() => handleBreadCrumNavigate(value, index)}
            >{value?.projectName}</span>
            <span 
            // onClick={() => handleBreadCrumNavigate(value, index)}
            >{value?.exerciseName}</span>
            <span>{value?.tableName}</span>
          </Box>
        ))}
      </Breadcrumbs>
    </Box>
  );
};
