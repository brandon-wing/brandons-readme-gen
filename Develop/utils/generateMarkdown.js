
function renderLicenseBadge(license) {
  if (license === 'No license required!') {
    return ``}
  else {
    
}
}

function renderLicenseLink(license) {
  if (license === 'No license required!') {
    return ``}
  else if (license === 'MIT') {
    return `License link: https://choosealicense.com/licenses/mit/`
  }
  else if (license === 'W3C') {
    return `License link: https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document`
  }
  else if (license === 'ISC') {
    return `License link: https://opensource.org/license/isc-license-txt/`
  }
  else if (license === 'AAL') {
    return `License link: https://spdx.org/licenses/AAL.html`

  }
  else if (license === 'NTP') {
    return `License link: https://opensource.org/license/ntp-license-php/`
    
  }
}


function renderLicenseSection(license) {
  if (license === 'No license required!') {
    return ``}
  else {
        return `## License: ${license}`;
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
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}


## Screenshot
  ${data.screenshot}

## Credits
  ${data.github}

## Contact Information
  ${data.contact}
        

`;
}



module.exports = generateMarkdown;
