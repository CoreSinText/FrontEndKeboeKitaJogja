import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react";
import logoDelete from '../public/delete-icon.svg'
import logoEdit from '../public/edit-icon.svg'
import Image from "next/image";

export default function AdminData() {
    const [dataAdmin, setdataAdmin] = useState([]);

    useEffect(() => {
        async function fetch() {
            let result = await axios({
                method: "get",
                url: "http://localhost:8000/admin"
            })
            setdataAdmin(result.data)
        }
        fetch()
    }, [])

    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Data Produk</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/admin/tambah-produk'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Tambah Data</Link>

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
                                    <td>{namaUser}</td>
                                    <td>{Jk}</td>
                                    <td>{noHp}</td>
                                    <td>{alamat}</td>
                                    <td className="flex w-32 mx-auto justify-center">
                                        <Image src={logoDelete} alt="logo-delete" className="w-8 cursor-pointer" />
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