import { FC } from 'react';

interface ErrorToastProps {
  message: string;
}

const ErrorToast: FC<ErrorToastProps> = ({ message }) => {
  return (
    <div className="absolute top-0 left-0 right-0 p-4">
      <div className="w-[100%] rounded-md bg-red-600 font-bold text-white p-2">
        Oops, some error: {message}
      </div>
    </div>
  );
};

export { ErrorToast };
