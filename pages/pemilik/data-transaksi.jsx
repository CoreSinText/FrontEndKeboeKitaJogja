import DataTransaksi from "@/components/DataTransaksi"
import PemilikLayout from "@/components/layouts/Pemilik"
export default function DataTransaksiPemilik() {
    return (
        <PemilikLayout>
            <DataTransaksi link={'/pemilik/tambah-transaksi'} />
        </PemilikLayout>
    )
}