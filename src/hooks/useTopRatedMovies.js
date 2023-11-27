import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";
import { useEffect } from "react";
import { TOP_RATED_MOVIES_DATA_URL, API_OPTIONS } from "../utils/constants";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_DATA_URL, API_OPTIONS);
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
