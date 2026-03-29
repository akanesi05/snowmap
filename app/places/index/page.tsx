import EditButton from '../../_components/EditButton'
export default function PlacesIndexPage() {
  return (
    <div>
        <h1>場所一覧</h1>
    <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <EditButton />
            </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <EditButton />
            </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <EditButton />
            </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <EditButton />
            </div>
        </div>
    </div>
    </div>
  )
}
