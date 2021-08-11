//require all tables

const User = require('./User');
const Job = require('./Job');

User.hasMany(Job, {
    foreignKey: 'job_id',
});

Job.belongsTo(User, {
    foreignKey: 'user_id'
});

//export user jobs and applied
module.exports = { User, Job};