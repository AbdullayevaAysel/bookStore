import { createSlice } from "@reduxjs/toolkit"
import { saveDataToLocal } from "../../../utilities"



const items =localStorage.getItem("folder") !== null ? JSON.parse(localStorage.getItem("folder")) :[]


const initialState = {
    basket: items
}

export const folderSlice = createSlice({
  name: "folder",
  initialState,
  
  reducers: {
    createFolder: async (state, action) => {
        
      const { name, title, description, parentFolderId } = action.payload
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
        console.log("Request was successful:", data)
        saveDataToLocal("folder", state.basket);
      } else {
        console.error("Request failed:", data)
      }
    },
  },
})

export const { createFolder } = folderSlice.actions

export default folderSlice.reducer
