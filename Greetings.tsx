import React from "react";

// Define an interface for the component's props to clearly specify that 'name' is a required property of type string.
interface Props {
	name: string;
}

//Using React.FC (Functional Component), we pass our Props interface to React.FC, which helps TypeScript
//Understand the expected props for this component.
const Greeting: React.FC<Props> = ({ name }: Props) => {
	return <div>Hello, {name}!</div>;
};
export default Greeting;
