const PlayerSchema = new mongoose.Schema({ name: String, team: String, goals: Number });
module.exports = mongoose.model('Player', PlayerSchema);