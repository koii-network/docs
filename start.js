const { exec } = require('child_process');

// Run spellcheck before starting Docusaurus
exec('yarn spellcheck', (error, stdout, stderr) => {
  if (error) {
    console.error(`yarn spellcheck error: ${error}`);
  }
  console.log(`${stdout}`);
  console.error(`${stderr}`);
  
  // Run Docusaurus
  exec('docusaurus start', (docusaurusError, docusaurusStdout, docusaurusStderr) => {
    if (docusaurusError) {
      console.error(`exec error: ${docusaurusError}`);
      return;
    }
    console.log(`${docusaurusStdout}`);
    console.error(`${docusaurusStderr}`);
  });
});
