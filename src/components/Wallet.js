import React from 'react';
import '../styles/Wallet.css';  // Ensure you have this CSS for styling

function Wallet() {
  return (
    <div className="wallet-container">
      <header className="wallet-header">
        <img src="/assets/images/logo.png" alt="Trust in Pawgress Logo" className="wallet-logo" />
      </header>
      
      <div className="transaction-section">
        <h2>Send Solana Transaction</h2>
        <form>
          <label>
            Recipient Public Key:
            <input type="text" placeholder="Enter recipient public key" />
          </label>
          <label>
            Amount (in SOL):
            <input type="number" placeholder="Enter amount" />
          </label>
          <button type="submit">Send Transaction</button>
        </form>
      </div>

      <footer className="wallet-footer">
        <nav>
          <a href="https://discord.gg/f7gWTpVZdP" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/telegram-icon.png" alt="Telegram" />
          </a>
          <a href="https://x.com/Dionysus3301" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://dexscreener.com/solana/eri5yvhmiuuv7rp3ddmvdqdbnjga8pvrwnby64qemoon" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/cmc-icon.png" alt="CoinMarketCap" />
          </a>
          <a href="https://jup.ag/swap/SOL-ERi5yvhMiUUV7rp3dDmVdqDBNJgA8pvrwnBy64QEmoon" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/coingecko-icon.png" alt="CoinGecko" />
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Wallet;
