import './styles/GameMaster.css';

function GameMaster() {}

export default GameMaster;

//Current Score + Best Score as states in Game Master
//Onload random assortment of Pokemon objects stored in state
//Random Set of #'s between 1-150
//Return image by inserting number into Api call
//Generate random number 1/100 chance of pulling shiny image
//{ imageUrl, clicked? }
//useEffect to pull all images onMount only
//Images get mapped to Card components
//Each card click adds that object to a clicked state array
//Master Pokemon array state is randomized
//Trigger-rerendering

//FILE STRUCTURE
//GameMaster
//COMPONENTS
//Card
//Score
