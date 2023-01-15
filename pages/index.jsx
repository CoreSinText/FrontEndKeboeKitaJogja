export default function Login() {
  return (
    <div className="w-screen h-screen bg-[#D7E9B9] flex justify-center items-center">

      <div className="flex flex-col items-center space-y-3">
        <h1 className="bg-[#D9D9D9] text-2xl rounded-full h-44 w-44 flex justify-center items-center font-bold">Logo</h1>

        <form action="" className="w-[469px] h-[357px] bg-[#3C6255] flex flex-col justify-center space-y-8 px-8">
          <input type="text" name="" placeholder="Masukkan Username" className="py-2 rounded-lg px-4" />
          <input type="password" placeholder="Masukkan Password" className="py-2 rounded-lg px-4" />
          <button className="bg-[#68B984] py-2 px-12 font-bold text-lg w-fit rounded-lg mx-auto">Masuk</button>
        </form>
      </div>
    </div>
  )
}