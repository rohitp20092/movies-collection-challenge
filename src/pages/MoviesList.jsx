function MoviesList({ data }) {
  return (
    <div>
      {/* <p>{JSON.stringify(data)}</p> */}
      <div>
          <button>
          <p>Episode {data.episode_id}</p>
          <h3>{data.title}</h3>
          <button>More Details</button>
          </button>
      </div>
    </div>
  );
}

export default MoviesList;
