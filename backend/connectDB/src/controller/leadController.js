const LeadModel = require('../model/leadModel');

class leadController {

    async create(req, res) {

        const lead = new LeadModel(req.body);
        await lead
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async all(req, res) {

        await LeadModel.find()

        .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }


};

module.exports = new leadController();