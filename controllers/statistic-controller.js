const Statistic = require('../models/Statistic');

class StatisticController {
  generate(req, res) {
    try {

    } catch (e) {
      
    }
  }

  async getData(req, res) {
    try {
      const statisticData = await Statistic.findOne({ owner: req.user.userId });
      
      if (!statisticData) {
        const statisticDataNew = new Statistic({ owner: req.user.userId });
        await statisticDataNew.save();
        return res.json(statisticDataNew);
      }

      res.json(statisticData);
    } catch (e) {
      res.status(500).json({ message: 'Something wrong, try again!' });
    }
  }
}

module.exports = new StatisticController();