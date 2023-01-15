import Link from "next/link";

export default function DataStokBarang() {
    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Data Stok Barang</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/admin/tambah-stok-barang'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Tambah Data</Link>

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
                    <tr className="odd:bg-slate-200">
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdasm</td>
                    </tr>
                    <tr className="odd:bg-slate-200">
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdasm</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}