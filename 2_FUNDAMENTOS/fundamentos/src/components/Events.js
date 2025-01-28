const Events = () => {

    const handleyMyEvent = (e) =>{
        console.log(e);
        console.log("ativou o evento!!!!!!!!!!!!!!!!!")
    };
    return(
        <div>
            <div>
                <button onClick={handleyMyEvent}>click aqui</button>
            </div>
            <div>
                <button onClick={()=> console.log("Clicouu!")} >click aqui tambem</button>
            </div>
        </div>
    )
}
export default Events;