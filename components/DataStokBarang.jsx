import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";


export default function DataStokBarang() {
    const [dataStokBarang, setdataStokBarang] = useState([]);
    useEffect(() => {
        async function fetchApi() {
            const req = await axios({
                method: "get",
                url: "http://localhost:8000/stokbarang"
            })

            setdataStokBarang(req.data)
        }
        fetchApi()
    }, [])
    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Data Stok Barang</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/admin/tambah-stok-barang'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Tambah Data</Link>

                <table className="mt-4">
                    <tr>
                        <th className="bg-[#285430] text-white">NO</th>
                        <th className="bg-[#285430] text-white">Nama Produk</th>
                        <th className="bg-[#285430] text-white">Stok</th>
                        <th className="bg-[#285430] text-white">Tindakan</th>

                    </tr>
                    {dataStokBarang.map((data, index) => {
                        let namaProduk = data.nama_produk
                        let stokBarang = data.ketersedian_barang
                        return (
                            <tr key={index} className="odd:bg-slate-200">
                                <td className="w-24 text-center">{index + 1}</td>
                                <td className="text-center">{namaProduk}</td>
                                <td className="text-center">{stokBarang}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}