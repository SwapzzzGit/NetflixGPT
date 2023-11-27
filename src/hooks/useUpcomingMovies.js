import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";
import { UPCOMING_MOVIES_DATA_URL, API_OPTIONS } from "../utils/constants";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES_DATA_URL, API_OPTIONS);
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
