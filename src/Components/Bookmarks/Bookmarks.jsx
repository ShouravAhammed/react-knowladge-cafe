import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {


    // console.log(bookmarks);
    return (
        <div className="col-span-1">
            <div className="bg-[#6047EC1A] p-5 rounded-md border-2 border-[#6047EC]">
                    <h3 className="text-[#6047EC] font-bold text-2xl text-center" >Spent time on read : {readingTime} min </h3>
            </div>
        <div className="mt-5 bg-[#1111110D] p-5 rounded-md">
            <h3 className="text-2xl font-bold text-[#111111]">Bookmarked Blogs : {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id}
                     bookmark={bookmark}>
                     </Bookmark>)
            }
            </div>
        </div>
    );
};


export default Bookmarks;