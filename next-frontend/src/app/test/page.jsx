"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Page() {
  let queryCall = () => {
    console.log("hello world");
    return axios.post("http://localhost/Nextjs%20Projects/next-project-idb/server/api/testApi.php", {}).then((res) => res.data);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: () => queryCall(),
  });
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <div>{data?.data}</div>
    </div>
  );
}

export default Page;
