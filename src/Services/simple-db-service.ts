import axios, { AxiosInstance } from "axios";
import { FileExplorer } from "../Components/FileExplorer/FileExplorer";
import { fakeApiCall } from "../utility/utility";

export class SimpleDBService {
  httpClient: AxiosInstance;

  // folderList: any[] = [
  //   {
  //     id: 1,
  //     projectId: null,
  //     name: "Dummy Folder",

  //   },
  // ];
  folderList: any[] = [
    {
      projectName: "Project 01",
      type:"project",
      excercises: [
        {
          id: 1,
          noOfTables: 2,
          type:"excercises",
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
    },

    {
      projectName: "Project 02",
      type:"project",
      excercises: [
        {
          id: 1,
          noOfTables: 2,
          type:"excercises",
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
    },
  ];

  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://localhost:8080",
    });
    console.log(this.httpClient);
  }

  getAllFolders() {
    console.log(fakeApiCall(this.folderList) as unknown as any[]);
    return fakeApiCall(this.folderList) as unknown as any[];
  }

  async createFolder(payload: { name: string; parentFolderId: number | null }) {
    await fakeApiCall(payload);
    this.folderList.push({ id: this.folderList.length + 1, ...payload });
    console.log(this.folderList);
    // return this.folderList
    return payload;
  }

  async updateFolder(folderId: number, payload: { name: string }) {
    await fakeApiCall(payload);
    const index = this.folderList.findIndex((folder) => folder.id === folderId);
    this.folderList[index] = { ...this.folderList[index], ...payload };
    return payload;
  }
}
