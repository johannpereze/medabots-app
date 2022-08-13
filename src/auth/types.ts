export type SetSubmitting = (isSubmitting: boolean) => void;

export interface LoginValues {
  email: string;
  password: string;
}

// TODO: check if being used
export interface UserAttributes extends LoginValues {
  givenName: string;
  familyName: string;
}
