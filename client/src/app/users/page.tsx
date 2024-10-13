"use client";

import { useGetUsersQuery, User } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<User>[] = [
    {field: "userId", headerName: "ID", width: 90},
    {field: "name", headerName: "User name", width: 200},
    {field: "email", headerName: "User email", width: 200},
] 

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !users?.length) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch users
      </div>
    );
  }
  return <div className="flex flex-col">
    <Header name="Users"/>
    <DataGrid 
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
    />
  </div>;
};

export default Users;
