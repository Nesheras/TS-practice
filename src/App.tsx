import { RouterProvider } from "react-router-dom";

import { router } from "./Router/Router";
import { useGetProductsQuery } from "./API/API";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  console.log(useGetProductsQuery);
  return (
    <>
      <ErrorBoundary
        fallback={
          <h1 style={{ marginTop: "100px", fontSize: "50px" }}>
            Что-то пошло не так...
          </h1>
        }
      >
        <RouterProvider router={router} />
      </ErrorBoundary>
    </>
  );
}
export default App;
