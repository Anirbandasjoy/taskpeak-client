import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchSingleTask = (id) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["single-task-data", id],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/task/${id}`
      );
      return response.data;
    },
  });
  return { data, refetch, isLoading };
};

export default useFetchSingleTask;
