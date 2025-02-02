import React, { useState } from 'react';
import { FormInput } from '../components/auctionSystem/SignInUser/FormInput';
import { SocialSignInButton } from '../components/auctionSystem/SignInUser/SocialSignInButton';

const userInputs = [
    { label: "Full Name", placeholder: "Enter your Full Name here", type: "text" },
    { label: "Email", placeholder: "Enter your Email here", type: "email" },
    { label: "Password", placeholder: "Enter your Password", type: "password" },
    { label: "Confirm Password", placeholder: "Confirm your password", type: "password" },
    { label: "Phone Number", placeholder: "Enter your Phone Number", type: "tel" },
    { label: "Address", placeholder: "Enter your Address", type: "text", isTextArea: true },
];

const bankOfficerSteps = [
    {
        title: "Personal Information",
        inputs: [
            { label: "Full Name", placeholder: "Enter your Full Name here", type: "text" },
            { label: "Email", placeholder: "Enter your Email here", type: "email" },
            { label: "Phone Number", placeholder: "Enter your Phone Number", type: "tel" },
            { label: "Address", placeholder: "Enter your Address", type: "text" },
        ],
    },
    {
        title: "Bank Details",
        inputs: [
            { label: "Bank Branch", placeholder: "Enter your Bank Branch" },
            { label: "Employee ID", placeholder: "Enter your Employee ID" },
            { label: "Position", placeholder: "Enter your Position" },
        ],
    },
    {
        title: "Verification",
        inputs: [
            { label: "Upload ID Proof", placeholder: "Upload your ID Proof", type: "file" },
            { label: "OTP Verification", placeholder: "Enter the OTP sent to your phone" },
        ],
    },
    {
        title: "Confirmation",
        inputs: [],
    },
];

const socialButtons = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bc5b28e34b89399a5181e0b1ad025dca906bce676746acf663a21997d16f714?placeholderIfAbsent=true&apiKey=2b64ceff962d4ae184f534c4b0acd108", text: "Sign in with Google" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffe4e42a43bb56a2ba547b9efe4b4b55da2566487fabe8ea05c325740412c865?placeholderIfAbsent=true&apiKey=2b64ceff962d4ae184f534c4b0acd108", text: "Sign in with Facebook" },
];

