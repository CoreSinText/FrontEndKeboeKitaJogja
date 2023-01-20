import axios from "axios"
import { useState } from "react";
import { useRouter } from 'next/router'
import secureLocalStorage from "react-secure-storage";

export default function Login() {
  const router = useRouter()
  const [userName, setuserName] = useState();
  const [password, setpassword] = useState();

  async function login() {
    try {
      const data = await axios({
        method: "post",
        url: "http://localhost:8000/keboen/login",
        data: {
          username: `${userName}`,
          password: `${password}`
        }
      })
      if (data.data.pemilik === 0) {
        router.push('/admin/transaksi')
      } else if (data.data.pemilik === 1) {
        router.push('/pemilik/data-transaksi')
      }
      secureLocalStorage.setItem('user', data.data)
    } catch (error) {

    }
  }


  return (
    <div className="w-screen h-screen bg-[#D7E9B9] flex justify-center items-center">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="bg-[#D9D9D9] text-2xl rounded-full h-44 w-44 flex justify-center items-center font-bold">Logo</h1>
        <div className="w-[469px] h-[357px] bg-[#3C6255] flex flex-col justify-center space-y-8 px-8">
          <input onChange={(e) => { setuserName(e.target.value) }} type="text" name="" placeholder="Masukkan Username" className="py-2 rounded-lg px-4" />
          <input onChange={(e) => { setpassword(e.target.value) }} type="password" placeholder="Masukkan Password" className="py-2 rounded-lg px-4" />
          <button onClick={() => { login() }} className="bg-[#68B984] py-2 px-12 font-bold text-lg w-fit rounded-lg mx-auto">Masuk</button>
        </div>
      </div>
    </div>
  )
}