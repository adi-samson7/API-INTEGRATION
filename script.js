let allCoins = [];
let filteredCoins = [];
let isSearching = false;
let lastSearchQuery = '';
let searchTimeout;
let showingMore = false;

function getCurrencySymbol(currency) {
  if (currency === 'usd') return '$';
  if (currency === 'eur') return '€';
  if (currency === 'inr') return '₹';
  return '';
}

async function fetchCryptoData() {
  const currency = document.getElementById('currency').value;
  const symbol = getCurrencySymbol(currency);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch crypto data.");

    allCoins = await response.json();

    if (lastSearchQuery !== '') {
      isSearching = true;
      filteredCoins = allCoins.filter(coin =>
        coin.name.toLowerCase().includes(lastSearchQuery)
      );

      if (filteredCoins.length === 0) {
        document.getElementById('cryptoTable').innerHTML =
          `<p style="text-align:center;">No matches found.</p>`;
        toggleShowMoreButton(false);
      } else {
        renderTable(filteredCoins, symbol, currency);
        toggleShowMoreButton(filteredCoins.length > 10);
      }
    } else {
      isSearching = false;
      filteredCoins = [];
      renderTable(allCoins, symbol, currency);
      toggleShowMoreButton(true);
    }

  } catch (error) {
    let message = error.message;
    if (message === "Failed to fetch") {
      message += " — check your internet or rate limit.";
    }
    document.getElementById('cryptoTable').innerHTML =
      `<p>Error fetching data: ${message}</p>`;
    toggleShowMoreButton(false);
    console.error("Fetch error:", error);
  }
}

function renderTable(data, symbol, currency) {
  const coinsToShow = showingMore ? data.slice(0, 50) : data.slice(0, 10);

  let tableHTML = `
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price (${currency.toUpperCase()})</th>
          <th>Market Cap</th>
          <th>24h Change</th>
        </tr>
      </thead>
      <tbody>
  `;

  coinsToShow.forEach((coin) => {
    const index = allCoins.findIndex(c => c.id === coin.id);
    const number = index >= 0 ? index + 1 : '?';

    const change = coin.price_change_percentage_24h;
    const hasChange = change !== null && change !== undefined;
    const changeDisplay = hasChange ? `${change.toFixed(2)}%` : 'N/A';
    const changeClass = hasChange ? (change >= 0 ? 'green' : 'red') : 'neutral';

    tableHTML += `
      <tr>
        <td>${number}</td>
        <td><img src="${coin.image}" width="20" style="vertical-align: middle;" /> ${coin.name}</td>
        <td>${symbol}${coin.current_price.toLocaleString()}</td>
        <td>${symbol}${coin.market_cap.toLocaleString()}</td>
        <td class="${changeClass}">${changeDisplay}</td>
      </tr>
    `;
  });

  tableHTML += '</tbody></table>';
  document.getElementById('cryptoTable').innerHTML = tableHTML;

  // Update button label
  const btn = document.getElementById('showMoreBtn');
  if (btn) {
    btn.textContent = showingMore ? 'Show Less' : 'Show More';
  }
}

function toggleShowMore() {
  showingMore = !showingMore;

  const data = isSearching ? filteredCoins : allCoins;
  const currency = document.getElementById('currency').value;
  const symbol = getCurrencySymbol(currency);

  renderTable(data, symbol, currency);
}

function toggleShowMoreButton(visible) {
  const btnContainer = document.getElementById('showMoreContainer');
  if (btnContainer) {
    btnContainer.style.display = visible ? 'block' : 'none';
  }
}

function goHome() {
  lastSearchQuery = '';
  isSearching = false;
  showingMore = false;
  fetchCryptoData();
}


function filterCryptos() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const currency = document.getElementById('currency').value;
  const symbol = getCurrencySymbol(currency);

  lastSearchQuery = input;

  if (input === '') {
    isSearching = false;
    showingMore = false;
    fetchCryptoData();
    return;
  }

  filteredCoins = allCoins.filter(coin =>
    coin.name.toLowerCase().includes(input)
  );

  if (filteredCoins.length === 0) {
    document.getElementById('cryptoTable').innerHTML =
      `<p style="text-align:center;">No matches found.</p>`;
    toggleShowMoreButton(false);
    return;
  }

  isSearching = true;
  renderTable(filteredCoins, symbol, currency);
  toggleShowMoreButton(filteredCoins.length > 10);
}

// Initial load
fetchCryptoData();
