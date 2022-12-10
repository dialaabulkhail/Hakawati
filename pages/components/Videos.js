import React from 'react'
import { useState } from 'react'

const Videos = () => {
    const [series, setSeries] = useState(false)
    return (
        <div>
                 
            <section class="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">

       <div className='flex justify-center font-bold text-2xl gap-5'>
       <button onClick={()=>setSeries(true)} className={series? 'p-2 rounded-lg bg-black/10' :'p-2 rounded-lg hover:bg-black/10'}> مسلسلات  </button>
        <button onClick={()=>setSeries(false)}  className={series?'p-2 rounded-lg hover:bg-black/10' : 'p-2 rounded-lg bg-black/10'}>أفلام </button>
       </div>
{series? 

<div class="container mx-auto">
<div className='w-full text-xl font-bold mb-5'>
Rick And Morty
    <hr />
</div>
<div class=" flex flex-wrap ">
    <div class="w-full px-1 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://c4.wallpaperflare.com/wallpaper/410/59/609/rick-and-morty-tv-rick-sanchez-morty-smith-wallpaper-preview.jpg"
                alt="image"
                class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        Episode الحلقة 1 |  1 
                    </a>
                </h3>
                {/* <p class="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                </p> */}
                <a
                    href="javascript:void(0)"
                    class="text-body-color hover:border-primary hover:bg-black/10 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition"
                >
                    شاهد الاّن
                </a>
            </div>
        </div>
    </div>
    <div class="w-full px-1 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://c4.wallpaperflare.com/wallpaper/410/59/609/rick-and-morty-tv-rick-sanchez-morty-smith-wallpaper-preview.jpg"
                alt="image"
                class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                   Episode الحلقة 2 |  2 
                    </a>
                </h3>
                {/* <p class="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                </p> */}
                <a
                    href="javascript:void(0)"
                    class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                >
                    شاهد الاّن
                </a>
            </div>
        </div>
    </div>
    <div class="w-full px-1 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://c4.wallpaperflare.com/wallpaper/410/59/609/rick-and-morty-tv-rick-sanchez-morty-smith-wallpaper-preview.jpg"
                alt="image"
                class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      Episode الحلقة 3 |  3 
                    </a>
                </h3>
                {/* <p class="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                </p> */}
                <a
                    href="javascript:void(0)"
                    class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                >
                    شاهد الاّن
                </a>
            </div>
        </div>

    </div>


</div>
<div className='w-full text-xl font-bold mb-5'>
Sonic Boom
    <hr />

    <div class=" flex flex-wrap mt-5">
    <div class="w-full px-1 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://www.mikrosanimation.com/app/uploads/2022/01/sonic-boom-e1642436905361-1024x576.jpeg"
                alt="image"
                class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                       Episode الحلقة 1 |  1 
                    </a>
                </h3>
                {/* <p class="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                </p> */}
                <a
                    href="javascript:void(0)"
                    class="text-body-color hover:border-primary hover:bg-black/10 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition"
                >
                    شاهد الاّن
                </a>
            </div>
        </div>
    </div>
    <div class="w-full px-1 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://www.mikrosanimation.com/app/uploads/2022/01/sonic-boom-e1642436905361-1024x576.jpeg"
                alt="image"
                class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                         Episode الحلقة 2 |  2 
                    </a>
                </h3>
                {/* <p class="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                </p> */}
                <a
                    href="javascript:void(0)"
                    class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                >
                    شاهد الاّن
                </a>
            </div>
        </div>
    </div>

    <div class="w-full px-1 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://www.mikrosanimation.com/app/uploads/2022/01/sonic-boom-e1642436905361-1024x576.jpeg"
                alt="image"
                class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                         Episode الحلقة 3 |  3 
                    </a>
                </h3>
                {/* <p class="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                </p> */}
                <a
                    href="javascript:void(0)"
                    class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                >
                    شاهد الاّن
                </a>
            </div>
        </div>
    </div>

    
    
    </div>
</div>

</div>







:
// in MOVIES CASE
<div class="container mx-auto">
<div className='w-full text-xl font-bold mb-5'>
    Toy Story
    <hr />
</div>
<div class=" flex flex-wrap ">
    <div class="w-full px-1 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://wallpapercave.com/wp/wp1811896.jpg"
                alt="image"
                class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        Part الجزء الاول |  1 
                    </a>
                </h3>
                {/* <p class="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                </p> */}
                <a
                    href="javascript:void(0)"
                    class="text-body-color hover:border-primary hover:bg-black/10 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition"
                >
                    شاهد الاّن
                </a>
            </div>
        </div>
    </div>
    <div class="w-full px-1 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://m.media-amazon.com/images/M/MV5BMWM3MDJkYjAtYzI0My00ZGY4LTk0MWEtN2RhZjE4MWNhZWYzXkEyXkFqcGdeQXVyNTU5MzI1OTM@._V1_.jpg"
                alt="image"
                class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                       Part الجزء الثاني |  2 
                    </a>
                </h3>
                {/* <p class="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                </p> */}
                <a
                    href="javascript:void(0)"
                    class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                >
                    شاهد الاّن
                </a>
            </div>
        </div>
    </div>
    <div class="w-full px-1 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/808203B21BA2C25DB8DB4792D35A3F76334896EBA848806118C53AD2B84E18A8/scale?width=1200&aspectRatio=1.78&format=jpeg"
                alt="image"
                class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                       Part الجزء الثالث |  3 
                    </a>
                </h3>
                {/* <p class="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                </p> */}
                <a
                    href="javascript:void(0)"
                    class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                >
                    شاهد الاّن
                </a>
            </div>
        </div>

    </div>


</div>
<div className='w-full text-xl font-bold mb-5'>
Hotel Transylvania
    <hr />

    <div class=" flex flex-wrap mt-5">
    <div class="w-full px-1 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc246161-6ffa-4ebc-a6fb-1da0b2bd9296/d5z77cb-729e969e-9e72-47f7-b418-95a3de36a30a.jpg/v1/fill/w_1024,h_569,q_75,strp/hotel_transylvania_character_wallpaper____by_vilukshan81_d5z77cb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTY5IiwicGF0aCI6IlwvZlwvYmMyNDYxNjEtNmZmYS00ZWJjLWE2ZmItMWRhMGIyYmQ5Mjk2XC9kNXo3N2NiLTcyOWU5NjllLTllNzItNDdmNy1iNDE4LTk1YTNkZTM2YTMwYS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JcSVmNUPqwUjOeHMK7ZPwsHauHZFRKEoIosFgsLsp_U"
                alt="image"
                class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        Part الجزء الاول |  1 
                    </a>
                </h3>
                {/* <p class="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                </p> */}
                <a
                    href="javascript:void(0)"
                    class="text-body-color hover:border-primary hover:bg-black/10 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition"
                >
                    شاهد الاّن
                </a>
            </div>
        </div>
    </div>
    <div class="w-full px-1 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://w0.peakpx.com/wallpaper/541/213/HD-wallpaper-hotel-transylvania-2-transylvania-movie-hotel-2.jpg"
                alt="image"
                class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        Part الجزء الثاني |  2 
                    </a>
                </h3>
                {/* <p class="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                </p> */}
                <a
                    href="javascript:void(0)"
                    class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                >
                    شاهد الاّن
                </a>
            </div>
        </div>
    </div>

    <div class="w-full px-1 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://img-eshop.cdn.nintendo.net/i/35752a0a850a9ebd9cedaefde87f705fe1ec8bcba616a36b42cea9c1337c9cc5.jpg"
                alt="image"
                class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        Part الجزء الثالث |  3 
                    </a>
                </h3>
                {/* <p class="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                </p> */}
                <a
                    href="javascript:void(0)"
                    class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                >
                    شاهد الاّن
                </a>
            </div>
        </div>
    </div>

    
    
    </div>
</div>

</div>

}

                           </section>


        </div>
    )
}

export default Videos