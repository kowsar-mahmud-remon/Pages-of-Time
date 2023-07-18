import { useForm } from "react-hook-form";
import { useAppSelector } from "../redux/hook";
import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookApi";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditBook = () => {
  const { id } = useParams();

  const { data: book } = useSingleBookQuery(id);

  interface IBook {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    imageUrl: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBook>();

  const { user } = useAppSelector((state) => state.user);

  const [updateBook] = useUpdateBookMutation();

  const navigate = useNavigate();

  const onSubmit = (data: IBook) => {
    const updatedBookData = {
      id: id,
      userEmail: user?.email,
      data: data,
    };
    updateBook(updatedBookData);
    navigate(`/book-details/${id}`);
    toast.success("Book updated Successfully");
  };
  return (
    <div className="">
      <p className="text-center my-14 text-5xl text-neutral">Add New Book</p>
      <div className="w-full flex justify-center">
        <div className="w-[100%] lg:w-[60%] mb-20 mx-5">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1">
                <label className="label">
                  <span className="label-text text-lg">Title</span>
                </label>
                <input
                  className="input input-bordered mb-3"
                  id="title"
                  placeholder="enter title "
                  type="text"
                  autoCapitalize="none"
                  autoComplete="title"
                  autoCorrect="off"
                  {...register("title", { required: " title is required" })}
                  defaultValue={book?.title}
                />
                {errors.title && (
                  <p className="text-error">{errors.title.message}</p>
                )}

                <label className="label">
                  <span className="label-text text-lg">Author</span>
                </label>
                <input
                  className="input input-bordered mb-3"
                  id="author"
                  placeholder="enter author "
                  type="text"
                  autoCapitalize="none"
                  autoComplete="author"
                  autoCorrect="off"
                  {...register("author", { required: " author is required" })}
                  defaultValue={book?.author}
                />
                {errors.author && (
                  <p className="text-error">{errors.author.message}</p>
                )}

                <label className="label">
                  <span className="label-text text-lg">Genre</span>
                </label>
                <input
                  className="input input-bordered mb-3"
                  id="genre"
                  placeholder="enter genre "
                  type="text"
                  autoCapitalize="none"
                  autoComplete="genre"
                  autoCorrect="off"
                  {...register("genre", { required: " genre is required" })}
                  defaultValue={book?.genre}
                />
                {errors.genre && (
                  <p className="text-error">{errors.genre.message}</p>
                )}

                <label className="label">
                  <span className="label-text text-lg">publicationDate</span>
                </label>
                <input
                  className="input input-bordered mb-3"
                  id="publicationDate"
                  placeholder="enter publicationDate "
                  type="text"
                  autoCapitalize="none"
                  autoComplete="publicationDate"
                  autoCorrect="off"
                  {...register("publicationDate", {
                    required: " publicationDate is required",
                  })}
                  defaultValue={book?.publicationDate}
                />
                {errors.publicationDate && (
                  <p className="text-error">{errors.publicationDate.message}</p>
                )}

                <label className="label">
                  <span className="label-text text-lg">imageUrl</span>
                </label>
                <input
                  className="input input-bordered mb-3"
                  id="imageUrl"
                  placeholder="enter imageUrl "
                  type="text"
                  autoCapitalize="none"
                  autoComplete="imageUrl"
                  autoCorrect="off"
                  {...register("imageUrl", {
                    required: " imageUrl is required",
                  })}
                  defaultValue={book?.imageUrl}
                />
                {errors.imageUrl && (
                  <p className="text-error">{errors.imageUrl.message}</p>
                )}
              </div>
              <button className="btn btn-primary">Add Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
