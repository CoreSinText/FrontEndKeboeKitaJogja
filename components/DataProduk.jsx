import Link from "next/link"
export default function DataProduk() {
    return (
        <div className="w-full px-10 pt-24">
            <h1 className="text-2xl font-bold">Data Produk</h1>

            <div className="w-full flex flex-col mt-10">
                <Link href={'/admin/tambah-produk'} className="bg-[#285430] text-white font-bold w-fit px-5 py-2 rounded-lg">Tambah Data</Link>

                <table className="mt-4">
                    <tr>
                        <th className="bg-[#285430] text-white">NO</th>
                        <th className="bg-[#285430] text-white">Nama Produk</th>
                        <th className="bg-[#285430] text-white">Harga Produk</th>
                        <th className="bg-[#285430] text-white">Tindakan</th>

                    </tr>
                    <tr className="odd:bg-slate-200">
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdsa</td>
                        <td>asdsa</td>
                    </tr>
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