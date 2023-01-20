import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react";
import logoDelete from '../public/delete-icon.svg'
import logoEdit from '../public/edit-icon.svg'
import Image from "next/image";

export default function DataProduk() {
    const [dataProduk, setDataProduk] = useState([]);
    const [produkDelete, setprodukDelete] = useState();

    useEffect(() => {
        async function fetchApi() {
            const req = await axios({
                method: "get",
                url: "http://localhost:8000/produk"
            })

            setDataProduk(req.data)
        }
        fetchApi()
    }, [])

    useEffect(() => {
        async function fetchApi() {
            const req = await axios({
                method: "get",
                url: "http://localhost:8000/produk"
            })

            setDataProduk(req.data)
        }
        fetchApi()
    }, [dataProduk])

    async function deleteProduk(key) {
        await axios({
            method: "delete",
            url: "http://localhost:8000/produk/hapus",
            data: {
                idProduk: `${key}`
            }
        })
    }
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
                            <th className="bg-[#285430] text-white">Nama Produk</th>
                            <th className="bg-[#285430] text-white">Stok</th>
                            <th className="bg-[#285430] text-white">Tindakan</th>

                        </tr>
                    </thead>
                    <tbody>
                        {dataProduk.map((data, index) => {
                            let namaProduk = data.nama_produk
                            let hargaProduk = data.harga_produk
                            let key = data.produk_id
                            return (
                                <tr key={key} className="odd:bg-slate-200">
                                    <td className="w-24">{index + 1}</td>
                                    <td>{namaProduk}</td>
                                    <td>{hargaProduk}</td>
                                    <td className="flex w-32 mx-auto justify-center">
                                        <Image onClick={() => { deleteProduk(key) }} src={logoDelete} alt="logo-delete" className="w-8 cursor-pointer" />
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