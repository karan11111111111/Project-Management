import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import IssueDetails from './pages/IssueDetails/IssueDetails';
import Subscription from './pages/Subscription/Subscription';
import Auth from './pages/Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './Redux/Auth/Action'; // Adjust the path according to your project structure
import { fetchProjects } from './Redux/Project/Action';
import UpgradeSuccess from './pages/Subscription/UpgradeSuccess';
import AcceptInvitation from './pages/Project/AcceptInvitation';

function App() {
  const dispatch = useDispatch(); // Correctly declare dispatch with const
  const {auth} = useSelector(store => store)

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchProjects({}))
  },[dispatch],[auth.jwt]); // Ensure dispatch is included in the dependency array

  console.log(auth)

  return (
    <>
      {auth.user ? (
        <div>
          <Navbar />
          <Routes>
            {/* routing from one page to another */}
            <Route path='/' element={<Home />} />
            <Route path='/project/:id' element={<ProjectDetails />} />
            <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
            <Route path='/upgrade_plan' element={<Subscription />} />
            <Route path='/upgrade_plan/success' element={<UpgradeSuccess />} />
            <Route path='/accept_invitaion' element={<AcceptInvitation/>} />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
