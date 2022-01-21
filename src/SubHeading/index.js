import React from "react";
import "./styles.css";
// className="subHead"
function SubHeading({ weekId, weekTopic }) {
	return (
		<div>
			<h2>WEEK {weekId}</h2>
			<p className="topic-title">{weekTopic}</p>
		</div>
	);
}

export default SubHeading;

