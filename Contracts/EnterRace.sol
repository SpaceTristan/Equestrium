pragma solidity ^0.8.0;

contract Race {

    mapping(uint256 => uint256) public prize_pool;


    //Place Bet function
    function placeBet(uint256 betSize, uint256 marbleID, uint256 raceID) public external {
        require(betSize in (1, 0.1, 0.01), "Bet sizes can only be 1, 0.1, 0.01.")
        require(ownerOf(marbleID) == msg.sender, "This isn't your marble.")
        require(raceID exists, "This race doesn't exist. Please try another.")
        require(stakes(raceID) == betSize, "These aren't the correct stakes. Please select another race.")

        prize_pool[raceID] += betSize;


        //user places minimum bet of .01 ether (select from list of options )
        //user owns the marble they are placing the bet on
    }

    //Enter Functions
    function enterMarble() private {
        //Function will enter marble
        //charge fee that goes to the dApp
        //raceID

    }

    // function raceWin() private {
    //     //Distribute the winnings

    // }

    function finishRace() onlyOwner { //or authorized smart contract aka chainlink vrf is allowed to call this function
        Select winner
        release funds in pool variable to winner
        reset pool number and funds
    }

}
