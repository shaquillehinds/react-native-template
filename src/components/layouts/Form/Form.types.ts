import { KeyboardTypeOptions, TextStyle, ViewStyle } from 'react-native';
import { AnyObject, AnySchema } from 'yup';

export type OptionalValue<T> = {
  [key in keyof T]: T[key] | undefined;
} & T;

interface BaseFormField<T> {
  title: string;
  key: keyof T;
  validationSchema: AnySchema<T[keyof T] | undefined, AnyObject>;
  initialValue: T[keyof T];
  style?: ViewStyle;
}

export type FieldError<T> = {
  [key in keyof T]: string | undefined;
};

export interface SingleField<T> extends BaseFormField<T> {
  type?: 'single';
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  textInputStyle?: TextStyle;
}
export type HandleChange = {
  (e: React.ChangeEvent<any>): void;
  <T = string | React.ChangeEvent<any>>(
    field: T,
  ): T extends React.ChangeEvent<any>
    ? void
    : (e: string | React.ChangeEvent<any>) => void;
};
export interface CustomField<T> extends BaseFormField<T> {
  type: 'custom';
  component: (handleChange: HandleChange) => React.ReactNode;
}

export interface DoubleField<T> {
  type: 'double';
  row: [SingleField<T> | CustomField<T>, SingleField<T> | CustomField<T>];
}

export type FormField<T> = SingleField<T> | DoubleField<T> | CustomField<T>;

export type FormSubmitHandler<T> = (values: T, updatedValues: T) => void;

export interface FormLayoutProps<T> {
  fields: FormField<T>[];
  submitHandler: FormSubmitHandler<T>;
  submitButtonText?: string;
  submitButtonColor?: string;
  SubmitButton?: (props: {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  }) => JSX.Element;
  setInitialValues: React.Dispatch<React.SetStateAction<T | undefined>>;
  submitting: boolean;
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  setFieldError?: React.Dispatch<React.SetStateAction<FieldError<T>>>;
  fieldError?: FieldError<T>;
}
