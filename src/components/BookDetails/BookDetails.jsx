import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((b) => b.bookId === id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
return (
  <div className="flex flex-col md:flex-row justify-center items-stretch mt-10 mb-10 gap-8">
    {/* Left Side */}
    <div className="w-full md:w-1/2 flex justify-center items-center bg-slate-300 p-6 rounded-lg">
      <img
        src={image}
        alt={bookName}
        className="w-3/4 object-cover rounded-lg"
      />
    </div>

    {/* Right Side */}
    <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{bookName}</h1>
      <p className="text-lg mb-2 text-gray-700">by {author}</p>
      <p className="mb-2"><span className="font-semibold">Category:</span> {category}</p>
      <p className="mb-2"><span className="font-semibold">Tags:</span> {tags?.join(", ")}</p>
      <p className="mb-2"><span className="font-semibold">Publisher:</span> {publisher}</p>
      <p className="mb-2"><span className="font-semibold">Year:</span> {yearOfPublishing}</p>
      <p className="mb-2"><span className="font-semibold">Pages:</span> {totalPages}</p>
      <p className="mb-2"><span className="font-semibold">Rating:</span> {rating}</p>
      <p className="py-4">{review}</p>
      <div className="flex gap-4">
        <button className="btn btn-primary w-fit">Read</button>
      <button className="btn btn-primary w-fit">WishList</button>
      </div>
    </div>
  </div>
);

};

export default BookDetails;
