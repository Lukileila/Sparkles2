export default function Search () {
    return (
        <> 
       <div className="join flex justify-center flex-row mt-4 mb-4 ">
 
<div className="relative buttonShadow">
              <input type="text" placeholder="Type here..." className="input input-bordered w-full pr-16" /> 
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg></button>
            </div>
</div>
    </>
    )
}