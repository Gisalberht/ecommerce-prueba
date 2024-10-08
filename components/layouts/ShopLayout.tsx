import { FC } from 'react'
import Head from 'next/head'
import { Navbar, SideMenu } from '../ui';

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
	children: React.ReactNode;
}

export const ShopLayout: FC<Props> = ({children, title, pageDescription, imageFullUrl}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={pageDescription} />
				<meta name='og:title' content={title} />
				<meta name='og:description' content={pageDescription} />

				{
					imageFullUrl && (
						<meta name='og:title' content={imageFullUrl} />
					)
				}
			</Head>
			<nav>
				{/* TODO: Aqui va el NavBar */}
				<SideMenu />
				<Navbar />
			</nav>
			{/* TODO: Aqui va el SidBar */}
			<main style={{
				margin: '80px auto',
				maxWidth: '1440px',
				padding: '0px 30px'
			}}>
				{children}
			</main>
			{/* TODO: Footer */}
			<footer>
				{/* TODO: custom footer */}
			</footer>
		</>
	)
}