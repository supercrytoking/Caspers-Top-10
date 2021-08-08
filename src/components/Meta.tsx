import Head from 'next/head'

const Meta = () => {
    const title = 'Caspers Top 10'
    const description = 'Caspers Top 10 Tokens On Fantom Opera, We Think You Should Check Out.'
    const url = 'https://top10.casperdefi.com'

    return (
        <Head>
            <title>Caspers's Top Ten</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="og:description" property="og:description" content={description} />
            <meta property="og:site_name" content={title} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content={url} />
            <link rel="icon" type="image/png" href="https://fuckmikeether.casperdefi.com/img/fuck-mike-eth.jpg" />
            <meta property="og:image" content="https://fuckmikeether.casperdefi.com/img/fuck-mike-eth.jpg" />
            <meta name="twitter:image" content="https://fuckmikeether.casperdefi.com/img/fuck-mike-eth.jpg" />
        </Head>
    )
}

export default Meta
