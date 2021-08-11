const sequelize = require('../config/connection');
const { User, Job } = require('../models');

const userData = require('./userData.json');
const jobsData = require('./jobsData.json');

//Seed DB
const seedDatabase = async () => {

  await sequelize.sync({ force: true });
  console.log('\n...DB sucessful...\n');

  const userJobs = await Job.bulkCreate(jobsData);
  console.log('\n...jobs sucessful..\n');

  for (const user of userData) {
    await User.bulkCreate({
      ...user,
      job_id: userJobs[Math.floor(Math.random() * userJobs.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
