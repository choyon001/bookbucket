import BannerBook from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={BannerBook}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-xl md:text-5xl font-bold">Books to freshen up your bookshelf</h1>
      
      <button className="btn btn-primary mt-5">View the Lists</button>
    </div>
  </div>
</div>
    );
};

export default Banner;