import Container from "./_components/container";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

type Props = {
  children: React.ReactNode
};

const BrowseLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>
          {children}
        </Container>
      </div>
    </>
  );
};
export default BrowseLayout;
