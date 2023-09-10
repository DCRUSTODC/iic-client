export default function About(props) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between my-16">
            <div className="p-4 sm:pr-4 max-w-[350px]">
              
                <div className="flex flex-col gap-3">
                  <h2 className="text-3xl font-bold">{props.title}</h2>
                  <div className="text-xl">{props.description}</div>
                </div> 
              
            </div>

            <div className="img p-7 flex items-center sm:rounded-xl sm:pl-16 max-w-[20rem]">
              
                <img className="border border-cyan rounded-xl" src={props.img} alt="" />
              
            </div>
          </div>
        
      </div>
    </>
  );
}
