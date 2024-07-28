import Link from "next/link";
import { resolve } from "path";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

// 클라이언트 컴포넌트에서는 metadata를 export 할 수 없다~!
export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // 이 콘솔로그는 서버쪽에서만 확인할 수 있음
  console.log("im fetching!");
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
