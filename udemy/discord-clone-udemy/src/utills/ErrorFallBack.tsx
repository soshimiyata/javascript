import { FallbackProps } from "react-error-boundary";

export const ErrorFallBack = ( { error , resetErrorBoundary }: FallbackProps) => { 
  // replaceErrorBoundary() を呼び出してエラー境界をリセットし、レンダリングを再試行します。
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}