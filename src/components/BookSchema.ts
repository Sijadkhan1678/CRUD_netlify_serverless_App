import * as Yup from "yup"

export const BookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Book name must be 2 char")
    .max(20, "Book name max 20 char long")
    .required("Book name is required"),

  author: Yup.string()
    .min(4, "Author name must be 4 chars")
    .max(20, "Author name max 12 chars long")
    .required("Author name is required"),

  cover: Yup.string().required("Book Cover URL is Required")

});