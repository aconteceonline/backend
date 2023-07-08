
const mongoose = require('../config/mongooseConnect');
const Schema = mongoose.Schema;

const LeadSchema = new Schema({

    id: {},
    nmComp: { type: String, rquired: true },
    celComp: { type: String, rquired: true },
    dtNscComp: { type: String },
    origComp: { type: String },
    indComp: { type: String },
    nmIndic: { type: String },
    contatoInd: { type: String },
    escrituraCPF: { type: String },
    origRenda: { type: String },
    rendaBruta: { type: String },
    saldoFGTS: { type: String },
    vrSinal: { type: String },
    fincAtivo: { type: String },
    qtdParcelas: { type: String },
    vlrParcela: { type: String },
    irAtualizado: { type: String },
    tpImovel: { type: String },
    sitImovel: { type: String },
    regImovel: { type: String },
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('lead', LeadSchema)