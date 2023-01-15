import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DataTransaksi() {
    const [dataPenjualan, setdataPenjualan] = useState([]);
    useEffect(() => {
        async function fetchApi() {
            const req = await axios({
                method: "get",
                url: "http://localhost:8000/transaksi"
            })

            setdataPenjualan(req.data)
        }
        fetchApi()
    }, [])
    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Data Transaksi</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/admin/tambah-transaksi'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Tambah Data</Link>

                <table className="mt-4">
                    <tr>
                        <th className="bg-[#285430] text-white">NO</th>
                        <th className="bg-[#285430] text-white">Nama Pembeli</th>
                        <th className="bg-[#285430] text-white">Tanggal</th>
                        <th className="bg-[#285430] text-white">Produk</th>
                        <th className="bg-[#285430] text-white">Jumlah</th>
                        <th className="bg-[#285430] text-white">Total</th>
                        <th className="bg-[#285430] text-white">Tindakan</th>
                    </tr>

                    {dataPenjualan.map((data, index) => {
                        let id = data.transaksi_id
                        let namaPembeli = data.nama_pembeli
                        let tanggal = data.tanggal
                        let jumlah = data.jumlah_pembelian
                        let namaProduk = data.nama_produk
                        let totalTransaksi = data.total_transaksi
                        const date = new Date(tanggal)
                        const styleDate = {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        };
                        return (
                            <tr key={id} className="odd:bg-slate-200">
                                <td className="w-24">{index + 1}</td>
                                <td>{namaPembeli}</td>
                                <td>{date.toLocaleDateString("id", styleDate)}</td>
                                <td>{namaProduk}</td>
                                <td>{jumlah}</td>
                                <td>{totalTransaksi}</td>
                                <td></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}