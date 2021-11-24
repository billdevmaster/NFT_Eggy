import React from 'react';

const Homepage = () => {
    return (
        <>
            <section className="banner-wrapper">
                <div className="container">
                    <div className="w-1/2 pr-10">
                        <img src="./assets/img/banner-character-1.png" alt="Banner 1" />
                    </div>
                </div>
            </section>
            <section className="bg-secondary py-14">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center md:justify-end flex-wrap md:flex-nowrap">
                        <p className="text-6xl text-white font-bold uppercase mb-10 md:mb-0 md:text-left text-center md:mr-10">Available to mint jan 2022</p>
                        <button className="bg-transparent rounded-full py-2 px-3 border-4 border-white hover:border-opacity-70 font-bold text-white text-2xl">
                            Join Wating List
                        </button>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-6xl font-black text-dark-green uppercase mb-16">What are eggys?</h2>
                            <p className="text-xl text-dark-green">Eggys are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 5,555 randomly assembled Eggys.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-grey">
                <div className="container mx-auto">
                    <img src="./assets/img/image-1.png" className="mb-2" alt="Image 1" />
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                        <div className="text-center">
                            <h2 className="uppercase text-3xl font-black mb-1">Common</h2>
                            <p className="uppercase text-dark-green">2 assets <br />2000 eggys</p>
                        </div>
                        
                        <div className="text-center">
                            <h2 className="uppercase text-3xl font-black mb-1">Nifty</h2>
                            <p className="uppercase text-dark-green">a assets <br />1750 eggys</p>
                        </div>
                        
                        <div className="text-center">
                            <h2 className="uppercase text-3xl font-black mb-1">Tangy</h2>
                            <p className="uppercase text-dark-green">4 assets <br />1250 eggys</p>
                        </div>
                        
                        <div className="text-center">
                            <h2 className="uppercase text-3xl font-black mb-1">Elite</h2>
                            <p className="uppercase text-dark-green">5 assets <br />540 eggys</p>
                        </div>
                        
                        <div className="text-center">
                            <h2 className="uppercase text-3xl font-black mb-1">Ledgeneggy</h2>
                            <p className="uppercase text-dark-green">6 assets <br />15 eggys</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-primary">
                <div className="container mx-auto">
                    <p className="text-white text-2xl text-center">Rarity of Eggys are based on the amount of items they have. For example an eggy with one hat is much more common than an Eggy with a hat, outfit and different eyes.</p>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-3"><img src="./assets/img/eggy_33@2x.png" className="mx-auto" alt="Eggy 1" /></div>
                        <div className="md:col-span-2 pt-20">
                            <h3 className="uppercase text-6xl font-black text-dark-green mb-5">Buy an Eggy & Help a Hen</h3>
                            <p className="text-dark-green text-xl">By owning an Eggy you will be able to join Club Eggy, an exclusiveBy owning an Eggy you will be able to join Club Eggy, an exclusive</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-2 pt-20">
                            <h3 className="uppercase text-6xl font-black text-dark-green mb-5">Club Eggy</h3>
                            <p className="text-dark-green text-xl ">By owning an Eggy you will be able to join Club Eggy, an exclusiveBy owning an Eggy you will be able to join Club Eggy, an exclusive</p>
                            <div className="flex items-center flex-wrap -mx-2.5">
                                <span className="rounded-full border-4 border-dark-green text-xl p-2 my-2.5 mx-2.5 uppercase">Behind the scenes</span>
                                <span className="rounded-full border-4 border-dark-green text-xl p-2 my-2.5 mx-2.5 uppercase">Gen 2 Voting</span>
                                <span className="rounded-full border-4 border-dark-green text-xl p-2 my-2.5 mx-2.5 uppercase">Events</span>
                                <span className="rounded-full border-4 border-dark-green text-xl p-2 my-2.5 mx-2.5 uppercase">Member discord voting</span>
                                <span className="rounded-full border-4 border-dark-green text-xl p-2 my-2.5 mx-2.5 uppercase">Exclusive Giveways</span>

                            </div>
                        </div>
                        <div className="md:col-span-3"><img src="./assets/img/new_eggy_4@2x.png" className="mx-auto" alt="Eggy 1" /></div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-primary">
                <div className="container">
                    <h2 className="text-6xl uppercase font-black text-white mb-10 text-center">Roadmap</h2>
                    <div className="roadmap">
                        <div className="roadmap-item">
                            <h2 className="text-6xl uppercase font-black text-white mb-10 ">Nov 27th 2021</h2>
                            <div className="rounded-xl px-10 py-16 bg-white">
                                <p className="text-dark-green text-xl ">
                                    What’s that smell? What’s that intoxicating aroma hanging on the wind like a soft blanket; inviting itself into your nose to wrap those lovely little nose bristles in a blankety paradise? <br /> <br />
                                    That my friend….is the smell of ‘The Eggys’ boiling away in the pot. <br /> <br />
                                    They are not ready to come out yet, but boy oh boy are they boilin’ up real good! Don’t have egg on your face, come and join us over on Twitter and Discord to be one of the community. Participate in mini-games, community events and you might even be in with a chance of winning a prize (They may or may not have egg in them…)
                                </p>
                            </div>
                            <div className="roadmap-item-image">
                                <img src="./assets/img/eggy_19@2x.png" alt="Eggy 19" />
                            </div>
                        </div>
                        
                        <div className="roadmap-item">
                            <h2 className="text-6xl uppercase font-black text-white mb-10 ">Jan 27th 2022</h2>
                            <div className="rounded-xl px-10 py-16 bg-white">
                                <p className="text-dark-green text-xl ">
                                    Release date party! Clucking hell; this party is going to be smashing! (Well that’s our party invite revoked). <br /> <br />
                                    Make sure you are part of the community to hear more about the details of the release date party; join in with our special events and win some prizes that will make you to t-yolk of the town! <br /><br />
                                    I will show myself out….
                                </p>
                            </div>
                            <div className="roadmap-item-image">
                                <img src="./assets/img/eggy_19@2x.png" alt="Eggy 19" />
                            </div>
                        </div>
                        
                        <div className="roadmap-item">
                            <h2 className="text-6xl uppercase font-black text-white mb-10 ">Jan 27th 2022</h2>
                            <div className="rounded-xl px-10 py-16 bg-white">
                                <p className="text-dark-green text-xl ">
                                    Get those paper towels ready, ‘The Eggys’ are comin’ out hot! <br /> <br />
                                    Join us over on discord to celebrate the release of ‘The Eggys’. You bring the bread. I’ll bring the toaster. Let’s get some toast to dip into these eggs! <br /> <br />
                                    Oh and of course… head on over to the minting link at the top to mint your very own Eggy…..
                                </p>
                            </div>
                            <div className="roadmap-item-image">
                                <img src="./assets/img/eggy_16@2x.png" alt="Eggy 19" />
                            </div>
                        </div>
                        
                        <div className="roadmap-item">
                            <h2 className="text-6xl uppercase font-black text-white mb-10 ">The Future</h2>
                            <div className="rounded-xl px-10 py-16 bg-white">
                                <p className="text-dark-green text-xl ">
                                    The year is 2080; ‘The Eggys’ are 1600 generations deep, an eggy sits at the helm in the white house; number 10….no….the world is run by a blockchain of Eggys!!<br /> <br />
                                    Woops, sorry… caught me egg-dreamin’…. <br /> <br />
                                    We have big plans for the future of ‘The Eggys’; and who knows, we might be in the white house one day…but let’s take things one step at a time.
                                </p>
                            </div>
                            <div className="roadmap-item-image">
                                <img src="./assets/img/eggy_19@2x.png" alt="Eggy 19" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Homepage;

