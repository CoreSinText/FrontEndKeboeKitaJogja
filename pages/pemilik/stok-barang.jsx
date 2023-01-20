import PemilikLayout from "@/components/layouts/Pemilik"
import DataStokBarang from "@/components/DataStokBarang"
export default function DataStokBarangPemilik() {
    return (
        <PemilikLayout>
            <DataStokBarang link={'/pemilik/tambah-stok-barang'} />
        </PemilikLayout>
    )
}