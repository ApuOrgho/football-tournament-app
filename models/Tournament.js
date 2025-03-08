const TournamentSchema = new mongoose.Schema({ name: String, startDate: Date, endDate: Date, teams: [String] });
module.exports = mongoose.model('Tournament', TournamentSchema);