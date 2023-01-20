import Link from "next/link"
import { useState } from "react";
export default function TambahAdmin() {
    const [buttonDisable, setbuttonDisable] = useState(true);
    const [namaUser, setnamaUser] = useState();
    const [jenisKelamin, setjenisKelamin] = useState();
    const [nomorHp, setnomorHp] = useState();
    const [passwordUser, setpasswordUser] = useState();
    const [alamatUser, setalamatUser] = useState();

    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Tambah Produk</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/pemilik/data-admin'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Data Admin</Link>

                <div className="mt-4 bg-[#285430] rounded-lg w-[770px] h-[413px] mx-auto flex flex-col justify-evenly">

                    <form action="" className="flex flex-col p-5 space-y-5 w-full">
                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Nama</h2>
                            <input type="text" name="" placeholder="Nama" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Jenis Kelamin</h2>
                            <div className="flex text-white space-x-2"><input name="jk" value="Pria" type="radio" id="js" /> <h3>Pria</h3></div>
                            <div className="flex text-white space-x-2"><input name="jk" value="Wanita" type="radio" id="js" /> <h3>Wanita</h3></div>
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Nomor Hp</h2>
                            <input type="text" name="" placeholder="Nomor Hp" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Alamat</h2>
                            <textarea placeholder="Alamat" className="py-2 rounded-lg px-4 w-72"></textarea>
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Password</h2>
                            <input type="text" name="" placeholder="Password" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                    </form>
                    <button disabled={buttonDisable} onClick={() => { kirimData() }} className={` px-7 py-3 w-fit rounded-lg text-white self-end mx-10 ${buttonDisable ? 'bg-red-400' : 'bg-[#68B984]'}`}>Simpan</button>
                </div>
            </div>
        </div>
    )
}