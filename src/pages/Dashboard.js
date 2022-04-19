const Dashboard = ({ isLoggedIn }) => {
  return (
    <section className='section'>
      <h4>Hello {isLoggedIn?.name}!</h4>
    </section>
  );
};
export default Dashboard;
