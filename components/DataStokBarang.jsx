import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";



export default function DataStokBarang({ link }) {
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
    useEffect(() => {
        async function fetchApi() {
            const req = await axios({
                method: "get",
                url: "http://localhost:8000/stokbarang"
            })

            setdataStokBarang(req.data)
        }
        fetchApi()
    }, [dataStokBarang])
    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Data Stok Barang</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={link} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Tambah Data</Link>

                <table className="mt-4">
                    <thead>
                        <tr>
                            <th className="bg-[#285430] text-white">NO</th>
                            <th className="bg-[#285430] text-white">Nama Produk</th>
                            <th className="bg-[#285430] text-white">Stok</th>


                        </tr>
                    </thead>
                    <tbody>
                        {dataStokBarang.map((data, index) => {
                            let namaProduk = data.nama_produk
                            let stokBarang = data.ketersediaan_barang
                            return (
                                <tr key={index} className="odd:bg-slate-200">
                                    <td className="w-24 text-center">{index + 1}</td>
                                    <td className="text-center">{namaProduk}</td>
                                    <td className="text-center">{stokBarang}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}