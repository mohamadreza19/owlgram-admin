import * as Yup from "yup";
class FormSchemaValidatorFactory {
  static createSchema1() {
    return Yup.object({
      title: Yup.string().required("Required"),
      file: Yup.string().required("Required"),
    });
  }
  static createSchema2() {
    const fileSchema = Yup.mixed().test(
      "fileSize",
      "File size is too large",
      (value) => {
        const val = value as File;
        return val && val.size <= 5 * 1024 * 1024; // 5 MB limit
      }
    );

    return Yup.object({
      content: Yup.string().required("Required"),
      media: Yup.array()
        .of(fileSchema)
        .min(1, "At least one file is required")
        .required("Required"),
    });
  }
  static createSchema3() {
    const fileSchema = Yup.mixed()
      .test("fileSize", "File size is too large", (value) => {
        const val = value as File;
        return val && val.size <= 5 * 1024 * 1024; // 5 MB limit
      })
      .required();

    return Yup.object({
      content: Yup.string().required("Required"),
      media: fileSchema,
    });
  }
  static createSchema4() {
    const fileSchema = Yup.mixed()
      .test("fileSize", "File size is too large", (value) => {
        const val = value as File;
        return val && val.size <= 5 * 1024 * 1024; // 5 MB limit
      })
      .required();

    return Yup.object({
      name: Yup.string().required("Required"),
      image: fileSchema,
      side: Yup.string().required("Required"),
    });
  }
  static createSchema5() {
    const fileSchema = Yup.mixed()
      .test("fileSize", "File size is too large", (value) => {
        const val = value as File;
        return val && val.size <= 5 * 1024 * 1024; // 5 MB limit
      })
      .required();

    return Yup.object({
      map: fileSchema,
    });
  }
  static createSchema6() {
    const socialNetworkLinkSchema = Yup.object().shape({
      social_id: Yup.string().required("Social ID is required"),
      link: Yup.string().test("is-valid-url", function (value) {
        const { path, createError } = this;
        const { social_id } = this.parent; // Access the social_id field from the current object

        // Check if the value is a valid URL
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        const isValidUrl = urlPattern.test(value as string);

        if (!value) {
          return true;
        } else
          return isValidUrl
            ? true
            : createError({
                path,
                message: `${social_id}Link must be a valid URL`,
              });
      }),
    });
    return Yup.object({
      address: Yup.string().required(),
      lat: Yup.string().required(),
      long: Yup.string().required(),
      tel: Yup.string().required(),
      socialNetworks: Yup.array().of(socialNetworkLinkSchema),
    });
  }
  static createSchema7() {
    const fileSchema = Yup.mixed()
      .test("fileSize", "File size is too large", (value) => {
        const val = value as File;
        return val && val.size <= 5 * 1024 * 1024; // 5 MB limit
      })
      .required();

    return Yup.object({
      product: Yup.string().required(),
      os_name: Yup.string().required(),
      link: Yup.string().test("is-valid-url", function (value) {
        const { path, createError } = this;
        // Access the social_id field from the current object

        // Check if the value is a valid URL
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        const isValidUrl = urlPattern.test(value as string);

        if (!value) {
          return true;
        } else
          return isValidUrl
            ? true
            : createError({
                path,
                message: `Link must be a valid URL`,
              });
      }),
      image: fileSchema,
    });
  }
  static createSchema8() {
    const fileSchema = Yup.mixed()
      .test("fileSize", "File size is too large", (value) => {
        const val = value as File;
        return val && val.size <= 5 * 1024 * 1024; // 5 MB limit
      })
      .required();

    return Yup.object({
      content: Yup.string().required(),
      subject: Yup.string().required(),
      email: Yup.string().email().required(),
      department_id: Yup.string().required(),
      file: fileSchema,
    });
  }
  static createSchema9() {
    return Yup.object({
      answer: Yup.string().required(),
      question: Yup.string().required(),
    });
  }
}

export default FormSchemaValidatorFactory;
