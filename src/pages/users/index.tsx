import { Button } from "@components/index";

const UsersPage = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>Filters</div>
        <div className="flex items-center space-x-4">
          <div>Search</div>
          <div className="space-x-5">
            <Button type="default-dark" size="small">
              Dark
            </Button>
            <Button>Export as .csv</Button>
            <Button type="primary" size="large">
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
};

export default UsersPage;
