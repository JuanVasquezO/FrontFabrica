import PageLayout from "@/components/templates/PageLayout";
import InvoiceTable from "@/components/organisms/InvoiceTable";
import InvoiceForm from "@/components/molecules/InvoiceForm";

export default function index() {
  return (
    <PageLayout title="CourierSync - Gestión de Facturas">
      <InvoiceTable />
      <InvoiceForm />
    </PageLayout>
  );
}
