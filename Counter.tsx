import React, { Component } from "react";

// Step 1: Define an interface for the component's props, but the Counter component doesn't receive any prop
// so the interface is empty.
interface CounterProps {}

// Step 2: Define an interface that specifies that 'count' is a required property of type number.
interface CounterState {
	count: number;
}

// Step 3: Extend with React.Component and pass our CounterProps and CounterState
// interfaces as type arguments. This tells TypeScript what props the component
// expects and what shape its state will have.
class Counter extends Component<CounterProps, CounterState> {
	// Step 4: We explicitly annotate the 'state' property with our CounterState interface.
	// This ensures that 'count' is treated as a number and helps catch errors if we try to assign a different type to it.
	state: CounterState = {
		count: 0,
	};

	increment = () => {
		// TypeScript now understands that this.state will have a 'count' property of type number,
		// and this.setState expects an object conforming to the CounterState structure.
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div>
				<p>Count: {this.state.count}</p>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

export default Counter;
