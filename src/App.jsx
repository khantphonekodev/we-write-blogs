import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Login from "../src/pages/Login";
import Overview from "../src/pages/Overview";
import Blog from "../src/pages/Blog";
import NotFound from "../src/pages/NotFound";
import BlogCrud from "./pages/BlogCrud";
import { GlobalStyles } from "./styles/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./features/auth/ProtectedRoutes";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate to="/blogs" />} />
            <Route path="/blogs" element={<Overview />} />
            <Route path="/blogs/:blogId" element={<Blog />} />

            <Route
              path="/blogs/:blogId/crud"
              element={
                <ProtectedRoutes>
                  <BlogCrud />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/blogs/crud"
              element={
                <ProtectedRoutes>
                  <BlogCrud />
                </ProtectedRoutes>
              }
            />
          </Route>
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Toaster position="top-center" />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
