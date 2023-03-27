import { Route, Routes, Navigate } from "react-router-dom";
import Addcandidate from "./components/Addcandidate";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import CandidateList from './candidateList';
import CandidateCard from './CandidateCard';
function App() {
	const user = localStorage.getItem("access_token");

	return (
		<Routes>
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
            <Route path="/home" exact element={<home />} />
			<Route path="/candidateCard" exact element={<CandidateCard/>} />
			<Route path="/candidateList" exact element={<CandidateList/>} />
			<Route path="/addcandidate" element={<Addcandidate />} />
		</Routes>
	);
}

export default App;




