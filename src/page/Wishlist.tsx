import { Link } from "react-router-dom";
import { useGetAllBooksWishlistQuery } from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hook";

interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  imageUrl: string;
  userEmail: string;
}
const Wishlist = () => {
  const { user } = useAppSelector((state) => state.user);

  const { data, isLoading } = useGetAllBooksWishlistQuery(user?.email);

  if (isLoading) {
    return (
      <div className="w-full text-center flex justify-center my-20">
        <span className=" loading loading-spinner loading-lg text-success"></span>
      </div>
    );
  }

  return (
    <div className="">
      <p className="text-center my-14 text-5xl text-neutral">Your Wishlist</p>
      <div className="mx-5 my-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {data?.data.map((book: IBook) => (
          <div
            key={book?._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-full h-[400px]"
                src={book?.imageUrl}
                alt="Book Image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book?.title}</h2>
              <p className=" text-lg">
                Author: <span className=" font-semibold">{book?.author}</span>
              </p>
              <p className=" text-lg">
                Genre: <span className=" font-semibold">{book?.genre}</span>
              </p>
              <p className=" text-lg">
                publication Date:{" "}
                <span className=" font-semibold">{book?.publicationDate}</span>
              </p>
              <div className="card-actions justify-center mt-5">
                <Link to={`/book-details/${book?._id}`}>
                  <button className="btn bg-[#1ac1b5]">Book Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
