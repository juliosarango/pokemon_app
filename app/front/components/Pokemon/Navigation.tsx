import Link from "next/link";

const Navigation = (props) => {
    const { next, prev } = props;
    const next_page = next?.split("?")[1];
    const prev_page = prev?.split("?")[1];

    if (next !== "" && prev === "") {
        
        return (
            <>                
                <li className="mx-1">
                    <Link
                    href={`pokemon/?${next_page}`}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                    Next
                    </Link>
                </li>    
            </>
        )
    } else if (next === "" && prev !== "") {
        return (
            <>                
                <li className="mx-1">
                    <Link
                    href={`pokemon/?${prev_page}`}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                    Prev
                    </Link>
                </li>    
            </>
        )
    }
    if (next === "" && prev === "") {
        return <></>
    }
    
    return (
        <>
        <li className="mx-1">
            <a
            href={`pokemon/?${prev_page}`}
            className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
            Prev
            </a>
        </li>
        <li className="mx-1">
            <a
            href={`pokemon/?${next_page}`}
            className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
            Next
        </a>
        </li>
        </>
    )       
}

export default Navigation