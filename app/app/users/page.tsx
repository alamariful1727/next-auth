import { Button } from "@/components";

export default function Users() {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between">
        <div>Filters</div>
        <div className="flex items-center space-x-4">
          <div>Search</div>
          <div className="space-x-5">
            <Button theme="default-dark" size="small">
              Dark
            </Button>
            <Button>Export as .csv</Button>
            <Button theme="primary" size="large">
              New User
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div>Table</div>
        <div>Pagination</div>
      </div>
    </div>
  );
}