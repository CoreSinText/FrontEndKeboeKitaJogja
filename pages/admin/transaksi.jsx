import DataTransaksi from "@/components/DataTransaksi"
import AdminLayout from "../../components/layouts/AdminLayout"

export default function AdminTransaksi() {
    return (
        <AdminLayout>
            <DataTransaksi link={'/admin/tambah-transaksi'} />
        </AdminLayout>
    )
}