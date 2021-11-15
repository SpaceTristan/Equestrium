pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract OwnHorse is ERC721, Ownable {

    function mint(address _to, uint256 _tokenId, string calldata _uri) external onlyOwner {
    super._mint(_to, _tokenId);
    super._setTokenUri(_tokenId, _uri);
  }

  function _transfer(address _from, address _to, uint256 _tokenId) private {
    ownerHorseCount[_to] = ownerHorseCount[_to].add(1);
    ownerHorseCount[msg.sender] = ownerHorseCount[msg.sender].sub(1);
    horseToOwner[_tokenId] = _to;
    emit Transfer(_from, _to, _tokenId);
  }

}