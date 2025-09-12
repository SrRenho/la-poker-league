import useArrowNavigation from "./useArrowNavigation";

export default function NavigationButtons({goPrev, goNext, hasPrev, hasNext}){

    useArrowNavigation({ goPrev, goNext, hasPrev, hasNext });


    return (
                <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                {hasPrev ? (
                    <button onClick={goPrev}>Previous</button>
                ) : (
                    <button style={{ visibility: "hidden" }}>Previous</button>
                )}
        
                {hasNext ? (
                    <button onClick={goNext} style={{ marginLeft: "1rem" }}>Next</button>
                ) : (
                    <button style={{ marginLeft: "1rem", visibility: "hidden" }}>Next</button>
                )}
                </div>
    )
}