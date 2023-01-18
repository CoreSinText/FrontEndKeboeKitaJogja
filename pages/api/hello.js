import axios from "axios"

export async function decodeData(data) {
  return await axios({
    method: "post",
    url: "http://localhost:8000/local/decode",
    data: {
      data: `${data}`
    }
  })
}