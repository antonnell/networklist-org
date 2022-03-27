import BigNumber from 'bignumber.js';
import Numeral from 'numeral';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

// todo: get navigator declared somehow? probably an issue with using nextjs
// function getLang() {
//  if (window.navigator.languages != undefined)
//   return window.navigator.languages[0];
//  else
//   return window.navigator.language;
// }

export function formatCurrency(amount, decimals = 2) {
  if (!isNaN(amount)) {
    const formatter = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

    return formatter.format(amount);
  } else {
    return 0;
  }
}

export function formatAddress(address, length = 'short') {
  if (address && length === 'short') {
    address = address.substring(0, 6) + '...' + address.substring(address.length - 4, address.length);
    return address;
  } else if (address && length === 'long') {
    address = address.substring(0, 12) + '...' + address.substring(address.length - 8, address.length);
    return address;
  } else {
    return null;
  }
}

export function bnDec(decimals) {
  return new BigNumber(10).pow(parseInt(decimals));
}

export function getProvider() {
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    if (window.ethereum.isMetaMask) return 'Metamask';
    if (window.ethereum.isImToken) return 'imToken';
  }
  return 'Wallet';
}

export const toK = (num) => {
  return Numeral(num).format('0.[00]a');
};

export function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

const rpcPostBody = { jsonrpc: '2.0', method: 'eth_getBlockByNumber', params: ['latest', false], id: 1 };

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const rpcFetcher = (...urls) => {
  return Promise.allSettled(
    urls.map((url) =>
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(rpcPostBody),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())
    )
  );
};

export function useChain(name) {
  const { data, error } = useSWR(`https://api.llama.fi/charts/${name}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useRPCData(urls) {
  const { data, error } = useSWR(urls, rpcFetcher, { refreshInterval: 10000 });

  let blocks = urls.map((url) => ({ url: url }));

  const resourceList = window.performance.getEntriesByType('resource');

  data?.forEach((item, index) => {
    if (item.status === 'fulfilled') {
      let height = item.value?.result?.number ?? null;
      if (height) {
        const hexString = height.toString(16);
        height = parseInt(hexString, 16);
      }
      blocks[index]['height'] = height;
      let url = blocks[index].url;

      if (url.slice(-1) !== '/') {
        url += '/';
      }

      let resource = resourceList
        .slice()
        .reverse()
        .find((item) => item.initiatorType === 'fetch' && (item.name === blocks[index].url || item.name === url));

      const latency = resource?.duration;

      blocks[index]['latency'] = latency;
    }
  });
  blocks = blocks.sort((a, b) =>{
    if((a.height ?? 0) !== (b.height ?? 0)){
      return (b.height ?? 0) - (a.height ?? 0)
    } else {
      return (a.latency ?? 0) - (b.latency ?? 0)
    }
  });

  return {
    data: blocks,
    isLoading: !error && !data,
    isError: error,
  };
}

/**
 * get standard percent change between two values
 * @param {*} valueNow
 * @param {*} value24HoursAgo
 */
export const getPercentChange = (valueNow, value24HoursAgo) => {
  const adjustedPercentChange =
    ((parseFloat(valueNow) - parseFloat(value24HoursAgo)) / parseFloat(value24HoursAgo)) * 100;
  if (isNaN(adjustedPercentChange) || !isFinite(adjustedPercentChange)) {
    return null;
  }
  return adjustedPercentChange;
};

/**
 * get tvl of specified day before last day using chart data
 * @param {*} chartData
 * @param {*} daysBefore
 */
export const getPrevTvlFromChart = (chart, daysBefore) => {
  return chart[chart.length - 1 - daysBefore]?.[1] ?? null;
};
