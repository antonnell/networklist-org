
export default function Icon( { src , ...props }) {
    const IPFS_SCHEMA = "ipfs://"

    const parseUrl = (url) => {
      if (url?.startsWith(IPFS_SCHEMA)) {
        const cid = src.replace(IPFS_SCHEMA, "")
        return `https://ipfs.io/ipfs/${cid}`
      } else {
        return url
      }
    }

    return (
      <img src={parseUrl(src)} {...props} />
    )
}
