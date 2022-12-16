import React from "react";
import Web3 from 'web3';
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Home from "./HomeButton";


function ChainInfo() {
    const [chainId, setChainId] = useState(0);
    const [blockNumber, setBlockNumber] = useState(null);
    const [account, setAccount] = useState(null);
    const [web3, setWeb3] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (chainId && chainId !== 11155111) {
          navigate("/wrongNetwork");
        }
      }, [chainId]);
  

        const connectToMetaMask = async () => {
        // Obtenir l'objet web3
        const _web3 = new Web3(window.ethereum);
        setWeb3(_web3);
    
        // Demander à l'utilisateur de se connecter à MetaMask
        await window.ethereum.enable();
    
        // Obtenir l'adresse du wallet de l'utilisateur
        const accounts = await _web3.eth.getAccounts();
        setAccount(accounts[0]);
    
        // Obtenir la ChainId
        const networkId = await _web3.eth.net.getId();
        setChainId(networkId);


        // Obtenir le numéro du dernier bloc
        const latestBlock = await _web3.eth.getBlockNumber();
        setBlockNumber(latestBlock);

   
      }; 
  
      return (
        <form>
          <h1>Informations du réseau Sepolia</h1>
          <div className="form-group">
            <label htmlFor="chain-id">ChainId</label>
            <input type="text" className="form-control" id="chain-id" value={chainId} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="block-number">Numéro du dernier bloc</label>
            <input type="text" className="form-control" id="block-number" value={blockNumber} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="account">Adresse de l'utilisateur</label>
            <input type="text" className="form-control" id="account" value={account} readOnly />
          </div>
          <Home></Home>
          {!web3 && (
            <button className="btn btn-primary" onClick={connectToMetaMask}>
              Se connecter à MetaMask
            </button>
          )}
        </form>
      );
    }

  export default ChainInfo;