import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  const queryClient = new QueryClient({});
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
export default App;
