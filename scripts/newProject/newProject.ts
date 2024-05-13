const [projectName] = process.argv.slice(2);
if (projectName) newProject();
else {
  console.log('No project name provided');
}

async function newProject() {
  const name = projectName.trim();
  console.log('executing', name);
}
