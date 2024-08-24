import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [];
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
