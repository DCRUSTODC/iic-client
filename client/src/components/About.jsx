

export default function About(props) {
    if (props.imgFirst === false) {
        return (
            <>
                <div className="flex flex-col-reverse max-h-[26rem] sm:flex-row sm:justify-between my-10">
                    <div className="p-8 sm:pr-0 max-w-[350px]">
                        <div className="h-full flex items-center">
                            <div>
                                <h2 className="text-2xl font-bold">
                                    {props.title}
                                </h2>
                                <div className="text-xl">
                                    {props.description}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="img flex items-start overflow-hidden sm:rounded-xl sm:pl-8 max-w-[20rem]">
                        <div className="pl-8 sm:pl-0 pr-6">
                            <img src={props.img} alt="" />

                        </div>
                    </div>

                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="flex flex-col max-h-[26rem] sm:flex-row sm:justify-between">
                    <div className="img flex items-start overflow-hidden sm:rounded-xl sm:pl-8 max-w-[20rem]">
                        <div className="pl-8 sm:pl-0 pr-6">
                            <img src={props.img} alt="" />

                        </div>
                    </div>
                    <div className="p-8 sm:pr-0 max-w-[350px]">
                        <div className="h-full flex items-center">
                            <div>
                                <h2 className="text-2xl font-bold">
                                    {props.title}
                                </h2>
                                <div className="text-xl">
                                    {props.description}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        )
    }
}