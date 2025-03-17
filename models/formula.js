import { Schema, model, models } from 'mongoose';

const FormulaSchema = new Schema({
  creator:{
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  formula: {
    type: String,
    required: [true, 'Formula is required!'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required!'],
  }
});

const Formula = models.Formula || model("Formula", FormulaSchema);

export default Formula;