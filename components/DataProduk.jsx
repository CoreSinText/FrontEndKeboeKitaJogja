import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function DataProduk() {
    const [dataProduk, setDataProduk] = useState([]);
    useEffect(() => {
        async function fetchApi() {
            const req = await axios({
                method: "get",
                url: "http://localhost:8000/stokbarang"
            })

            setDataProduk(req.data)
        }
        fetchApi()
    }, [])
    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Data Produk</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/admin/tambah-produk'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Tambah Data</Link>

                {/* Table */}
                <table className="mt-4">
                    <tr>
                        <th className="bg-[#285430] text-white">NO</th>
                        <th className="bg-[#285430] text-white">Nama Produk</th>
                        <th className="bg-[#285430] text-white">Stok</th>
                        <th className="bg-[#285430] text-white">Tindakan</th>

                    </tr>
                    {dataProduk.map((data, index) => {
                        let namaProduk = data.nama_produk
                        let stokBarang = data.ketersedian_barang
                        return (
                            <tr key={index} className="odd:bg-slate-200">
                                <td className="w-24">{index + 1}</td>
                                <td>{namaProduk}</td>
                                <td>{stokBarang}</td>
                                <td>asdsa</td>

                            </tr>
                        )
                    })}

                    <tr className="odd:bg-slate-200">
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdsa</td>

                    </tr>
                </table>
            </div>
        </div>
    )
}