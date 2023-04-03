

import "./App.css";
import React from "react";

import { Switch , Route } from "react-router-dom";
import NavBar from "./pages/components/NavBar";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

import BubbleSortPage from "./pages/BubbleSort";
import QuickSortPage from "./pages/QuickSort";
import SinglyLinkList from "./pages/SinglyLinkLIst";
import Dijkstra from "./pages/Dijkstra";
import Dfs from "./pages/Dfs";
import { SnackbarProvider } from "notistack";

function App() {
	return (
		<SnackbarProvider>
			<div className="App">
				<NavBar />
				<Switch>
					<Route path="/" exact component={HomePage} /> 
					<Route path="/About" exact component={AboutPage} />
					 <Route path="/bubblesort" exact component={BubbleSortPage} />
					<Route path="/quicksort" exact component={QuickSortPage} /> 
					<Route path="/singlylinklist" exact component={SinglyLinkList} />
					<Route path="/dfs" exact component={Dfs} />
					<Route path="/dijkstra" exact component={Dijkstra} />
				</Switch>
				
			</div>
		</SnackbarProvider>
	);
}

export default App;
