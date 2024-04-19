import Programmer from "../models/programmer.model.js";

export const getProgrammer = async(req, res) => {
    try {
        const programmer = await Programmer.find();
        res.status(200).json(programmer);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};