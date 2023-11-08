import {
  createSlice
} from "@reduxjs/toolkit"
import {
  saveDataToLocal
} from "../../../utilities"



const items = localStorage.getItem("folder") !== null ? JSON.parse(localStorage.getItem("folder")) : []
const pictures = localStorage.getItem("pictures") !== null ? JSON.parse(localStorage.getItem("pictures")) : []

const initialState = {
  basket: items,
  pics:pictures
}


export const folderSlice = createSlice({
  name: "folder",
  initialState,

  reducers: {
    createFolder: async (state, action) => {

      const {
        name,
        title,
        description,
        parentFolderId
      } = action.payload
      const apiUrl = `https://1curd3ms.trials.alfresco.com/alfresco/api/-default-/public/alfresco/versions/1/nodes/${parentFolderId}/children`
      const requestBody = {
        nodeType: "cm:folder",
        name: name,
        properties: {
          "cm:title": title,
          "cm:description": description,
        },
      }

      const headers = new Headers()
      headers.set("Authorization", "Basic " + btoa("react" + ":" + "123456"))

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody),
      })

      const data = await response.json()

      if (response.ok) {
        state.basket.push(data);
        location.reload();
        console.log("Request was successful:", data)
        saveDataToLocal("folder", state.basket);
      } else {
        console.error("Request failed:", data)
      }
    },
    createFile: async (state, action) => {
      const {
        name
      } = action.payload
      const apiUrl = `https://1curd3ms.trials.alfresco.com/alfresco/api/-default-/public/alfresco/versions/1/nodes/382b3102-ffba-422e-8711-d7f330fb5468/children`
      const requestBody = {
        name: name, // Oluşturulacak dosyanın adı
        nodeType: 'cm:content', // Dosya tipi
        properties: {
          'cm:title': 'Yeni Dosya', // Opsiyonel, dosya başlığı
          'cm:description': 'Bu bir yeni dosyadır' // Opsiyonel, dosya açıklaması
        },
        content: {
          mimeType: 'text/plain', // Dosya türü
          mimeTypeName: 'Plain Text', // Dosya türünün adı
          sizeInBytes: 0, // Dosya boyutu, başlangıçta sıfır olabilir
          encoding: 'UTF-8' // Kodlama türü
        }
      };

      const headers = new Headers()
      headers.set("Authorization", "Basic " + btoa("react" + ":" + "123456"))

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody),
      })

      const data = await response.json()

      if (response.ok) {
        state.pics.push(data);
        saveDataToLocal("pictures", state.pics);
        location.reload();
        console.log("Request was successful:", data)

      } else {
        console.error("Request failed:", data)
      }


    }
  },
})

export const {
  createFolder,
  createFile
} = folderSlice.actions

export default folderSlice.reducer