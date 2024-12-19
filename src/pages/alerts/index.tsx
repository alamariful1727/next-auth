import AlertsExport from "./components/AlertsExport";
import AlertsFilters from "./components/AlertsFilters";
import AlertsPagination from "./components/AlertsPagination";
import AlertsSearch from "./components/AlertsSearch";
import AlertsTable from "./components/AlertsTable";

const AlertsPage = () => {
  return (
    <div className="container mx-auto space-y-5">
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
  );
};

export default AlertsPage;
