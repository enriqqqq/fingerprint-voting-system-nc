function SignUp() {
    return(
        <>
            <h1 className="text-xl font-bold">Sign Up</h1>
            <form action="" className="mt-3">
                <div className="flex flex-col items-start">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" className="rounded border border-black"></input>
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" className="rounded border border-black"></input>
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="c-password">Confirm Password</label>
                    <input type="password" id="c-password" name="c-password" className="rounded border border-black"></input>
                </div>
                <button className="mt-3 bg-slate-400 px-7 py-2 rounded hover:brightness-75 font-semibold">Login</button>
            </form>
        </>
    )
}

export default SignUp;