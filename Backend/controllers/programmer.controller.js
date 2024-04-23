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

export const editProgrammer = async (req, res) => {
    try {
        const id = req.body.id; // Assuming the programmer's ID is passed in the URL parameters
        const { name, about, born, address, parents, education, awards, img } = req.body.formData;

        // Find the programmer by ID and update it
        const updatedProgrammer = await Programmer.findOneAndUpdate(
            { _id: id }, // Filter
            { $set: { name, about, born, address, parents, education, awards, img } }, // Update
            { new: true } // Return the modified document
        );

        // If programmer not found, return 404 Not Found
        if (!updatedProgrammer) {
            return res.status(404).json({ message: "Programmer not found" });
        }

        // Send a success response
        res.status(200).json({
            message: "Programmer updated successfully",
            pro: updatedProgrammer
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const dropProgrammer = async (req, res) => {
    try {
        const { id } = req.body; // Assuming the programmer's ID is passed in the URL parameters

        // Find the programmer by ID and delete it
        const deletedProgrammer = await Programmer.findByIdAndDelete(id);

        // If programmer not found, return 404 Not Found
        if (!deletedProgrammer) {
            return res.status(404).json({ message: "Programmer not found" });
        }

        // Send a success response
        res.status(200).json({
            message: "Programmer deleted successfully",
            pro: deletedProgrammer
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
