import Link from "next/link"
export default function TambahProduk() {
    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Tambah Transaksi</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/admin/produk'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Data Transaksi</Link>

                <div className="mt-4 bg-[#285430] rounded-lg w-[770px] h-[413px] mx-auto flex flex-col justify-evenly">

                    <form action="" className="flex flex-col p-5 space-y-5 w-full">
                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36 ">Nama Pembeli</h2>
                            <input type="text" name="" placeholder="Nama Pembeli" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36">Nama Produk</h2>
                            <select className="py-2 rounded-lg px-4 w-72">
                                <option value="">asdas</option>
                            </select>
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36">Jumlah</h2>
                            <input type="text" name="" placeholder="Jumlah" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                        <div className="flex space-x-6 items-center w-full">
                            <h2 className="text-white w-36">Nama Pembeli</h2>
                            <input type="text" name="" placeholder="Nama Pembeli" className="py-2 rounded-lg px-4 w-72" />
                        </div>

                    </form>
                    <button className="bg-[#68B984] px-7 py-3 w-fit rounded-lg text-white self-end mx-10">Simpan</button>
                </div>
            </div>
        </div>
    )
}