import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react";
export default function TambahStokBarang() {
    const [stokSebelumnya, setstokSebelumnya] = useState();
    const [tambahStok, settambahStok] = useState();
    const [dataBarang, setdataBarang] = useState([]);
    const [idProduk, setidProduk] = useState();



    useEffect(() => {
        async function fetchApi() {
            const req = await axios({
                method: "get",
                url: "http://localhost:8000/produk"
            })

            setdataBarang(req.data)
        }


        fetchApi()
    }, [])

    async function klikBarang(id) {
        let reqProdukSebelumnya = await axios({
            method: "post",
            url: "http://localhost:8000/cari/stok",
            data: {
                idStok: `${id}`
            }
        })
        await setstokSebelumnya(reqProdukSebelumnya.data[0].ketersediaan_barang)
        setidProduk(id)
    }

    async function kirimData() {
        axios({
            method: "post",
            url: "http://localhost:8000/stokbarang/tambah",
            data: {
                idBarang: `${idProduk}`,
                stokSebelum: `${stokSebelumnya}`,
                barangMasuk: `${tambahStok}`

            }
        })
    }

    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Tambah Stok Barang</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/admin/stok-barang'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Data StokBarang</Link>

                <div className="mt-4 bg-[#285430] rounded-lg w-[770px] h-[413px] mx-auto flex flex-col justify-evenly">

                    <form action="" className="flex flex-col p-5 space-y-5 w-full">

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36">Nama Produk</h2>
                            <select className="py-2 rounded-lg px-4 w-72">
                                {dataBarang.map((data, index) => {
                                    return (
                                        <option key={index} onClick={() => { klikBarang(data.produk_id) }}>{data.nama_produk}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36">Tambah Barang</h2>
                            <input onChange={e => { settambahStok(e.target.value) }} type="number" name="" placeholder="Jumlah" className="py-2 rounded-lg px-4 w-72" />
                        </div>


                    </form>
                    <button onClick={() => { kirimData() }} className="bg-[#68B984] px-7 py-3 w-fit rounded-lg text-white self-end mx-10">Simpan</button>
                </div>
            </div>
        </div>
    )
}