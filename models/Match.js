const MatchSchema = new mongoose.Schema({ team1: String, team2: String, score1: Number, score2: Number, date: Date });
module.exports = mongoose.model('Match', MatchSchema);