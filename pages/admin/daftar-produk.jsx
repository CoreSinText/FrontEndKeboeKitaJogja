import DataProduk from "@/components/DataProduk"
import AdminLayout from "@/components/layouts/AdminLayout"



export default function AdminDaftarProduk() {
    return (
        <AdminLayout>
            <DataProduk link={'/admin/tambah-produk'} />
        </AdminLayout>
    )
}