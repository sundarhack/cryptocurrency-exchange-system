



export default function TrendingCards({ image, name, rank ,price}) {



    return (

        <div class="max-w-sm bg-white text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg p-8"  src={image} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <div style={{padding:"10px 0px 10px"}}>Market Cap : {rank}</div>
                <div>Price : {price}</div>
            </div>
        </div>

    )


}