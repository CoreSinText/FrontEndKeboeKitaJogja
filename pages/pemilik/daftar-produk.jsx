import DataProduk from "@/components/DataProduk";
import PemilikLayout from "@/components/layouts/Pemilik";
export default function DaftarProdukPemilik() {
    return (
        <PemilikLayout>
            <DataProduk link={'/pemilik/tambah-produk'} />
        </PemilikLayout>
    )
}