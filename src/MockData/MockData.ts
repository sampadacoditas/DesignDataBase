export const dataGenerator = (type: any) => {
  if (type === "Global") {
    return {
      type: "Global",
      data: [
        { id: 1, type: "Project", name: "Project01" },
        { id: 2, type: "Project", name: "Project02" },
        { id: 2, type: "Project", name: "Project03" },
        { id: 2, type: "Project", name: "Project04" },
        { id: 2, type: "Project", name: "Project05" },
        { id: 1, type: "Excercise", name: "Excercise 01" },
      ],
    };
  }
   if (type === "Project") {
    return {
      type: "Project",
      data: [
        { id: 2, type: "Excercise", name: "Excercise 0200000" },
        { id: 3, type: "Excercise", name: "Excercise 03" },
        { id: 4, type: "Excercise", name: "Excercise 04" },
      ],
    };
  }
  if (type === "Excercise") {
    return {
        type: "Excercise",
        data: [
            { id: 2, type: "Table", name: "Table 02" },
            { id: 3, type: "Table", name: "Table 03" },
            { id: 4, type: "Table", name: "Table 04" },
        ],
    };
}

if (type ==="Table") {
    return {
        type: "Table",
        data: [
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
    };
}


  return [];
};