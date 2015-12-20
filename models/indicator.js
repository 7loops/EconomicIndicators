var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/Indicator');

var Schema = mongoose.Schema;

var IndicatorSchema = new Schema({
    name: String,
    value:Number,
    previous:Number,
    date: { type: Date, default: Date.now },
    frequency: {
      type: String,
      enum: ['Daily', 'Monthly', 'Quarterly', 'Yearly']
    },
});

module.exports = mongoose.model('Indicator', IndicatorSchema);
