const express = require("express");

const route = express.Router();
const StudentM = require("../models/student");

route.post("/", async(req, res) => {
    const studentm = new StudentM({
        name: req.body.name,
        student_number: req.body.student_number,
        course: req.body.course,
        year: req.body.year
    });
    try {
        const savedStudent = await studentm.save();
        res.json(savedStudent);
    } catch (err) {
        res.json({
            message: err
        })

    }

});
route.get("/", async(req, res) => {

    try {

        const {
            page,
            perPage
        } = req.query;
        const options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(perPage, 10) || 5
        }
        const studentm = await StudentM.paginate({}, options);
        res.json(studentm);

    } catch (err) {
        res.json({
            message: err
        })
    }

});

route.get('/:studentid', async(req, res) => {
    try {
        const studentm = await StudentM.findById(req.params.studentid);
        res.json(studentm);
    } catch (err) {
        res.json({
            message: err
        })

    }
});

route.delete("/:studentid", async(req, res) => {
    try {
        const studentm = await StudentM.remove({
            _id: req.params.studentid
        });
        res.json({
            message: "student removed"
        })
    } catch (err) {
        res.json({
            message: err
        })
    }

});

route.patch('/:studentid', async(req, res) => {
    try {
        const studentm = await StudentM.updateOne({
            _id: req.params.studentid
        }, {
            $set: {
                name: req.body.name,
                student_number: req.body.student_number,
                course: req.body.course,
                year: req.body.year
            }
        });

        res.json(studentm);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = route;