function login(){
    return(
        <>
        <div className="namediv">
            <label htmlFor="name">Name</label><br/>
            <input 
                type="text"
                name="name"
                id="name"
                placeholder="lütfen isminizi giriniz!!"
            />
        </div>

        <div className="surnamediv">
            <label htmlFor="surname">Surname</label>
            <input 
                type="text"
                name="surname"
                id="surname"
                placeholder="Lütfen soyisminizi giriniz!!"
            />
        </div>

        <div className="buttondiv">
            <button type="submit">Gönder</button>
        </div>

        </>
    );
}

export default login;