import React from 'react';
import './styles/Header.css';  // Ensure this path is correct

function Header() {
  return (
    <header className="header">
      <img src="/assets/logo.png" alt="Trust in Pawgress Logo" className="logo" />
      <nav>
        <a href="https://discord.gg/f7gWTpVZdP" target="_blank" rel="noopener noreferrer">
          <img src="/assets/telegram-icon.png" alt="Telegram" />
        </a>
        <a href="https://x.com/Dionysus3301" target="_blank" rel="noopener noreferrer">
          <img src="/assets/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://dexscreener.com/solana/eri5yvhmiuuv7rp3ddmvdqdbnjga8pvrwnby64qemoon" target="_blank" rel="noopener noreferrer">
          <img src="/assets/cmc-icon.png" alt="CoinMarketCap" />
        </a>
        <a href="https://jup.ag/swap/SOL-ERi5yvhMiUUV7rp3dDmVdqDBNJgA8pvrwnBy64QEmoon" target="_blank" rel="noopener noreferrer">
          <img src="/assets/coingecko-icon.png" alt="CoinGecko" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
