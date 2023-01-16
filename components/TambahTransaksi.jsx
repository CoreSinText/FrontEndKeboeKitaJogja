import axios from "axios";
import Link from "next/link"
import { useState, useEffect } from "react"
export default function TambahTransaksi() {
    const [namaPembeli, setnamaPembeli] = useState('');
    const [namaProduk, setnamaProduk] = useState('');
    const [optionProduk, setoptionProduk] = useState('');
    const [hargaProduk, sethargaProduk] = useState(0);

    const [dataProduk, setdataProduk] = useState([]);
    const [jumlah, setjumlah] = useState('');
    const [totalHarga, settotalHarga] = useState('');
    const [disableButton, setdisableButton] = useState(true);


    useEffect(() => {
        async function fetchApi() {
            const req = await axios({
                method: "get",
                url: "http://localhost:8000/produk"
            })
            setdataProduk(req.data)
        }
        fetchApi()
    }, [])

    useEffect(() => {
        settotalHarga(hargaProduk * jumlah)
    }, [hargaProduk, jumlah])

    useEffect(() => {
        if (hargaProduk > 0 && namaPembeli.length > 0 && jumlah.length > 0) {
            setdisableButton(false)
        } else {
            setdisableButton(true)
        }

    }, [hargaProduk, namaPembeli, jumlah])

    async function kirimData() {
        await axios({
            method: "post",
            url: "http://localhost:8000/transaksi/tambah",
            data: {
                tanggal: `${new Date()}`,
                namaPembeli: `${namaPembeli}`,
                produkId: `${parseInt(namaProduk)}`,
                jumlah: `${parseInt(jumlah)}`,
                total: `${parseInt(totalHarga)}`
            }
        })
    }


    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Tambah Transaksi</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/admin/transaksi'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Data Transaksi</Link>

                <div className="mt-4 bg-[#285430] rounded-lg w-[770px] h-[413px] mx-auto flex flex-col justify-evenly">

                    <form action="" className="flex flex-col p-5 space-y-5 w-full">
                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Nama Pembeli</h2>
                            <input value={namaPembeli} onChange={e => setnamaPembeli(e.target.value)} type="text" placeholder="Nama Pembeli" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36">Nama Produk</h2>
                            <select className="py-2 rounded-lg px-4 w-72">
                                <option value="Pilih Produk" onClick={() => sethargaProduk(0)}>Pilih Produk</option>
                                {/* <option value="">asdas</option> */}
                                {dataProduk.map((data, index) => {
                                    return (
                                        <>
                                            <option key={index} value={data.produk_id} onClick={(e) => {
                                                setoptionProduk(e.target.value)
                                                sethargaProduk(data.harga_produk)
                                                setnamaProduk(data.produk_id)
                                            }} >{data.nama_produk}</option>
                                        </>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36">Jumlah</h2>
                            <input value={jumlah} onChange={e => setjumlah(e.target.value)} type="text" name="" placeholder="Jumlah" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36">Total Harga</h2>
                            <input disabled={true} value={totalHarga} type="text" placeholder="Total Harga" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                    </form>
                    <button onClick={() => kirimData()} disabled={disableButton} className={` px-7 py-3 w-fit rounded-lg text-white self-end mx-10 ${disableButton ? 'bg-red-400' : 'bg-[#68B984]'}`}>Simpan</button>
                </div>
            </div>
        </div>
    )
}