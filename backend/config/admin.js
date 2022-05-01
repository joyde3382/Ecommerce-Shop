module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '56659bff136716a1f1ebc306b8ecee1e'),
  },
});
