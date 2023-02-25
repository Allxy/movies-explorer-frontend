import { useCallback, useEffect, useMemo, useState } from "react";

export const useMovieFilter = (movies, filter, controllers) => {
  const filteredMovies = useMemo(() => {
    const resp = filter.toLowerCase();
    return movies.filter((movie) => {
      const en = movie.nameEN.toLowerCase().indexOf(resp) !== -1;
      const ru = movie.nameRU.toLowerCase().indexOf(resp) !== -1;
      return en || ru;
    });
  }, [filter, movies?.length, controllers]);

  const controlledMovies = useMemo(() => {
    return filteredMovies.filter((movie) => {
      let res = true;
      for (let key in controllers) {
        res = controllers[key](movie[key]);
      }
      return res;
    });
  }, [filteredMovies]);

  return controlledMovies;
};

export const useMovieCount = (movies, filter, controllers) => {
  const [start, setStart] = useState(3);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let timeout = null;
    const resizeCB = (e) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.innerWidth >= 1024) {
          setStart(12);
        } else if (window.innerWidth >= 768) {
          setStart(8);
        } else {
          setStart(5);
        }
      }, 100);
    };

    resizeCB();
    window.addEventListener("resize", resizeCB);
    return () => {
      window.removeEventListener("resize", resizeCB);
    };
  }, []);

  useEffect(()=> {
    if(start > current) {
      setCurrent(start)
    }
  }, [start])

  const loadMore = useCallback(() => {
    if (start === 12) {
      setCurrent(current + 3);
    } else {
      setCurrent(current + 2);
    }
  }, [start, current]);

  const resetCurrent = useCallback(() => {
    setCurrent(start);
  }, [start]);

  return [start, current, resetCurrent, loadMore];
};
