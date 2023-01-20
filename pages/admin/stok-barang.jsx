import DataStokBarang from "@/components/DataStokBarang"
import AdminLayout from "@/components/layouts/AdminLayout"

export default function AdminStokBarang(params) {
    return (
        <AdminLayout>
            <DataStokBarang link={'/admin/tambah-stok-barang'} />
        </AdminLayout>
    )
}