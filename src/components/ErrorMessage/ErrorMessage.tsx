interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = "Oops! Something went wrong. Please try again later." }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;

