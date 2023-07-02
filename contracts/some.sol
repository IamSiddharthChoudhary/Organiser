// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity  ^0.8.18;

struct Donor {
    string name;
    uint8 age;
    string location;
    string bloodGroup;
    string healthStatus;
}

struct Acceptor {
    string name;
    uint8 age;
    string location;
    string bloodGroup;
}

contract Organiser {

    uint256 nKD = 0;
    uint256 nKA = 0;
    mapping (uint256 => address) public kidneyDonorsAdd;
    mapping (address => Donor) public kidneyDonors;
    mapping (uint256 => address) public kidneyAcceptorsAdd;
    mapping (address => Acceptor) public kidneyAcceptors;


    function registerKidneyDonor(string memory _name,address add, uint8 _age, string memory _location, string memory _bloodGroup, string memory _healtStatus) public {
 
        Donor memory d;
        d.name = _name;
        d.age = _age;
        d.location = _location;
        d.bloodGroup = _bloodGroup;
        d.healthStatus = _healtStatus;

        kidneyDonorsAdd[nKD] = add;
        kidneyDonors[add] = d;
        nKD +=1;
    }

    function registerKidneyAcceptor(string memory _name,address add, uint8 _age, string memory _location, string memory _bloodGroup) public {

        Acceptor memory d;
        d.name = _name;
        d.age = _age;
        d.location = _location;
        d.bloodGroup = _bloodGroup;

        kidneyAcceptorsAdd[nKA] = add;
        kidneyAcceptors[add] = d;
        nKA += 1;
    }


    function getAllKidneyDonors() public view returns(address[] memory){
        address[] memory values = new address[](nKD);
        for(uint256 i=0; i<nKD; i++){
            values[i] = kidneyDonorsAdd[i];
        }
        return values;
    }

    function getAllKidneyAcceptors() public view returns(address[] memory){
        address[] memory values = new address[](nKA);
        for(uint256 i=0; i<nKA; i++){
            values[i] = kidneyAcceptorsAdd[i];
        }
        return values;
    }

    function getKidneyDonorByAdd(address add) public view returns(string memory,uint8 ,string memory,string memory,string memory){
        Donor memory d = kidneyDonors[add];
        return(d.name, d.age, d.location, d.bloodGroup, d.healthStatus);
    }

    function getKidneyAcceptorByAdd(address add) public view returns(string memory,uint8 ,string memory,string memory){
        Acceptor memory d = kidneyAcceptors[add];
        return(d.name, d.age, d.location, d.bloodGroup);
    }

    function getNumberofKidneyDonors() public view returns(uint256){
        return nKD;
    }

    function getNumberofKeyneyAcceptors() public view returns(uint256){
        return nKA;
    }
}