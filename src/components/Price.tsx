import useSWR from "swr"

export default function Price() {
    const { data } = useSWR('https://api.casperdefi.com/v1/tokens/0x5cc61a78f164885776aa610fb0fe1257df78e59b?chainId=250', {refreshInterval: 15})
    const price = data?.data?.token?.priceUSD

    return <div>{price}</div>
}