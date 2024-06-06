import * as Yup from 'yup';
class FormSchemaValidatorFactory {
  static createSchema1() {
    return Yup.object({
      title: Yup.string().required('Required'),
      file: Yup.string().required('Required'),
    });
  }
  static createSchema2() {
    const fileSchema = Yup.mixed().test(
      'fileSize',
      'File size is too large',
      (value) => {
        const val = value as File;
        return val && val.size <= 5 * 1024 * 1024; // 5 MB limit
      }
    );

    return Yup.object({
      content: Yup.string().required('Required'),
      media: Yup.array()
        .of(fileSchema)
        .min(1, 'At least one file is required')
        .required('Required'),
    });
  }
  static createSchema3() {
    const fileSchema = Yup.mixed()
      .test('fileSize', 'File size is too large', (value) => {
        const val = value as File;
        return val && val.size <= 5 * 1024 * 1024; // 5 MB limit
      })
      .required();

    return Yup.object({
      content: Yup.string().required('Required'),
      media: fileSchema,
    });
  }
  static createSchema4() {
    const fileSchema = Yup.mixed()
      .test('fileSize', 'File size is too large', (value) => {
        const val = value as File;
        return val && val.size <= 5 * 1024 * 1024; // 5 MB limit
      })
      .required();

    return Yup.object({
      name: Yup.string().required('Required'),
      image: fileSchema,
      side: Yup.string().required('Required'),
    });
  }
  static createSchema5() {
    const fileSchema = Yup.mixed()
      .test('fileSize', 'File size is too large', (value) => {
        const val = value as File;
        return val && val.size <= 5 * 1024 * 1024; // 5 MB limit
      })
      .required();

    return Yup.object({
      map: fileSchema,
    });
  }
}

export default FormSchemaValidatorFactory;
