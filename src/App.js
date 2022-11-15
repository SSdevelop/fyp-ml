import {
	Box,
	Button,
	Step,
	StepLabel,
	Stepper,
	Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import LinearRegressionsOne from "./pages/LinearRegressionsOne";

function App() {
	const steps = [
		"Basics of Linear Regression",
		"A session on Gradient Descent",
		"Linear Regression for two variables",
	];
	const [activeStep, setActiveStep] = useState(0);
	const handleBack = () => {
		setActiveStep((prev) => prev - 1);
	};
	const handleNext = () => {
		if (activeStep === steps.length - 1) {
			setActiveStep(0);
			return;
		}
		setActiveStep((prev) => prev + 1);
	};
	return (
		<Box sx={{ width: "100%", margin: "auto" }}>
			<Stack
				spacing={5}
				sx={{ width: "75%", margin: "auto", padding: "1em" }}
			>
				<Stepper activeStep={activeStep} alternativeLabel>
					{steps.map((label, index) => {
						return (
							<Step key={index}>
								<StepLabel>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				<Box
					sx={{
						width: "100%",
						height: "auto",
						margin: "auto",
					}}
				>
					<LinearRegressionsOne />
				</Box>
				<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
					<Button
						color="inherit"
						disabled={activeStep === 0}
						onClick={handleBack}
						sx={{ mr: 1 }}
					>
						{" "}
						Back{" "}
					</Button>
					<Button sx={{ mr: 1 }} onClick={handleNext}>
						{activeStep === steps.length - 1 ? "Reset" : "Next"}
					</Button>
				</Box>
			</Stack>
		</Box>
	);
}

export default App;
