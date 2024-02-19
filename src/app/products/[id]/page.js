export default function DynamictPage ({params, searchParams}) {
    console.log(params);

    return (
        <div>
            <h2> this dynamic page : {params.id}</h2>
            <h2> Search by:  {searchParams.category}</h2>
        </div>
    )
}