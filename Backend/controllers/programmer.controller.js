import Programmer from "../models/programmer.model.js";

export const getProgrammer = async (req, res) => {
    try {
        const programmer = await Programmer.find();
        res.status(200).json(programmer);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const addProgrammer = async (req, res) => {
    try {
        const { name, about, born, address, parents, education, awards, img } = req.body;

        const newPro = new Programmer({ name, about, born, address, parents, education, awards, img });
        await newPro.save();
        res.status(201).json({
            message: "New programmer added successfully",
            pro: newPro
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}