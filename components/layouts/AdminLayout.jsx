import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
export default function AdminLayout({ children }) {
    let router = useRouter()
    let level = parseInt(secureLocalStorage.getItem('user'))
    useEffect(() => {

        if (level === 1) {
            router.push('/pemilik/data-transaksi')
        } else if (level === null) {
            router.push('/')
        }
    }, [])
    return (
        <div className="flex w-screen h-screen">

            {/* Navigation */}
            <div className="w-[287px] bg-[#6ECCAF] flex flex-col justify-between items-center">

                <div className="space-y-2 mt-6">
                    <h1 className="bg-[#D9D9D9] text-2xl rounded-full h-44 w-44 flex justify-center items-center font-bold">Logo</h1>
                    <h2 className="text-lg font-bold text-center">Keboen Kita Jogja</h2>
                </div>

                {/* Navigasi */}
                <div className="flex flex-col w-full space-y-4">

                    <Link href={"/admin/transaksi"} className='w-full bg-[#68B984] text-white px-6 text-lg py-4 font-bold'>
                        Transaksi
                    </Link>
                    <Link href={"/admin/daftar-produk"} className='w-full bg-[#68B984] text-white px-6 text-lg py-4 font-bold'>
                        Daftar Produk
                    </Link>
                    <Link href={"/admin/stok-barang"} className='w-full bg-[#68B984] text-white px-6 text-lg py-4 font-bold'>
                        Stok Barang
                    </Link>
                </div>
                <button className="bg-[#68B984] py-2 px-12 font-bold text-lg w-fit rounded-lg mx-auto mb-7 text-white">Keluar</button>
            </div>
            {children}
        </div>
    )
}