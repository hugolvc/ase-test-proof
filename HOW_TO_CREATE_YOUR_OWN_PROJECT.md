# How to Create Your Own Agentic Software Engineering Project

Follow this guide to set up your own Agentic Software Engineering (ASE) project based on this repository.

## 1. Clone this project
First, clone this project (`ase-test-proof`) to your local machine to serve as the foundation for your new project:
```bash
git clone https://github.com/hugolvc/ase-test-proof.git my-ase-project
cd my-ase-project
```

## 2. Clone the ASE Framework project
Next, clone the main framework repository to access the methodology, templates, and rules:
```bash
git clone https://github.com/hugolvc/agentic-software-engineering-framework.git
```

## 3. Add Framework as a Submodule
Add the cloned `agentic-software-engineering-framework` project as a submodule of your newly cloned `ase-test-proof` project. This ensures your project is strictly governed by the ASE rules:
```bash
git submodule add https://github.com/hugolvc/agentic-software-engineering-framework.git agentic-software-engineering-framework
```

## 4. Replace the Master Prompt
Open the `README.md` file in your new repository. Locate the existing master prompt in the README, and **replace the master prompt with your own master prompt** that details the requirements, goals, and rules for your specific software application. 

## 5. Start Iterating
With the setup complete and your master prompt defined, **start iterating** with your AI assistant using the ASE framework directives!