export default function SignUpPage() {
    const [userType, setUserType] = useState("User");
    const [currentStep, setCurrentStep] = useState(0);
    const [formErrors, setFormErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
    });

    const handleUserTypeChange = (type) => {
        setUserType(type);
        setCurrentStep(0); // Reset progress when switching user type
    };

    const handleNextStep = () => {
        if (currentStep < bankOfficerSteps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        // Validate Full Name
        if (!/^[a-zA-Z\s]+$/.test(formInputs[0].value)) {
            errors.fullName = "Name should contain only characters";
            isValid = false;
        }

        // Validate Email
        if (!/\S+@\S+\.\S+/.test(formInputs[1].value)) {
            errors.email = "Email should be a valid email address";
            isValid = false;
        }

        // Validate Password
        if (formInputs[2].value.length < 8) {
            errors.password = "Password should be at least 8 characters";
            isValid = false;
        }

        // Validate Phone Number (Only integers)
        if (!/^\d+$/.test(formInputs[4].value)) {
            errors.phoneNumber = "Phone number should contain only integers";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const formInputs = userType === "User" ? userInputs : bankOfficerSteps[currentStep].inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form is valid, submit data");
            // Proceed with the form submission
        } else {
            console.log("Form has errors");
        }
    };

    return (
        <div className="flex flex-col bg-white">
            <div className=" bg-sky-900">
                <div className="flex flex-col md:flex-row gap-5 w-full h-screen">
                    <div className="flex-1">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57ed00fb59b0d5ec8f866487e16fb2230468a19ca5372a71ec95b96a24cd40f6?placeholderIfAbsent=true&apiKey=2b64ceff962d4ae184f534c4b0acd108"
                            alt="Hero section decorative image"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="bg-white p-8 rounded-3xl w-full md:w-[600px] max-w-full mx-auto overflow-y-auto">
                        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                            <h1 className="text-4xl font-semibold mb-10">Create your Free Account</h1>
                            <div className="flex gap-8 mb-10">
                                {/* User Type Buttons */}
                                <button
                                    type="button"
                                    onClick={() => handleUserTypeChange("User")}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${userType === "User"
                                            ? "text-black font-semibold bg-blue-100"
                                            : "text-gray-500"
                                        }`}
                                >
                                    <div
                                        className={`w-4 h-4 rounded-full ${userType === "User" ? "bg-blue-800" : "bg-gray-300"
                                            }`}
                                    ></div>
                                    User
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleUserTypeChange("Bank Officer")}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${userType === "Bank Officer"
                                            ? "text-black font-semibold bg-blue-100"
                                            : "text-gray-500"
                                        }`}
                                >
                                    <div
                                        className={`w-4 h-4 rounded-full ${userType === "Bank Officer" ? "bg-blue-800" : "bg-gray-300"
                                            }`}
                                    ></div>
                                    Bank Officer
                                </button>
                            </div>

                            {/* Breadcrumb Progress Bar for Bank Officer */}
                            {userType === "Bank Officer" && (
                                <div className="w-full mb-6">
                                    <div className="flex justify-between mb-2">
                                        {bankOfficerSteps.map((step, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div
                                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= index
                                                            ? "bg-sky-900 text-white"
                                                            : "bg-gray-300 text-gray-500"
                                                        }`}
                                                >
                                                    {index + 1}
                                                </div>
                                                <span
                                                    className={`text-sm mt-2 ${currentStep === index ? "text-sky-900" : "text-gray-500"
                                                        }`}
                                                >
                                                    {step.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="relative h-2 bg-gray-300 rounded-full">
                                        <div
                                            className="absolute top-0 left-0 h-2 bg-sky-900 rounded-full"
                                            style={{
                                                width: `${((currentStep + 1) / bankOfficerSteps.length) * 100}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            )}

                            {/* Render Input Fields */}
                            {formInputs.map((input, index) => (
                                <div key={index} className="w-full mb-4">
                                    <label>{input.label}</label>
                                    <input
                                        type={input.type}
                                        className={`w-full p-3 border rounded-md ${formErrors[input.label.toLowerCase()] ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder={input.placeholder}
                                        value={input.value}
                                        onChange={(e) => {
                                            formInputs[index].value = e.target.value;
                                        }}
                                    />
                                    {formErrors[input.label.toLowerCase()] && (
                                        <span className="text-red-500 text-sm">{formErrors[input.label.toLowerCase()]}</span>
                                    )}
                                </div>
                            ))}

                            {/* Next Button for Bank Officer */}
                            {userType === "Bank Officer" && currentStep < bankOfficerSteps.length - 1 && (
                                <button
                                    type="button"
                                    onClick={handleNextStep}
                                    className="px-8 py-3 mt-10 text-xl font-medium text-white bg-sky-900 rounded-lg"
                                >
                                    Next
                                </button>
                            )}

                            {/* Final Submit Button */}
                            {userType === "Bank Officer" && currentStep === bankOfficerSteps.length - 1 && (
                                <button
                                    type="submit"
                                    className="px-8 py-3 mt-10 text-xl font-medium text-white bg-sky-900 rounded-lg"
                                >
                                    Submit
                                </button>
                            )}

                            {userType === "User" && (
                                <button
                                    type="submit"
                                    className="px-8 py-3 mt-10 text-xl font-medium text-white bg-sky-900 rounded-lg"
                                >
                                    Create Account
                                </button>
                            )}

                            <div className="mt-6">
                                <span className="text-gray-500">Already have an account?</span>{" "}
                                <button type="button" className="text-sky-900">
                                    Log in
                                </button>
                            </div>

                            <div className="mt-8 text-gray-500">- OR -</div>

                            <div className="flex gap-4 mt-6">
                                {socialButtons.map((button, index) => (
                                    <SocialSignInButton key={index} {...button} />
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
