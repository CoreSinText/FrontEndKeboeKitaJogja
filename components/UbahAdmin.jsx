import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function UbahAdmin() {
    const [buttonDisable, setbuttonDisable] = useState(true);
    const [namaUser, setnamaUser] = useState('');
    const [jenisKelamin, setjenisKelamin] = useState('');
    const [nomorHp, setnomorHp] = useState('');
    const [passwordUser, setpasswordUser] = useState('');
    const [alamatUser, setalamatUser] = useState('');
    const [idUser, setidUser] = useState('');
    const router = useRouter()

    useEffect(() => {
        let idQuery = router.query.id
        try {
            async function fetchApi() {
                let data = await axios({
                    method: "get",
                    url: `http://localhost:8000/admin/cari/?id=${idQuery}`,
                })
                setnamaUser(data.data.nama_user)
                setjenisKelamin(data.data.jenis_kelamin)
                setnomorHp(data.data.nomor_telepon)
                setpasswordUser(data.data.password)
                setalamatUser(data.data.alamat)
                setidUser(data.data.user_id)
            }
            fetchApi()
        } catch (err) {
        }
    }, [])

    useEffect(() => {
        if (namaUser <= 0 || jenisKelamin <= 0 || nomorHp <= 0 || alamatUser <= 0 || passwordUser <= 0) {
            setbuttonDisable(true)
        } else {
            setbuttonDisable(false)
        }
    }, [namaUser, jenisKelamin, nomorHp, passwordUser, alamatUser])

    async function kirimData() {
        await axios({
            method: "put",
            url: "http://localhost:8000/admin/ubah",
            data: {
                newName: `${namaUser}`,
                "newJk": `${jenisKelamin}`,
                "newNomor": `${nomorHp}`,
                "newAlamat": `${alamatUser}`,
                "newPassword": `${passwordUser}`,
                "userId": `${idUser}`
            }
        })
    }
    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Tambah Admin</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/pemilik/data-admin'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Data Admin</Link>

                <div className="mt-4 bg-[#285430] rounded-lg w-[770px] h-[413px] mx-auto flex flex-col justify-evenly">

                    <form action="" className="flex flex-col p-5 space-y-5 w-full">
                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Nama</h2>
                            <input value={namaUser} onChange={(e) => { setnamaUser(e.target.value) }} type="text" name="" placeholder="Nama" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Jenis Kelamin</h2>
                            <div onClick={() => { setjenisKelamin("Pria") }} className="flex text-white space-x-2"><input checked={jenisKelamin == 'Pria' ? true : false} name="jk" value="Pria" type="radio" id="js" /> <h3>Pria</h3></div>
                            <div onClick={() => { setjenisKelamin("Wanita") }} className="flex text-white space-x-2"><input checked={jenisKelamin == 'Wanita' ? true : false} name="jk" value="Wanita" type="radio" id="js" /> <h3>Wanita</h3></div>
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Nomor Hp</h2>
                            <input value={nomorHp} onChange={(e) => { setnomorHp(e.target.value) }} type="text" name="" placeholder="Nomor Hp" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Alamat</h2>
                            <textarea value={alamatUser} onChange={(e) => { setalamatUser(e.target.value) }} placeholder="Alamat" className="py-2 rounded-lg px-4 w-72"></textarea>
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Password</h2>
                            <input value={passwordUser} onChange={(e) => { setpasswordUser(e.target.value) }} type="password" name="" placeholder="Password" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                    </form>
                    <button disabled={buttonDisable} onClick={() => { kirimData() }} className={` px-7 py-3 w-fit rounded-lg text-white self-end mx-10 ${buttonDisable ? 'bg-red-400' : 'bg-[#68B984]'}`}>Simpan</button>
                </div>
            </div>
        </div>
    )
}