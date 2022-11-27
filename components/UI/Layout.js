import SocialsSidebar from './SocialsSidebar';

const Layout = ({ children }) => {
  // Applies social sidebar to all pages
  return (
    <>
      <>{children}</>
      <SocialsSidebar />
    </>
  );
};

export default Layout;
