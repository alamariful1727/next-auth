import AlertsExport from "./_components/AlertsExport";
import AlertsFilters from "./_components/AlertsFilters";
import AlertsPagination from "./_components/AlertsPagination";
import AlertsSearch from "./_components/AlertsSearch";
import AlertsTable from "./_components/AlertsTable";

const AlertsPage = () => {
  return (
    <div className="container mx-auto px-6 space-y-5">
      <div className="flex justify-between">
        <AlertsFilters />
        <div className="flex items-center space-x-5">
          <AlertsSearch />
          <AlertsExport />
        </div>
      </div>
      <div>
        <AlertsTable />
        <AlertsPagination />
      </div>
    </div>
  )
}

export default AlertsPage