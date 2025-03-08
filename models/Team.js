const TeamSchema = new mongoose.Schema({ name: String, points: Number, matchesPlayed: Number });
module.exports = mongoose.model('Team', TeamSchema);