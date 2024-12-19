import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Progress } from "../../utils/Types";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BreadCrumb from "./BreadCrumb";
import BMICalculator from "./BmiCalculator";

const ProgressMonitor = () => {
    const URL = import.meta.env.VITE_SERVER_URL;
    const [progress, setProgress] = useState<Progress[]>([]);

    const [bmi, setBmi] = useState<number | null>(null);

    const [weightUnit, setWeightUnit] = useState("kg"); // Weight units: kg or lbs
    const [chestUnit, setChestUnit] = useState("cm"); // Chest units: cm or inches
    const [runTimeUnit, setRunTimeUnit] = useState("seconds"); // Run Time units: seconds or minutes

    // Fetch progress data on component mount
    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await axios.get(`${URL}/progress`, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("authToken")}`,
                    },
                });
                setProgress(response.data);
            } catch (error) {
                toast.error("Error fetching data, please try again.");
                console.error("Error fetching progress:", error);
            }
        };

        fetchProgress();
    }, []);

    // Validation schema using Yup
    const validationSchema = Yup.object({
        bmi: Yup.number()
            .required("BMI is required"),
        weight: Yup.number()
            .required("Weight is required")
            .positive("Weight must be a positive number"),
        chest: Yup.number()
            .required("Chest measurement is required")
            .positive("Chest measurement must be positive"),
        waist: Yup.number().required("Waist size is required").positive("Waist measurement must be positive"),
        runTime: Yup.number()
            .required("Run Time is required")
            .positive("Run Time must be a positive number"),
        liftingWeight: Yup.number().required("Current Lifting Weight is required").positive("Lifting weight must be positive"),
    });

    // Handle form submission with Formik
    const handleSubmit = async (values: any, { resetForm }: any) => {
        // Convert units to standard format before submission (kg, cm, seconds)
        const bmi = values.bmi
        const weight = values.weight;
        const chest = values.chest;
        const waist = values.waist;
        const runTime = values.runTime;
        const liftingWeight = values.liftingWeight;

        try {
            const response = await axios.post(
                `${URL}/progress`,
                {
                    bmi,
                    bodyMeasurements: {
                        weight,
                        weightUnit: weightUnit,
                        chest,
                        chestUnit, // Include the unit for chest
                        waist,
                        waistUnit: chestUnit,  // Include the unit for waist
                    },
                    performanceMeasurements: {
                        runTime,
                        runTimeUnit, // Include the unit for runTime
                        liftingWeight,
                        liftingWeightUnit: weightUnit, // Include the unit for liftingWeight
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("authToken")}`,
                    },
                }
            );
            setProgress([...progress, response.data]);
            resetForm();
            setBmi(null);
            toast.success("Progress added successfully!");
        } catch (error) {
            toast.error("Error adding progress, please try again.");
            console.error("Error adding progress:", error);
        }
    };


    return (
        <>
            <BreadCrumb name="Progress Tracker" route="progress-track" />

            <div className="max-w-3xl mx-auto p-6 mt-8 bg-gray-100 rounded-lg shadow-md">
                {/* Add Progress Form */}
                <BMICalculator setBmi={setBmi} />


                <Formik
                    initialValues={{
                        bmi: "",
                        weight: "",
                        chest: "",
                        waist: "",
                        runTime: "",
                        liftingWeight: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="flex flex-col space-y-6">

                            {/* BMI Input */}
                            <div className="flex flex-col">
                                <label className="mb-2 text-gray-700 font-medium">BMI</label>
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
                                    <Field
                                        type="number"
                                        name="bmi"
                                        placeholder={`BMI`}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                    />
                                </div>
                                <ErrorMessage
                                    name="bmi"
                                    component="div"
                                    className="text-sm text-red-600 mt-1"
                                />
                            </div>

                            {/* Weight Input */}
                            <div className="flex flex-col">
                                <label className="mb-2 text-gray-700 font-medium">Weight</label>
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
                                    <Field
                                        type="number"
                                        name="weight"
                                        placeholder={`Weight (${weightUnit})`}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                    />
                                    <select
                                        value={weightUnit}
                                        onChange={(e) => setWeightUnit(e.target.value)}
                                        className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white text-gray-700"
                                    >
                                        <option
                                            value="kg"
                                            className="py-2 px-4 hover:bg-blue-100 text-gray-800"
                                        >
                                            kg
                                        </option>
                                        <option
                                            value="lbs"
                                            className="py-2 px-4 hover:bg-blue-100 text-gray-800"
                                        >
                                            lbs
                                        </option>
                                    </select>
                                </div>
                                <ErrorMessage
                                    name="weight"
                                    component="div"
                                    className="text-sm text-red-600 mt-1"
                                />
                            </div>

                            {/* Chest Input */}
                            <div className="flex flex-col">
                                <label className="mb-2 text-gray-700 font-medium">Chest</label>
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
                                    <Field
                                        type="number"
                                        name="chest"
                                        placeholder={`Chest (${chestUnit})`}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                    />
                                    <select
                                        value={chestUnit}
                                        onChange={(e) => setChestUnit(e.target.value)}
                                        className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white text-gray-700"
                                    >
                                        <option
                                            value="cm"
                                            className="py-2 px-4 hover:bg-blue-100 text-gray-800"
                                        >
                                            cm
                                        </option>
                                        <option
                                            value="inches"
                                            className="py-2 px-4 hover:bg-blue-100 text-gray-800"
                                        >
                                            inches
                                        </option>
                                    </select>
                                </div>
                                <ErrorMessage
                                    name="chest"
                                    component="div"
                                    className="text-sm text-red-600 mt-1"
                                />
                            </div>

                            {/* Waist Input */}
                            <div className="flex flex-col">
                                <label className="mb-2 text-gray-700 font-medium">Waist</label>
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
                                    <Field
                                        type="number"
                                        name="waist"
                                        placeholder={`Waist (${chestUnit})`} // Waist unit will follow chest unit
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                    />
                                    <select
                                        value={chestUnit} // Use chestUnit for waist as they share the same unit options
                                        onChange={(e) => setChestUnit(e.target.value)} // Update chestUnit for both chest and waist
                                        className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white text-gray-700"
                                    >
                                        <option
                                            value="cm"
                                            className="py-2 px-4 hover:bg-blue-100 text-gray-800"
                                        >
                                            cm
                                        </option>
                                        <option
                                            value="inches"
                                            className="py-2 px-4 hover:bg-blue-100 text-gray-800"
                                        >
                                            inches
                                        </option>
                                    </select>
                                </div>
                                <ErrorMessage
                                    name="waist"
                                    component="div"
                                    className="text-sm text-red-600 mt-1"
                                />
                            </div>


                            {/* Run Time Input */}
                            <div className="flex flex-col">
                                <label className="mb-2 text-gray-700 font-medium">Running Time</label>
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
                                    <Field
                                        type="number"
                                        name="runTime"
                                        placeholder={`Running Time (${runTimeUnit})`}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                    />
                                    <select
                                        value={runTimeUnit}
                                        onChange={(e) => setRunTimeUnit(e.target.value)}
                                        className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white text-gray-700"
                                    >
                                        <option
                                            value="seconds"
                                            className="py-2 px-4 hover:bg-blue-100 text-gray-800"
                                        >
                                            seconds
                                        </option>
                                        <option
                                            value="minutes"
                                            className="py-2 px-4 hover:bg-blue-100 text-gray-800"
                                        >
                                            minutes
                                        </option>
                                    </select>
                                </div>
                                <ErrorMessage
                                    name="runTime"
                                    component="div"
                                    className="text-sm text-red-600 mt-1"
                                />
                            </div>

                            {/* Lifting Weight Input */}
                            <div className="flex flex-col">
                                <label className="mb-2 text-gray-700 font-medium">Lifting Weight</label>
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
                                    <Field
                                        type="number"
                                        name="liftingWeight"
                                        placeholder={`Lifting Weight (${weightUnit})`} // Lifting weight unit will follow weightUnit
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                    />
                                    <select
                                        value={weightUnit} // Use weightUnit for lifting weight
                                        onChange={(e) => setWeightUnit(e.target.value)} // Update weightUnit for both weight and lifting weight
                                        className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white text-gray-700"
                                    >
                                        <option
                                            value="kg"
                                            className="py-2 px-4 hover:bg-blue-100 text-gray-800"
                                        >
                                            kg
                                        </option>
                                        <option
                                            value="lbs"
                                            className="py-2 px-4 hover:bg-blue-100 text-gray-800"
                                        >
                                            lbs
                                        </option>
                                    </select>
                                </div>
                                <ErrorMessage
                                    name="liftingWeight"
                                    component="div"
                                    className="text-sm text-red-600 mt-1"
                                />
                            </div>


                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-6 bg-teal-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-200"
                            >
                                Submit Progress
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* Progress Monitoring Table */}
            <div className="mt-12 p-6">
                <h2 className="text-2xl font-semibold mb-4">Progress Tracker</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="px-4 py-2 text-left">Date</th>
                                <th className="px-4 py-2 text-left">BMI</th>
                                <th className="px-4 py-2 text-left">Weight</th>
                                <th className="px-4 py-2 text-left">Chest</th>
                                <th className="px-4 py-2 text-left">Waist</th>
                                <th className="px-4 py-2 text-left">Running Time</th>
                                <th className="px-4 py-2 text-left">Lifting Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {progress.map((entry, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-4 py-2">{entry.createdAt}</td>
                                    <td className="px-4 py-2">{entry.bmi}</td>
                                    <td className="px-4 py-2">{entry.bodyMeasurements?.weight} {entry.bodyMeasurements?.weightUnit}</td>
                                    <td className="px-4 py-2">{entry.bodyMeasurements?.chest} {entry.bodyMeasurements?.chestUnit}</td>
                                    <td className="px-4 py-2">{entry.bodyMeasurements?.waist} {entry.bodyMeasurements?.waistUnit}</td>
                                    <td className="px-4 py-2">{entry.performanceMetrics?.runTime} {entry.performanceMetrics?.runTimeUnit} </td>
                                    <td className="px-4 py-2">{entry.performanceMetrics?.liftingWeight} {entry.performanceMetrics?.liftingWeightUnit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ProgressMonitor;
