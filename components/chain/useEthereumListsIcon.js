import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useEthereumListsIcon(iconName) {
  const { data: iconData, error: iconError } = useSWR(iconName ? `https://raw.githubusercontent.com/ethereum-lists/chains/master/_data/icons/${iconName}.json` : null, fetcher)
  return { url: iconData?.shift()?.url, error: iconError }
}