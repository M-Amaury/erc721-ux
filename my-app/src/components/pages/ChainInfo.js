import React from "react";
import web3 from "web3";
import {Button} from "react-bootstrap";
import { Wallet} from "react-bootstrap-icons";
import "./App.css";

class ChainInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chainId: 0,
            currentAccount: null,
            lastBlockNulber: 0,
        };
    }
    }

    connectWalletHandler = async () => {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        this.setState({ currentAccount: accounts[0] });
    }

    connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                this.setState({ currentAccount: accounts[0] });
            });
            window.ethereum.on("chainChanged", (chainId) => {
                this.setState({ chainId });
            });
            window.ethereum.on("networkChanged", (networkId) => {
                this.setState({ networkId });
            });
        }
    }

    connectWalletButton = () => {
        if (this.state.currentAccount) {
            return (
                <Button variant="outline-dark" size="sm" onClick={this.connectWalletHandler}>
                    <Wallet size={16} />
                    <span className="ms-2">{this.state.currentAccount}</span>
                </Button>
            );
        } else {
            return (
                <Button variant="outline-dark" size="sm" onClick={this.connectWalletHandler}>
                    <Wallet size={16} />
                    <span className="ms-2">Connect Wallet</span>
                </Button>
            );
        }
    }

    render() {
        return (
            <div className="ChainInfo">
                {this.connectWalletButton()}
            </div>    
        );
    }
}

export default ChainInfo;