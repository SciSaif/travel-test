module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa0a698068683ff601b33c3b6e8e0c21'),
  },
});
