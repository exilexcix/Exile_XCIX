import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";

const truncate = (input, len) =>
	input.length > len ? `${input.substring(0, len)}...` : input;

function App() {
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);
	const [claimingNft, setClaimingNft] = useState(false);
	const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
	const [mintAmount, setMintAmount] = useState(1);
	const [CONFIG, SET_CONFIG] = useState({
		CONTRACT_ADDRESS: "",
		SCAN_LINK: "",
		NETWORK: {
			NAME: "",
			SYMBOL: "",
			ID: 0,
		},
		NFT_NAME: "",
		SYMBOL: "",
		MAX_SUPPLY: 1,
		WEI_COST: 0,
		DISPLAY_COST: 0,
		GAS_LIMIT: 0,
		MARKETPLACE: "",
		MARKETPLACE_LINK: "",
		SHOW_BACKGROUND: false,
	});

	const claimNFTs = () => {
		let cost = CONFIG.WEI_COST;
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalCostWei = String(cost * mintAmount);
		let totalGasLimit = String(gasLimit * mintAmount);
		console.log("Cost: ", totalCostWei);
		console.log("Gas limit: ", totalGasLimit);
		setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
		setClaimingNft(true);
		blockchain.smartContract.methods
			.mint(mintAmount)
			.send({
				gasLimit: String(totalGasLimit),
				to: CONFIG.CONTRACT_ADDRESS,
				from: blockchain.account,
				value: totalCostWei,
			})
			.once("error", (err) => {
				console.log(err);
				setFeedback("Sorry, something went wrong please try again later.");
				setClaimingNft(false);
			})
			.then((receipt) => {
				console.log(receipt);
				setFeedback(
					`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
				);
				setClaimingNft(false);
				dispatch(fetchData(blockchain.account));
			});
	};

	const decrementMintAmount = () => {
		let newMintAmount = mintAmount - 1;
		if (newMintAmount < 1) {
			newMintAmount = 1;
		}
		setMintAmount(newMintAmount);
	};

	const incrementMintAmount = () => {
		let newMintAmount = mintAmount + 1;
		if (newMintAmount > 10) {
			newMintAmount = 10;
		}
		setMintAmount(newMintAmount);
	};

	const getData = () => {
		if (blockchain.account !== "" && blockchain.smartContract !== null) {
			dispatch(fetchData(blockchain.account));
		}
	};

	const getConfig = async () => {
		const configResponse = await fetch("/config/config.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		const config = await configResponse.json();
		SET_CONFIG(config);
	};

	useEffect(() => {
		getConfig();
	}, []);

	useEffect(() => {
		getData();
	}, [blockchain.account]);

	let mintLive = false;
	let exileAlliances = false;

	return (
		<div className="wrapper" id="modern_wrap">
			<img class="logo" src="./img/logo.png" alt="EXILE XCiX" />
			//--Mobile NAV--
			<nav class="mobile-nav">
				
				<ul>
					<li><a href="#join">JOIN </a></li>
					<li><a href="#roadmap">ROADMAP</a></li>
					<li><a href="#team">TEAM</a></li>
				</ul>
			</nav>
			//--DESKTOP NAV--
			<nav class="dt-nav">
				
				<ul>
					<li><a href="#join">JOIN EXILE XCiX</a></li>
					<li><a href="#roadmap">ROADMAP</a></li>
					<li><a href="#team">THE TEAM</a></li>
				</ul>
			</nav>
			<header class="two-col-block">
			<div class="hero-text two-col-block__column">
					<h1>Join the Axis of Exiles</h1>
					<p>
						9,999 unique Exile XCIX NFTs randomly generated on the Ethereum
						blockchain.
					</p>
					{!mintLive ? (
					//--PRE MINT--
					<div class="mint-button pre-mint button"><p>Mint coming soon</p></div>
					//--END PRE MINT--
					):(
						<>
					//--MINT--
					<h2 class="availability">
					{data.totalSupply} / {CONFIG.MAX_SUPPLY}
					</h2>

					//-- SOLD OUT--
					{Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
					<div class="sold-out">
						<div class="mint-button button"><p>SOLD OUT</p></div>
						<p>You can still find {CONFIG.NFT_NAME} on

						<a target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
							{CONFIG.MARKETPLACE}
						</a></p>
					</div>
				) : (
					<>
						<h3>
							1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
							{CONFIG.NETWORK.SYMBOL}.
						</h3>

						<p>Excluding gas fees.</p>

						{blockchain.account === "" || blockchain.smartContract === null ? (
							<div class="not-connected">
								<p>Connect to the {CONFIG.NETWORK.NAME} network</p>
								<div class="connect-wrap">
								<div class="button connect-btn"
									onClick={(e) => {
										e.preventDefault();
										dispatch(connect());
										getData();
									}}
								>
									<p>CONNECT</p>
								</div>
								{blockchain.errorMsg !== "" ? (
									<>
										<p>{blockchain.errorMsg}</p>
									</>
								) : null}
							</div>
							</div>
						) : (
							<>
								<p>{feedback}</p>
								<div class="purchase-wrap">
								<div class="quantity">
									<div class="button decrement-btn"
										disabled={claimingNft ? 1 : 0}
										onClick={(e) => {
											e.preventDefault();
											decrementMintAmount();
										}}
									>
										-
									</div>

									<p>{mintAmount}</p>

									<div class="button increment-btn"
										disabled={claimingNft ? 1 : 0}
										onClick={(e) => {
											e.preventDefault();
											incrementMintAmount();
										}}
									>
										+
									</div>
								</div>

								<div class='buy'>
									<div class="button mint-nft"
										disabled={claimingNft ? 1 : 0}
										onClick={(e) => {
											e.preventDefault();
											claimNFTs();
											getData();
										}}
									>
										{claimingNft ? "BUSY" : "BUY"}
									</div>
								</div>
								</div>
							</>
						)}
					</>
				)}
				</>
				)}
					//--END MINT--
				</div>
				<div class="hero-img two-col-block__column">
					<img src="./img/hero.gif" alt="EXILE XCiX" />
					<div class="sticky-tape sticky-tape-1"></div>
					<div class="sticky-tape sticky-tape-2"></div>
				</div>
			</header>
		

			<div class="disclaimer">
				<p>
					Please make sure you are connected to the right network (
					{CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please note:
					Once you make the purchase, you cannot undo this action.
				</p>

				<p>
					We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to
					successfully mint your NFT. We recommend that you don't lower the gas
					limit.
				</p>
			</div>
			<main>
				<a id="join"></a>
				<section class="join-exile two-col-block" aria-label="Join Exile XCiX">
					<div class="join-copy two-col-block__column">
						<h2>
							NFT project for the <span>XCIX</span>
						</h2>
						<p>We'd love to bring together a diverse range of creators and help them to get their projects off the ground by introducing them to complementary creators, using our network to promote them and a community fund to invest in them.

						</p>
						<p>
							Join the Discord, follow on Twitter. If you want to be rewarded be brave, be busy, be creative, and importantly believe!
						</p>
					</div>

					<div class="join-links two-col-block__column">
						<p>JOIN US:</p>
						<div class="two-col-block social">
							<a href="https://discord.gg/3JGtdSqUH6" target="_blank" class="two-col-block__column">
								<img src="./img/discord.png" alt="Discord" />
							</a>
							<a
								href="https://twitter.com/ExileXCIX"
								target="_blank"
								class="two-col-block__column"
							>
								<img src="./img/twitter.png" alt="Twitter" />
							</a>
						</div>
					</div>
				</section>
				<section class="banner">
					<img src="./img/banner.png" alt="banner" />
				</section>
				<section class="origins">
					<h2>Exile Origins</h2>
					<div class="two-col-block">
						<div class="origins-copy-left two-col-block__column">
							<p class="no-margin">You may not realise it but life exists beyond your reality, somewhat different yet sharing the same struggles. Tyranny, selfishness, greed. These are universal. Where there is life, they exist.</p>
							<p>For centuries and through these dimensions, a governing elite 1% have put in place rules, regulations and restrictions to control the ‘remainder’.
							</p>
							<p>One rebel, a variation of whom exists in every dimension, unique yet familiar, has long fought for this ‘remainder’. Operating in the shadows with name and description passed on through folklore, hearsay and partial sightings – long admired by the people.
							</p>
						</div>
						<div class="origins-copy-right two-col-block__column">
							<p class="no-margin">
								However, the line between good and evil is a thin one. One man’s friend is another man’s foe. Increasingly outcast by mainstream society as the elite use their tightening grip of media to turn public opinion against the rebel and pursue them for their ‘crimes’.</p>
							<p>
								Individually outnumbered, out-financed, isolated and exhausted. The rebels have been banished from the disparate dimensions with a bounty on their head, exiled by the very people they were trying to help. 
							</p>
							<p>
								Now, banding together for the first time, realising that they are stronger together than alone, our exiles are resolute.
							</p>
							<p>They will continue the fight for the remaining 99.</p>
						</div>
					</div>
				</section>
				<a id="roadmap"></a>
				<section class="roadmap">
					
						<h2>Roadmap <span>Coming Soon</span></h2>
						<p>Our project ethos is to help the underdog, support the little guy and a belief that we can achieve much more together than we could have alone. Our roadmap is design to help achieve that and will be voted on by the community before finalising.</p>
						<img src="./img/graffiti.png" alt="XCiX" />
					
				</section>
				<a id="team"></a>
				<section class="team">
					<h2>The Team</h2>
					<p class="blurb">A team of 4 Exiles each with 10-15yrs experience across creative, technical, marketing and innovation. All a bit worn down by the grind of a 9-5, feeling boxed-in and under-utilised. We aim to break free and invest more time in developing and supporting creative ventures. Hence the inspiration for the project.</p>
					<div class="team-grid">
					<div class="team-member brian two-col-block">
						<img
							src="./img/xro.jpg"
							alt="Xro"
							class="team-avatar two-col-block__column"
						/>
						<div class="team-memeber-info two-col-block__column">
							<h4 class="team-member-name">Xro</h4>
							<p class="team-member-bio">Story, organisation and coordination</p>
						</div>
					</div>
					<div class="team-member peter two-col-block">
						<img
							src="./img/pedro.jpg"
							alt="Pedro"
							class="team-avatar two-col-block__column"
						/>
						<div class="team-memeber-info two-col-block__column">
							<h4 class="team-member-name">Pedro</h4>
							<p class="team-member-bio">Artist with an attitude.</p>
						</div>
					</div>
					<div class="team-member alan two-col-block">
						<img
							src="./img/al.jpg"
							alt="Al"
							class="team-avatar two-col-block__column"
						/>
						<div class="team-memeber-info two-col-block__column">
							<h4 class="team-member-name">Al</h4>
							<p class="team-member-bio">Technology and development.</p>
						</div>
					</div>
					<div class="team-member mal two-col-block">
						<img
							src="./img/macky.jpg"
							alt="Macky"
							class="team-avatar two-col-block__column"
						/>
						<div class="team-memeber-info two-col-block__column">
							<h4 class="team-member-name">Macky</h4>
							<p class="team-member-bio">Community, creative and security.</p>
						</div>
					</div>
					</div>
				</section>
				{!exileAlliances ? (<>
				</>):(
				<section class="partners">
					<h2>Exile Alliances</h2>
					<div class="partner-wrap">
						<div class="partner"><a href="" target="_blank"><img src="./img/alan.png" alt="" /></a></div>
						<div class="partner"><a href="" target="_blank"><img src="./img/alan.png" alt="" /></a></div>
						<div class="partner"><a href="" target="_blank"><img src="./img/alan.png" alt="" /></a></div>
						<div class="partner"><a href="" target="_blank"><img src="./img/alan.png" alt="" /></a></div>
						<div class="partner"><a href="" target="_blank"><img src="./img/alan.png" alt="" /></a></div>
						<div class="partner"><a href="" target="_blank"><img src="./img/alan.png" alt="" /></a></div>
					</div>
				</section>
				)}
			</main>
		</div>
	);
}

export default App;
