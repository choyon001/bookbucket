import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
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
    bookId
  } = book;

  const [tag1, tag2] = tags;
  return (
    <Link to = {`/books/${bookId}`}>
      <div className="border-2 border-gray-300 rounded-lg shadow-lg p-4">
        <div className="card bg-base-100  ">
          <figure className="bg-gray-200 p-4 rounded-lg">
            <img src={image} alt="Shoes" className="h-[166px]  " />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              <div className="badge badge-secondary">
                {tag1 ? tag1 : "Not Availble"}
              </div>
              <div className="badge badge-secondary">
                {tag2 ? tag2 : "Not Availble"}
              </div>
            </h2>
            <h5 className="text-xl font-bold">
              {bookName ? bookName : "Not Availble"}
            </h5>
            <p className="font-bold">By: {author ? author : "Not Availble"}</p>
            <hr className="border-t-2 border-dashed" />
            <div className="card-actions justify-between items-center ">
              <div className="badge font-bold">{category}</div>
              <div className="badge font-bold">
                {rating}{" "}
                <span>
                  <IoIosStar />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
