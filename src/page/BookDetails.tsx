import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hook";

const BookDetails = () => {
  const { id } = useParams();

  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.user);

  const { data: book, isLoading } = useSingleBookQuery(id);

  if (isLoading) {
    return (
      <div className="w-full text-center flex justify-center my-20">
        <span className=" loading loading-spinner loading-lg text-success"></span>
      </div>
    );
  }

  const handleDeleteBook = () => {
    const data = {
      id: id,
      userEmail: user?.email,
    };

    const confirmation = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (confirmation) {
      deleteBook(data);
      navigate("/allbooks");
      toast.success("Book Deleted Successfully");
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:w-[50%] mx-5 my-10">
        <div className="card card-compact bg-base-100 shadow-xl">
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
              <Link to={`/edit-book/${book?._id}`}>
                <button className="btn bg-[#1ac1b5]">Edit Book</button>
              </Link>
              {/* <Link to={`/delete-book/${book?._id}`}> */}
              <button onClick={handleDeleteBook} className="btn bg-[#1ac1b5]">
                Delete Book
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
