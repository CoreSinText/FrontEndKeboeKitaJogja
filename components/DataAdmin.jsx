import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react";
import logoDelete from '../public/delete-icon.svg'
import logoEdit from '../public/edit-icon.svg'
import Image from "next/image";
import { useRouter } from "next/router";

export default function AdminData() {
    const router = useRouter()
    const [dataAdmin, setdataAdmin] = useState([]);

    async function fetch() {
        let result = await axios({
            method: "get",
            url: "http://localhost:8000/admin"
        })
        setdataAdmin(result.data)
    }

    useEffect(() => {
        fetch()
    }, [])

    async function deleteAdmin(id) {
        await axios({
            method: "delete",
            url: 'http://localhost:8000/admin/hapus',
            data: {
                idAdmin: `${id}`
            }
        })
        fetch()
    }

    function ubahAdmin(id) {
        router.push(`/pemilik/ubah-admin/?id=${id}`)
    }
    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Data Admin</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/pemilik/tambah-admin'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Tambah Data</Link>

                {/* Table */}
                <table className="mt-4">
                    <thead>
                        <tr>
                            <th className="bg-[#285430] text-white">NO</th>
                            <th className="bg-[#285430] text-white">Nama Admin</th>
                            <th className="bg-[#285430] text-white">Jenis Kelamin</th>
                            <th className="bg-[#285430] text-white">Nomor</th>
                            <th className="bg-[#285430] text-white">Alamat</th>
                            <th className="bg-[#285430] text-white">Tindakan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAdmin.map((data, index) => {
                            let namaUser = data.nama_user
                            let Jk = data.jenis_kelamin
                            let noHp = data.nomor_telepon
                            let alamat = data.alamat
                            return (
                                <tr key={index} className="odd:bg-slate-200">
                                    <td className="w-24">{index + 1}</td>
                                    <td className="p-1">{namaUser}</td>
                                    <td className="p-1">{Jk}</td>
                                    <td className="p-1">{noHp}</td>
                                    <td className="p-1">{alamat}</td>
                                    <td className="flex w-32 mx-auto justify-center space-x-4">
                                        <Image onClick={() => { deleteAdmin(data.user_id) }} src={logoDelete} alt="logo-delete" className="w-8 cursor-pointer" />
                                        <Image onClick={() => ubahAdmin(data.user_id)} src={logoEdit} alt='logo-edit' className="w-8 cursor-pointer" />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}