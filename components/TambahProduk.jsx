import axios from "axios";
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
export default function TambahProduk() {
    const [namaProduk, setnamaProduk] = useState('');
    const [hargaBarang, sethargaBarang] = useState('');
    const [buttonDisable, setbuttonDisable] = useState(true);



    async function kirimData() {
        await axios({
            method: 'post',
            url: 'http://localhost:8000/produk/tambah',
            data: {
                namaProduk: `${namaProduk}`,
                harga: `${parseInt(hargaBarang)}`
            }
        })
    }

    useEffect(() => {
        if (namaProduk.length > 0 && hargaBarang.length > 0) {
            setbuttonDisable(false)
        } else {
            setbuttonDisable(true)
        }
    }, [namaProduk, hargaBarang])
    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Tambah Produk</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/admin/daftar-produk'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Data Produk</Link>

                <div className="mt-4 bg-[#285430] rounded-lg w-[770px] h-[413px] mx-auto flex flex-col justify-evenly">

                    <form action="" className="flex flex-col p-5 space-y-5 w-full">
                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Nama Produk</h2>
                            <input value={namaProduk} onChange={e => { setnamaProduk(e.target.value) }} type="text" name="" placeholder="Nama Produk" className="py-2 rounded-lg px-4 w-72" />
                        </div>


                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36">Nama Harga</h2>
                            <input value={hargaBarang} onChange={e => sethargaBarang(e.target.value)} type="number" name="" placeholder="Harga" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                    </form>
                    <button disabled={buttonDisable} onClick={() => { kirimData() }} className={` px-7 py-3 w-fit rounded-lg text-white self-end mx-10 ${buttonDisable ? 'bg-red-400' : 'bg-[#68B984]'}`}>Simpan</button>
                </div>
            </div>
        </div>
    )
}