
function generateMarkdown(input) {

    let markDown = 
    `  
    
    ## ${input.ptitle}
    
    
    ## Name
    
    ${input.name}
    
    
    
    ## Github
    
    ${input.github}
    
    
    
    ## Description
    
    ${input.description}
    
    
    
    
    ## Table of Contents
     
    
    ## License
    
    ${input.license}
    
    
    ## Usage
    
    ${input.usage}
    
    
    ## Credits
    
    ${input.credits}
    
    
    
    ## How to Contribute
    
    ${contribute}
    `
    return markDown;
    }
    
    
    
    module.exports = generateMarkdown;