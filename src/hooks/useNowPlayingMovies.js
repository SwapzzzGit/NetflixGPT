import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";
import { DATA_URL, API_OPTIONS } from "../utils/constants";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(DATA_URL, API_OPTIONS);
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
