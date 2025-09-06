module.exports = {
  apps: [
    {
      name: 'finprime-backend',
      script: 'index.js',      // The script to run
      cwd: './Backend',        // Sets the working directory
      watch: false,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};