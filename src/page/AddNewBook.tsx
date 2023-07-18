import { useForm } from "react-hook-form";
import { useAppSelector } from "../redux/hook";
import { useAddBookMutation } from "../redux/features/book/bookApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddNewBook = () => {
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

  const [addBook] = useAddBookMutation();

  const navigate = useNavigate();

  const onSubmit = (data: IBook) => {
    const newBook = { ...data, userEmail: user?.email };
    addBook(newBook);
    navigate("/allbooks");
    toast.success("Book Added Successfully");
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

export default AddNewBook;
