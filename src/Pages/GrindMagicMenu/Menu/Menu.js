import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [coffee, setCoffee] = useState(null);
    const [sugar, setSugar] = useState(null);
    const { data: coffeeItems, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://grind-magic-server-alamin0561464977.vercel.app/coffee-menu');
            const data = res.json();
            return data;
        }
    });
    const handelOder = () => {
        setSugar(null)
        coffee.sugar = sugar;
        fetch('https://grind-magic-server-alamin0561464977.vercel.app/coffee-menu', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    if (isLoading) {
        return <h1>Loading...</h1>
    };
    return (
        <div className=' container mx-auto mb-16'>
            <div className=' text-center'>
                <samp className=' p-2 text-xl font-bold border-y-8 rounded-lg border-amber-700'>OUR CHEF</samp>
                <h1 className=' text-4xl font-bold mt-5'>MEET OUR PROFESSIONAL</h1>
            </div>
            <div className=' text-lg font-bold flex gap-5 justify-center border border-slate-600 w-[60%] mx-auto my-8 py-2 rounded'>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>ALL</h1>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>CHOCOLATE</h1>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>COFFEE</h1>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>SANDWICHES</h1>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>SWEETS</h1>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>BLACK TEA</h1>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>GREEN TEA</h1>
            </div>
            <div className="grid gap-8 row-gap-5 md:grid-cols-2">
                {
                    coffeeItems.map(coffee =>
                        <label htmlFor="coffee-order-modal" onClick={() => setCoffee(coffee)} key={coffee.id} className="relative p-px overflow-hidden transition duration-300 transform border border-zinc-800 rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                            <div className="relative flex flex-col h-full p-2 rounded-sm lg:items-center lg:flex-row">
                                <Link to='/'>
                                    <div className="mb-6 mr-6 lg:mb-0">
                                        <div className="flex items-center justify-center w-20 h-20 rounded-full lg:w-32 lg:h-32">
                                            <img src={coffee.image} alt="" />
                                        </div>
                                    </div>
                                </Link>
                                <div className="flex flex-col justify-between flex-grow">
                                    <div className=' flex justify-between items-center pr-2'>
                                        <h6 className="mb-2 font-bold text-xl">
                                            {coffee.name}
                                        </h6>
                                        <h6 className="mb-2 font-bold text-3xl text-amber-700">
                                            ${coffee.price}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </label>)
                }
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="coffee-order-modal" className="modal-toggle" />

            {
                coffee &&
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-xl">{coffee?.name}</h3>
                        <div>
                            <div onClick={() => setSugar('1 Spoon of sugar')} className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text font-bold">1 Spoon of sugar</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                </label>
                            </div>
                            <div onClick={() => setSugar('2 Spoon of sugar')} className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text font-bold">2 Spoon of sugar</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                </label>
                            </div>
                            <div onClick={() => setSugar('3 Spoon of sugar')} className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text font-bold">3 Spoon of sugar</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                </label>
                            </div>
                            <div onClick={() => setSugar('No sugar')} className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text font-bold">No Sugar</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                </label>
                            </div>
                        </div>
                        <div className="modal-action">
                            <label onClick={() => handelOder(coffee)} htmlFor="coffee-order-modal" className="btn btn-outline btn-info w-full">Add Card</label>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Menu;