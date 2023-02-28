
// function renderLicenseBadge(license) {
//   if (license[0] === 'No license required!') {
//     return ``}
//   else {
//     return `https://img.shields.io/badge/red`}
// }

// function renderLicenseLink(license) {
//   if (license[0] === 'No license required!') {
//     return ``}
//   else {
//     return ` License link: https://choosealicense.com/licenses/${license}`}
// }


function renderLicenseSection(license) {
  if (license === 'No license required!') {
    return ``}
  else {
        return `## License ${license[0]}`;
    }
}

function generateMarkdown(data) {

  return `# ${data.title}

## Description
  ${data.description}

## Installation
  ${data.installationProcess}

## Usage
  ${data.usage}

${renderLicenseSection(data.license)} 


## Screenshot
  ${data.screenshot}

## Credits
  ${data.github}

## Contact Information
  ${data.contact}
        

`;
}



module.exports = generateMarkdown;
