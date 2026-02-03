const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const authRoutes = require('./routes/authRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

app.use(express.json());
app.use(require('./middlewares/logger'));

app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/analytics', analyticsRoutes);

app.use(require('./middlewares/errorHandler'));

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
